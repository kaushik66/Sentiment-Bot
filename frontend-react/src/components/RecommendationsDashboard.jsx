import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, RefreshCw, AlertCircle, Plus, Briefcase, X, Loader2 } from 'lucide-react';
import WhatIfSandbox from './WhatIfSandbox';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import * as d3 from 'd3';

// ----------------------------------------------------------------------
// 1. RegimeHeader Component
// ----------------------------------------------------------------------
const RegimeHeader = ({ regimeData }) => {
  if (regimeData === "error") {
    return (
      <div className="w-full flex items-center justify-center py-2 bg-[color:var(--surface-sunken)] border-b border-[color:var(--border-strong)]">
        <span className="text-[10px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-[0.2em]">REGIME DATA UNAVAILABLE</span>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const current = regimeData?.current || regimeData || {};
  const isLoad = !regimeData;

  const getRegimeColor = (regime) => {
    if (!regime) return 'text-[color:var(--text-primary)]';
    if (regime.includes('RISK-ON')) return 'text-[color:var(--positive)]';
    if (regime.includes('RISK-OFF')) return 'text-[color:var(--negative)]';
    return 'text-amber-600';
  };

  const getRecessionColor = (p) => {
    if (p < 20) return 'text-[color:var(--positive)]';
    if (p <= 40) return 'text-amber-600';
    return 'text-[color:var(--negative)]';
  };

  const MetricBlock = ({ label, value, colorClass }) => (
    <div className="flex flex-col gap-0.5">
      <span className="text-[9px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.1em]">{label}</span>
      {isLoad ? (
        <div className="w-12 h-3 bg-[color:var(--border-subtle)] animate-pulse rounded-none" />
      ) : (
        <span className={`text-[13px] font-mono font-medium leading-none ${colorClass || 'text-[color:var(--text-primary)]'}`}>
          {value}
        </span>
      )}
    </div>
  );

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-[color:var(--surface-sunken)] border-b border-[color:var(--border-strong)]">
      <MetricBlock 
        label="Regime" 
        value={current.regime ? current.regime.toUpperCase() : 'UNKNOWN'} 
        colorClass={getRegimeColor(current.regime?.toUpperCase())} 
      />
      <MetricBlock 
        label="Recession Prob" 
        value={typeof current.p_recession === 'number' ? `${(current.p_recession * 100).toFixed(1)}%` : '0.0%'} 
        colorClass={getRecessionColor(current.p_recession * 100)} 
      />
      <MetricBlock 
        label="Mom Scalar" 
        value={typeof current.momentum_scalar === 'number' ? current.momentum_scalar.toFixed(3) : '0.000'} 
      />
      <MetricBlock 
        label="TBill Cap" 
        value={typeof current.tbill_cap === 'number' ? `${(current.tbill_cap * 100).toFixed(1)}%` : '0.0%'} 
      />
      <MetricBlock 
        label="As Of" 
        value={formatDate(current.date)} 
        colorClass="text-[color:var(--text-tertiary)]"
      />
    </div>
  );
};

// ----------------------------------------------------------------------
// 2. Engine Logs Component
// ----------------------------------------------------------------------
const EngineLogs = ({ thoughts, wsStatus }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [thoughts]);

  return (
    <div className="w-full flex flex-col mt-4">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-[10px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-[0.3em]">Execution Trace</h4>
        <div className={`w-2 h-2 rounded-full ${wsStatus === 'streaming' ? 'bg-[color:var(--warning)] animate-pulse' : 'bg-[color:var(--positive)]'}`} />
      </div>

      <div className="h-[300px] overflow-y-auto pr-4">
        <div className="space-y-6">
          {thoughts.length === 0 && (
             <p className="text-[12px] font-mono text-[color:var(--text-tertiary)] italic">Awaiting parameters for strategic synthesis...</p>
          )}
          {thoughts.map((thought, idx) => (
            <div key={idx} className="flex gap-6 text-[13px] font-mono leading-relaxed animate-in fade-in slide-in-from-left-1">
              <span className="text-[color:var(--text-tertiary)] shrink-0 select-none opacity-30 w-4">{idx + 1}.</span>
              <span className="text-[color:var(--text-secondary)]">{thought}</span>
            </div>
          ))}
          {wsStatus === 'streaming' && (
            <div className="animate-pulse flex gap-6 text-[13px] font-mono text-[color:var(--accent)]">
               <span className="shrink-0 opacity-30 w-4">...</span>
               <span>Processing neural pathways...</span>
            </div>
          )}
        </div>
        <div ref={scrollRef} className="h-8" />
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. ConsultantChat Component
// ----------------------------------------------------------------------
// ConsultantChat is now deprecated in favor of inline sections within StrategyCenter
const StrategicParameterSection = ({ label, description, children }) => (
  <div className="space-y-4">
    <div className="flex flex-col gap-1">
      <h3 className="text-[14px] font-bold text-[color:var(--text-primary)] uppercase tracking-widest">{label}</h3>
      <p className="text-[12px] text-[color:var(--text-secondary)]">{description}</p>
    </div>
    <div className="bg-[color:var(--surface-card)] p-1 border border-[color:var(--border-strong)] rounded-[color:var(--radius-sm)] shadow-sm">
      {children}
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 4. TradeInstructions Component
// ----------------------------------------------------------------------
const TradeInstructions = ({ instructions, budgetUsed, budgetRemaining, activeSimulationId, userToken, onApply }) => {
  const [executing, setExecuting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleApply = async () => {
    if (!activeSimulationId || !userToken) return;
    setExecuting(true);
    let allSuccess = true;
    for (const trade of instructions) {
      if (trade.action === 'HOLD') continue;
      
      const payload = {
        action: trade.action,
        ticker: trade.ticker,
        quantity: trade.shares,
        simulationId: activeSimulationId
      };
      
      try {
        const res = await fetch(`http://127.0.0.1:5001/api/trade`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
          },
          body: JSON.stringify(payload)
        });
        if (!res.ok) allSuccess = false;
      } catch (e) {
        allSuccess = false;
      }
    }
    setExecuting(false);
    if (allSuccess) {
      setSuccess(true);
      if (onApply) onApply();
    } else {
      alert("Some trades failed to execute.");
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto p-6 bg-[color:var(--surface-card)]">
      <div className="flex justify-between items-center mb-6 border-b border-[color:var(--border-strong)] pb-4">
        <div className="flex gap-8">
          <div>
            <span className="text-[10px] uppercase font-bold text-[color:var(--text-secondary)] tracking-widest block mb-1">Budget Deployed</span>
            <span className="text-lg font-mono text-[color:var(--text-primary)]">${Number(budgetUsed || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-[color:var(--text-secondary)] tracking-widest block mb-1">Budget Remaining</span>
            <span className="text-lg font-mono text-[color:var(--text-primary)]">${Number(budgetRemaining || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          </div>
        </div>
        <button 
          onClick={handleApply} 
          disabled={executing || success || !activeSimulationId}
          className="px-6 py-2 bg-[color:var(--text-primary)] text-[color:var(--surface-card)] text-[11px] font-bold uppercase tracking-widest rounded-sm transition-colors disabled:opacity-50 hover:opacity-90"
        >
          {executing ? 'Executing...' : success ? 'Applied' : 'Apply to Simulation'}
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-[color:var(--border-strong)]">
            <th className="py-2 text-[10px] uppercase font-bold tracking-widest text-[color:var(--text-secondary)]">Action</th>
            <th className="py-2 text-[10px] uppercase font-bold tracking-widest text-[color:var(--text-secondary)]">Ticker</th>
            <th className="py-2 text-[10px] uppercase font-bold tracking-widest text-[color:var(--text-secondary)] text-right">Shares</th>
            <th className="py-2 text-[10px] uppercase font-bold tracking-widest text-[color:var(--text-secondary)] text-right">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {instructions.map((inst, idx) => (
            <tr key={idx} className="border-b border-[color:var(--border-subtle)]">
              <td className={`py-3 text-[13px] font-mono font-bold ${inst.action === 'SELL' ? 'text-[color:var(--positive)]' : inst.action === 'BUY' ? 'text-[color:var(--negative)]' : 'text-[color:var(--text-tertiary)]'}`}>
                {inst.action}
              </td>
              <td className="py-3 text-[13px] font-mono text-[color:var(--text-primary)] font-bold">{inst.ticker}</td>
              <td className={`py-3 text-[13px] font-mono font-bold text-right ${inst.action === 'SELL' ? 'text-[color:var(--positive)]' : inst.action === 'BUY' ? 'text-[color:var(--negative)]' : 'text-[color:var(--text-primary)]'}`}>
                {inst.action === 'SELL' ? '-' : inst.action === 'BUY' ? '+' : ''}{Number(inst.shares || 0)}
              </td>
              <td className={`py-3 text-[13px] font-mono font-bold text-right ${inst.action === 'SELL' ? 'text-[color:var(--positive)]' : inst.action === 'BUY' ? 'text-[color:var(--negative)]' : 'text-[color:var(--text-tertiary)]'}`}>
                {inst.action === 'SELL' ? '+' : inst.action === 'BUY' ? '-' : ''}${Number(inst.estimated_cost || inst.estimated_value || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </td>
            </tr>
          ))}
          {instructions.length === 0 && (
            <tr>
              <td colSpan="4" className="py-6 text-center text-[12px] font-mono text-[color:var(--text-tertiary)]">
                No trades required to achieve target weights.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. PortfolioDashboard Component
// ----------------------------------------------------------------------
const FactorsRadar = ({ factors }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !factors) return;

    const { value, quality, momentum } = factors;
    const isBalanced = Math.abs(value) < 0.1 && Math.abs(quality) < 0.1 && Math.abs(momentum) < 0.1;
    if (isBalanced) {
      d3.select(svgRef.current).selectAll("*").remove();
      return;
    }

    const width = 280;
    const height = 280;
    const center = { x: width / 2, y: height / 2 };
    const radius = 100;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const rings = [-1, 0, 1];
    const rScale = d3.scaleLinear().domain([-2, 2]).range([0, radius]).clamp(true);

    rings.forEach(r => {
      svg.append('circle')
        .attr('cx', center.x)
        .attr('cy', center.y)
        .attr('r', rScale(r))
        .attr('fill', 'none')
        .attr('stroke', r === 0 ? 'var(--border-strong)' : 'var(--border-subtle)')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', r === 0 ? 'none' : '4,4');
    });

    const axesData = [
      { name: 'VALUE', angle: 0, val: value },
      { name: 'QUALITY', angle: 120, val: quality },
      { name: 'MOMENTUM', angle: 240, val: momentum }
    ];

    axesData.forEach(d => {
      const rad = (d.angle - 90) * Math.PI / 180;
      const x2 = center.x + radius * Math.cos(rad);
      const y2 = center.y + radius * Math.sin(rad);

      svg.append('line')
        .attr('x1', center.x)
        .attr('y1', center.y)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', 'var(--border-strong)')
        .attr('stroke-width', 1);

      const lx = center.x + (radius + 25) * Math.cos(rad);
      const ly = center.y + (radius + 25) * Math.sin(rad);
      svg.append('text')
        .attr('x', lx)
        .attr('y', ly)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('fill', 'var(--text-secondary)')
        .style('font-family', 'var(--font-mono)')
        .style('font-weight', 'bold')
        .style('font-size', '10px')
        .style('letter-spacing', '0.1em')
        .text(d.name);
    });

    const line = d3.lineRadial()
      .angle(d => d.angle * Math.PI / 180)
      .radius(d => rScale(d.val))
      .curve(d3.curveLinearClosed);

    const polyData = axesData.map(d => ({ angle: d.angle, val: d.val }));

    const path = svg.append('path')
      .datum(polyData)
      .attr('fill', 'var(--text-primary)')
      .attr('fill-opacity', 0.1)
      .attr('stroke', 'var(--text-primary)')
      .attr('stroke-opacity', 0.8)
      .attr('stroke-width', 1.5)
      .attr('transform', `translate(${center.x},${center.y})`);

    path.attr('d', line.radius(d => rScale(0)))
      .transition()
      .duration(800)
      .ease(d3.easeElasticOut.amplitude(1).period(0.5))
      .attr('d', line.radius(d => rScale(d.val)));

    svg.selectAll(".dot")
      .data(polyData)
      .enter()
      .append("rect")
      .attr("class", "dot")
      .attr("width", 0)
      .attr("height", 0)
      .attr("fill", "var(--text-primary)")
      .transition()
      .duration(800)
      .ease(d3.easeElasticOut.amplitude(1).period(0.5))
      .attr("x", d => center.x + rScale(d.val) * Math.cos((d.angle - 90) * Math.PI / 180) - 3)
      .attr("y", d => center.y + rScale(d.val) * Math.sin((d.angle - 90) * Math.PI / 180) - 3)
      .attr("width", 6)
      .attr("height", 6);

  }, [factors]);

  const isBalanced = factors && 
    Math.abs(factors.value) < 0.1 && 
    Math.abs(factors.quality) < 0.1 && 
    Math.abs(factors.momentum) < 0.1;

  return (
    <div className="flex items-center justify-center w-full h-full relative bg-[color:var(--surface-sunken)]">
      <svg ref={svgRef} width={280} height={280} />
      {isBalanced && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[10px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-widest">
          Balanced Exposure
        </div>
      )}
    </div>
  );
};

const PortfolioDashboard = ({ portfolioPayload, isFirstLoad, activeSimulationId, userToken }) => {
  const [activeTab, setActiveTab] = useState('WEIGHTS');

  if (!portfolioPayload) return null;

  const reqFields = ['positions', 'expected_return', 'portfolio_risk', 'n_positions', 'sharpe_estimate', 'factor_exposures', 'narrative', 'as_of'];
  const isMissing = reqFields.some(f => portfolioPayload[f] === undefined);
  if (isMissing) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-[color:var(--surface-sunken)]">
        <span className="text-[color:var(--negative)] text-[10px] uppercase font-bold tracking-widest">
          PAYLOAD INCOMPLETE
        </span>
      </div>
    );
  }

  const { positions, expected_return, portfolio_risk, n_positions, sharpe_estimate, factor_exposures, narrative, as_of } = portfolioPayload;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getSharpeColor = (s) => {
    if (s > 1.0) return 'text-[color:var(--positive)]';
    if (s >= 0.5) return 'text-amber-600';
    return 'text-[color:var(--negative)]';
  };

  const MetricBlock = ({ label, value, colorClass }) => (
    <div className="flex flex-col gap-0.5">
      <span className="text-[9px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.1em]">{label}</span>
      <span className={`text-[13px] font-mono font-medium leading-none ${colorClass || 'text-[color:var(--text-primary)]'}`}>{value}</span>
    </div>
  );

  const sortedPositions = [...positions].sort((a, b) => b.weight - a.weight);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const p = payload[0].payload;
      return (
        <div className="bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] p-2 shadow-sm text-[11px] font-mono z-50 rounded-sm">
          <div className="font-bold text-[color:var(--text-primary)] mb-1 pb-1 border-b border-[color:var(--border-subtle)]">{p.ticker}</div>
          <div className="text-[color:var(--text-secondary)]">Wgt: <span className="text-[color:var(--text-primary)]">{(p.weight * 100).toFixed(2)}%</span></div>
          <div className="text-[color:var(--text-secondary)]">Sec: <span className="text-[color:var(--text-primary)]">{p.sector}</span></div>
          <div className="text-[color:var(--text-secondary)]">Exp: <span className="text-[color:var(--text-primary)]">{(p.mu * 100).toFixed(2)}%</span></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col h-full w-full bg-[color:var(--surface-card)]">
      {/* Section 1: Summary Stats Row */}
      <div className="shrink-0 flex items-center justify-between px-6 py-3 bg-[color:var(--surface-sunken)] border-b border-[color:var(--border-strong)]">
        <MetricBlock label="Positions" value={n_positions} />
        <MetricBlock label="Exp Return" value={`${(expected_return * 100).toFixed(2)}%`} colorClass={expected_return >= 0 ? 'text-[color:var(--positive)]' : 'text-[color:var(--negative)]'} />
        <MetricBlock label="Port Risk" value={`${(portfolio_risk * 100).toFixed(2)}%`} />
        <MetricBlock label="Sharpe Est." value={sharpe_estimate.toFixed(2)} colorClass={getSharpeColor(sharpe_estimate)} />
        <MetricBlock label="As Of" value={formatDate(as_of)} colorClass="text-[color:var(--text-tertiary)]" />
      </div>

      {/* Tab Bar */}
      <div className="shrink-0 flex px-6 gap-6 border-b border-[color:var(--border-subtle)]">
        {['WEIGHTS', 'FACTORS', 'NARRATIVE', 'TRADES'].map(tab => {
          if (tab === 'TRADES' && !portfolioPayload.trade_instructions) return null;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                activeTab === tab 
                  ? 'text-[color:var(--text-primary)] border-b-2 border-[color:var(--text-primary)]' 
                  : 'text-[color:var(--text-tertiary)] border-b-2 border-transparent hover:text-[color:var(--text-secondary)]'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Tabbed Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {activeTab === 'WEIGHTS' && (
          <div className="w-full h-full overflow-y-auto p-6">
            <div style={{ height: `${Math.max(n_positions * 28 + 40, 200)}px` }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sortedPositions} layout="vertical" barGap={2} barCategoryGap={6} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                  <XAxis type="number" tickFormatter={(val) => `${(val * 100).toFixed(0)}%`} stroke="var(--border-strong)" tick={{ fill: 'var(--text-tertiary)', fontSize: 10, fontFamily: 'monospace' }} axisLine={{ stroke: 'var(--border-subtle)' }} tickLine={false} />
                  <YAxis type="category" dataKey="ticker" stroke="var(--text-secondary)" tick={{ fill: 'var(--text-primary)', fontSize: 11, fontFamily: 'monospace', fontWeight: 'bold' }} width={50} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--surface-sunken)' }} />
                  <Bar dataKey="weight" fill="var(--text-primary)" radius={[0, 2, 2, 0]} fillOpacity={0.85}>
                    {sortedPositions.map((entry, index) => (
                      <Cell key={`cell-${index}`} className="hover:opacity-100 transition-opacity cursor-pointer" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'FACTORS' && (
          <div className="w-full h-full">
            <FactorsRadar factors={factor_exposures} />
          </div>
        )}

        {activeTab === 'NARRATIVE' && (
          <div className="w-full h-full overflow-y-auto p-6 bg-[color:var(--surface-sunken)]">
            <div className="max-w-2xl text-[13px] font-mono leading-relaxed text-[color:var(--text-secondary)]">
              {narrative.split(/\\n\\n|\n\n/).map((para, idx) => (
                <p key={idx} className="mb-4">{para.trim()}</p>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'TRADES' && portfolioPayload.trade_instructions && (
          <div className="w-full h-full">
            <TradeInstructions 
              instructions={portfolioPayload.trade_instructions} 
              budgetUsed={portfolioPayload.budget_used} 
              budgetRemaining={portfolioPayload.budget_remaining} 
              activeSimulationId={activeSimulationId}
              userToken={userToken}
              onApply={() => console.log("Applied")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const RecommendationsDashboard = ({ activeSimulationId: globalSimId, user }) => {
  const [wizardStep, setWizardStep] = useState('SELECT'); // SELECT, CONFIGURE, RESULTS
  const [selectedSimId, setSelectedSimId] = useState(null);
  const [simulations, setSimulations] = useState([]);
  const [snapshot, setSnapshot] = useState(null);
  const [snapshotLoading, setSnapshotLoading] = useState(false);
  
  // Quant Params State
  const [budget, setBudget] = useState('');
  const [turnover, setTurnover] = useState('0.20');
  const [targetReturn, setTargetReturn] = useState('');
  
  const fetchSims = async () => {
    if (!user) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch('http://localhost:5001/api/simulations', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setSimulations(data);
      }
    } catch (err) {
      console.error("Failed to fetch sims gallery", err);
    }
  };

  const handleCreateContext = async () => {
    const name = prompt("Enter a name for your new simulation:", `Strategy ${simulations.length + 1}`);
    if (!name) return;

    const cashVal = 0; // Start with exactly $0 cash as requested

    try {
      const token = await user.getIdToken();
      const res = await fetch('http://localhost:5001/api/simulations', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ name: name, cash: cashVal })
      });
      
      if (res.ok) {
        const data = await res.json();
        await fetchSims();
        setSelectedSimId(data.id);
        setWizardStep('CONFIGURE');
      }
    } catch (err) {
      console.error("Failed to create context", err);
    }
  };
  
  const [regimeData, setRegimeData] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [portfolioPayload, setPortfolioPayload] = useState(null);
  const [wsStatus, setWsStatus] = useState('idle'); 
  const [thoughts, setThoughts] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const wsRef = useRef(null);

  // Sync with global selection
  useEffect(() => {
    if (globalSimId && globalSimId !== selectedSimId) {
      setSelectedSimId(globalSimId);
      // If we are in SELECT step, move to CONFIGURE when global selection changes
      if (wizardStep === 'SELECT') setWizardStep('CONFIGURE');
    }
  }, [globalSimId]);

  // Fetch all simulations for the gallery
  useEffect(() => {
    fetchSims();
  }, [user, wizardStep]);

  // Fetch Snapshot for selected simulation
  useEffect(() => {
    const fetchSnapshot = async () => {
      if (!user || !selectedSimId || wizardStep !== 'CONFIGURE') return;
      setSnapshotLoading(true);
      try {
        const token = await user.getIdToken();
        const res = await fetch(`http://localhost:5001/api/portfolio?simulationId=${selectedSimId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setSnapshot(data);
        }
      } catch (err) {
        console.error("Failed to fetch snapshot", err);
      } finally {
        setSnapshotLoading(false);
      }
    };
    fetchSnapshot();
  }, [user, selectedSimId, wizardStep]);

  useEffect(() => {
    const fetchRegime = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5002/api/regime');
        if (res.ok) {
          const data = await res.json();
          setRegimeData(data);
        } else {
          setRegimeData("error");
        }
      } catch (err) {
        console.error("Failed to fetch regime:", err);
        setRegimeData("error");
      }
    };

    const fetchPortfolio = async () => {
      if (!user) return;
      try {
        const token = await user.getIdToken();
        const url = selectedSimId 
          ? `http://127.0.0.1:5001/api/portfolio?simulationId=${selectedSimId}`
          : `http://127.0.0.1:5001/api/portfolio`;
          
        const res = await fetch(url, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (res.status === 200) {
          const data = await res.json();
          // Check if this is a full AI analysis payload (contains 'expected_return' or 'positions')
          if (data && (data.expected_return !== undefined || data.positions)) {
            setPortfolioPayload(data);
            setIsFirstLoad(false);
          } else {
            // This is a basic holdings fetch from the trade engine (5001)
            const mappedData = {
              ...data,
              cash_balance: data.cash || 0,
              total_investment: data.total_investment || 0,
              total_portfolio_value: data.total_portfolio_value || 0
            };
            setPortfolioPayload(mappedData);
            // Keep isFirstLoad true to show the "Analyze" button
            setIsFirstLoad(true);
          }
        } else if (res.status === 204) {
          setPortfolioPayload(null);
          setIsFirstLoad(true);
        }
      } catch (err) {
        console.error("Failed to fetch initial portfolio:", err);
        setPortfolioPayload(null);
        setIsFirstLoad(true);
      }
    };

    fetchRegime();
    fetchPortfolio();

    const intervalId = setInterval(fetchRegime, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [user, selectedSimId]);

  useEffect(() => {
    const fetchToken = async () => {
      if (user) {
        try {
          const token = await user.getIdToken();
          setUserToken(token);
        } catch (e) {
          console.error("Token fetch err", e);
        }
      }
    };
    fetchToken();
  }, [user]);

  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  const handleSubmit = (message, budget, maxTurnover) => {
    if (!message.trim()) return;

    setThoughts([]);
    setWsStatus('connecting');

    if (wsRef.current) {
      wsRef.current.close();
    }

    const startPipeline = async () => {
      let currentToken = userToken;
      try {
        currentToken = await user.getIdToken(true);
        setUserToken(currentToken);
      } catch (e) {
        console.error("Token refresh failed", e);
      }

      const hostname = window.location.hostname || 'localhost';
      const wsUrl = `ws://${hostname}:5002/ws/pipeline`;
      console.log("Connecting to WebSocket:", wsUrl);
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setWsStatus('streaming');
        ws.send(JSON.stringify({ 
          message,
          simulation_id: selectedSimId,
          user_token: currentToken,
          budget: budget,
          max_turnover: maxTurnover
        }));
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'thought') {
            setThoughts((prev) => [...prev, data.text]);
          } else if (data.event === 'rebalance_ready') {
            fetch('http://127.0.0.1:5002/api/portfolio')
              .then(res => res.json())
              .then(payload => {
                setPortfolioPayload(payload);
                setIsFirstLoad(false);
                setWsStatus('complete');
                ws.close();
              })
              .catch(err => {
                console.error("Failed to fetch payload after WS ready", err);
                setWsStatus('error');
                ws.close();
              });
          } else if (data.event === 'error') {
            setWsStatus('error');
            ws.close();
          }
        } catch (err) {
          console.error("Failed to parse WS message:", err);
        }
      };

      ws.onerror = (error) => {
        setWsStatus('error');
      };

      ws.onclose = () => {
        setWsStatus((prev) => (prev === 'streaming' || prev === 'connecting' ? 'error' : prev));
      };
    };

    startPipeline();
  };

  // --- New Unified Components ---
  const handleExecuteStrategy = (text) => {
    const b = budget ? parseFloat(budget) : null;
    const t = turnover ? parseFloat(turnover) : null;
    handleSubmit(text, b, t);
  };

  const isLocked = wsStatus === 'streaming' || wsStatus === 'connecting';

  return (
    <div className="w-full h-full flex flex-col bg-[color:var(--surface-base)]">
      {/* Top Banner: Regime Data */}
      <div className="shrink-0 border-b border-[color:var(--border-strong)]">
        <RegimeHeader regimeData={regimeData} />
      </div>

      {/* Top Bar: Portfolio Selector */}
      <div className="shrink-0 flex items-center justify-between px-8 py-4 bg-[color:var(--surface-sunken)] border-b border-[color:var(--border-strong)]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Briefcase size={18} className="text-[color:var(--text-tertiary)]" />
            <span className="text-[11px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.2em]">Active Context</span>
          </div>
          <select 
            value={selectedSimId || ''}
            onChange={(e) => setSelectedSimId(e.target.value)}
            className="bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] text-[color:var(--text-primary)] text-[14px] font-bold px-4 py-2 rounded-sm outline-none min-w-[250px]"
          >
            <option value="" disabled>Select a Portfolio...</option>
            {Array.isArray(simulations) && simulations.map(sim => (
              <option key={sim.id} value={sim.id}>{sim.name} ({sim.id.slice(-6).toUpperCase()})</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-8">
          {snapshot && (
            <div className="flex items-center gap-6 text-[12px] font-mono">
               <div>
                  <span className="text-[color:var(--text-tertiary)] mr-2 uppercase">Cash:</span>
                  <span className="text-[color:var(--positive)]">${snapshot.cash?.toLocaleString()}</span>
               </div>
               <div>
                  <span className="text-[color:var(--text-tertiary)] mr-2 uppercase">Assets:</span>
                  <span className="text-[color:var(--text-primary)]">{snapshot.holdings?.length || 0}</span>
               </div>
            </div>
          )}
          <button 
            onClick={handleCreateContext}
            className="flex items-center gap-2 bg-transparent border border-[color:var(--border-strong)] text-[color:var(--text-primary)] px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:border-[color:var(--text-secondary)] transition-colors"
          >
            <Plus size={14} /> New Context
          </button>
        </div>
      </div>

      {/* Main Split Screen Area */}
      <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT PANEL: Chatbot Assistant */}
        <div className="lg:col-span-4 flex flex-col border-r border-[color:var(--border-strong)] bg-transparent overflow-y-auto">
          <div className="p-12 space-y-20">
            
            {/* Quantitative Guardrails */}
            <div className="space-y-10">
              <div className="space-y-12">
                <div className="flex flex-col gap-4">
                   <label className="text-[10px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-[0.2em]">Investment Budget</label>
                   <div className="relative">
                     <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-mono text-[color:var(--text-tertiary)]">$</span>
                     <input 
                       type="number"
                       value={budget}
                       onChange={(e) => setBudget(e.target.value)}
                       disabled={isLocked}
                       placeholder="100,000"
                       className="w-full pl-8 py-2 bg-transparent border-b-2 border-[color:var(--border-strong)] focus:border-[color:var(--text-primary)] text-3xl font-mono text-[color:var(--text-primary)] outline-none transition-colors"
                     />
                   </div>
                </div>
                <div className="flex flex-col gap-4">
                   <label className="text-[10px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-[0.2em]">Turnover Limit</label>
                   <div className="relative">
                     <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-mono text-[color:var(--text-tertiary)]">%</span>
                     <input 
                       type="number"
                       step="0.05"
                       value={turnover}
                       onChange={(e) => setTurnover(e.target.value)}
                       disabled={isLocked}
                       placeholder="0.20"
                       className="w-full pl-8 py-2 bg-transparent border-b-2 border-[color:var(--border-strong)] focus:border-[color:var(--text-primary)] text-3xl font-mono text-[color:var(--text-primary)] outline-none transition-colors"
                     />
                   </div>
                </div>
              </div>
            </div>

            {/* AI Agent Chat */}
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                 <label className="text-[10px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-[0.2em]">Strategic Objective</label>
                 <textarea 
                   value={targetReturn} // Reusing targetReturn as the text strategy state to avoid creating new ones
                   onChange={(e) => setTargetReturn(e.target.value)}
                   disabled={isLocked}
                   placeholder="Type your investment thesis in plain English..."
                   rows={4}
                   className="w-full p-4 bg-transparent border border-dashed border-[color:var(--border-strong)] focus:border-solid focus:border-[color:var(--text-primary)] text-[16px] text-[color:var(--text-primary)] outline-none resize-none leading-relaxed transition-colors rounded-sm"
                 />
              </div>
              
              <button 
                onClick={() => handleExecuteStrategy(targetReturn)}
                disabled={isLocked || !targetReturn}
                className="w-full py-5 bg-[color:var(--text-primary)] text-[color:var(--surface-base)] text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all disabled:opacity-30 rounded-sm shadow-2xl mt-4"
              >
                {isLocked ? 'Executing Synthesis...' : 'Launch Engine'}
              </button>
            </div>

            {/* Engine Logs */}
            <div className="pt-8 border-t border-[color:var(--border-subtle)]">
              <EngineLogs thoughts={thoughts} wsStatus={wsStatus} />
            </div>

          </div>
        </div>

        {/* RIGHT PANEL: Results Showcase */}
        <div className="lg:col-span-8 flex flex-col bg-[color:var(--surface-base)] overflow-y-auto">
          {snapshotLoading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <Loader2 className="animate-spin text-[color:var(--accent)] mb-4" size={32} />
              <span className="text-[11px] font-mono text-[color:var(--text-tertiary)] uppercase tracking-widest">Loading Context...</span>
            </div>
          ) : !selectedSimId ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-12">
               <Briefcase size={48} className="text-[color:var(--border-strong)] mb-6" />
               <h3 className="text-xl font-bold text-[color:var(--text-secondary)] tracking-tight mb-2">No Active Portfolio Selected</h3>
               <p className="text-[13px] text-[color:var(--text-tertiary)] max-w-md mx-auto">Select a portfolio from the top bar to view its composition and run strategic optimizations.</p>
            </div>
          ) : isFirstLoad ? (
             <div className="flex flex-col items-center justify-center h-full border-[20px] border-[color:var(--surface-base)] bg-[color:var(--surface-sunken)]">
                <span className="text-[11px] font-mono text-[color:var(--text-tertiary)] uppercase tracking-widest text-center px-12">
                   Portfolio Context Loaded. <br/> Awaiting new strategy parameters...
                </span>
             </div>
          ) : (
            <div className="w-full h-full p-8">
              <PortfolioDashboard 
                portfolioPayload={portfolioPayload} 
                activeSimulationId={selectedSimId} 
                userToken={userToken} 
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export { RegimeHeader, EngineLogs, PortfolioDashboard };
export default RecommendationsDashboard;
