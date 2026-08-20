import os
import sys
import json
import logging
from typing import TypedDict, Optional, List
from dotenv import load_dotenv
from langgraph.graph import StateGraph, END

# Section 1 — Path Setup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from agents.consultant import parse_user_intent, generate_clarification
from agents.quant_swarm import run_quant_swarm
from agents.visualizer import generate_narrative, build_dashboard_payload
from airs.holdings import load_simulation_holdings
from airs.preferences import get_user_constraints

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

# Section 2 — State Definition
class AgentState(TypedDict):
    user_message: str
    strategy: Optional[dict]
    clarification_needed: Optional[bool]
    clarification_question: Optional[str]
    portfolio_result: Optional[dict]
    narrative: Optional[str]
    dashboard_payload: Optional[dict]
    thought_log: List[str]
    thought_callback: Optional[callable]
    error: Optional[str]
    simulation_id: Optional[str]
    user_token: Optional[str]
    budget: Optional[float]
    max_turnover: Optional[float]

# Section 3 — Node Functions
def consultant_node(state: AgentState):
    logger.info("Entering Consultant Node")
    
    user_token = state.get('user_token')
    user_constraints = get_user_constraints(user_token) if user_token else None
    
    strategy = parse_user_intent(state['user_message'], user_constraints=user_constraints)
    clarification = generate_clarification(strategy)
    return {
        "strategy": strategy,
        "clarification_needed": clarification is not None,
        "clarification_question": clarification
    }

def quant_swarm_node(state: AgentState):
    logger.info("Entering Quant Swarm Node")
    thoughts = []
    
    def internal_callback(msg):
        thoughts.append(msg)
        ext_cb = state.get('thought_callback')
        if ext_cb:
            ext_cb(msg)
            
    # Load existing holdings if simulation context is provided
    sim_id = state.get('simulation_id')
    user_token = state.get('user_token')
    
    current_weights, portfolio_value = load_simulation_holdings(sim_id, user_token)
    if isinstance(current_weights, dict) and "error" in current_weights:
        err_text = current_weights['error']
        internal_callback(f"⚠️ Context Load Warning: {err_text}")
        current_weights = {}
        portfolio_value = 0.0

    if sim_id:
        internal_callback(f"Loaded existing portfolio context: {len(current_weights)} positions, Value: ${portfolio_value:,.2f}")
    
    # Allow explicit state overrides or fallback to strategy parsed intents
    budget = state.get('budget')
    if budget is None and state['strategy']:
        budget = state['strategy'].get('budget')
        
    max_turnover = state.get('max_turnover')
    if max_turnover is None and state['strategy']:
        max_turnover = state['strategy'].get('max_turnover')
        
    user_constraints = get_user_constraints(user_token) if user_token else None
    
    result = run_quant_swarm(
        strategy=state['strategy'], 
        current_weights_dict=current_weights if current_weights else None,
        budget=budget,
        portfolio_value=portfolio_value,
        max_turnover=max_turnover,
        user_constraints=user_constraints,
        thought_callback=internal_callback
    )
    
    return {
        "portfolio_result": result,
        "thought_log": thoughts
    }

def visualizer_node(state: AgentState):
    logger.info("Entering Visualizer Node")
    narrative = generate_narrative(state['portfolio_result'])
    payload = build_dashboard_payload(state['portfolio_result'], narrative)
    return {
        "narrative": narrative,
        "dashboard_payload": payload
    }

def error_node(state: AgentState):
    logger.info("Entering Error Node")
    msg = "Pipeline failed at quant_swarm stage — optimisation returned no result or solver error."
    return {
        "error": msg,
        "dashboard_payload": {"status": "error", "message": msg}
    }

# Section 4 — Routing Functions
def route_after_consultant(state: AgentState):
    if state.get('clarification_needed'):
        return "clarify"
    return "quant_swarm"

def route_after_quant(state: AgentState):
    if state.get('portfolio_result') is None:
        return "error"
    return "visualizer"

# Section 5 — Graph Assembly
workflow = StateGraph(AgentState)

workflow.add_node("consultant", consultant_node)
workflow.add_node("quant_swarm", quant_swarm_node)
workflow.add_node("visualizer", visualizer_node)
workflow.add_node("error_node", error_node)

workflow.set_entry_point("consultant")

workflow.add_conditional_edges(
    "consultant",
    route_after_consultant,
    {
        "clarify": END,
        "quant_swarm": "quant_swarm"
    }
)

workflow.add_conditional_edges(
    "quant_swarm",
    route_after_quant,
    {
        "error": "error_node",
        "visualizer": "visualizer"
    }
)

workflow.add_edge("visualizer", END)
workflow.add_edge("error_node", END)

# Compile
app = workflow.compile()

# Section 6 — run_pipeline()
def run_pipeline(user_message: str, thought_callback=None, simulation_id=None, user_token=None, budget=None, max_turnover=None):
    initial_state = {
        "user_message": user_message,
        "strategy": None,
        "clarification_needed": False,
        "clarification_question": None,
        "portfolio_result": None,
        "narrative": None,
        "dashboard_payload": None,
        "thought_log": [],
        "thought_callback": thought_callback,
        "error": None,
        "simulation_id": simulation_id,
        "user_token": user_token,
        "budget": budget,
        "max_turnover": max_turnover
    }
    return app.invoke(initial_state)

if __name__ == "__main__":
    # Section 7 — Main Testing
    print("\n--- Running Full Agent Pipeline Test ---")
    final_output = run_pipeline("I want a balanced portfolio focused on high-quality value stocks")
    
    if final_output.get('clarification_needed'):
        print(f"\nCLARIFICATION NEEDED: {final_output['clarification_question']}")
    elif final_output.get('error'):
        print(f"\nPIPELINE ERROR: {final_output['error']}")
    else:
        print("\n--- Pipeline Thought Log ---")
        for thought in final_output['thought_log']:
            print(f"- {thought}")
            
        print("\n--- Generated Narrative ---")
        print(final_output['narrative'])
        
        print(f"\nPortfolio built with {final_output['dashboard_payload']['n_positions']} positions.")
