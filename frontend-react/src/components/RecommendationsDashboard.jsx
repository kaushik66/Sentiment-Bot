import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, RefreshCw, AlertCircle } from 'lucide-react';
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
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [thoughts.length, wsStatus]);

  return (
    <div className="flex flex-col w-full flex-1 min-h-[200px] bg-[color:var(--surface-card)] relative">
      <div className="shrink-0 flex items-center justify-between px-4 py-2 border-b border-[color:var(--border-subtle)] bg-[color:var(--surface-sunken)]">
        <span className="text-[10px] font-bold text-[color:var(--text-primary)] uppercase tracking-[0.15em]">
          Execution Log
        </span>
        <div className="flex items-center gap-2">
          {wsStatus === 'connecting' || wsStatus === 'streaming' ? (
            <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse" />
          ) : wsStatus === 'complete' ? (
            <div className="w-2 h-2 bg-[color:var(--positive)] rounded-none" />
          ) : (
            <div className="w-2 h-2 bg-[color:var(--border-strong)] rounded-none" />
          )}
          <span className="text-[9px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-widest">
            {wsStatus}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 text-[12px] font-mono leading-relaxed text-[color:var(--text-secondary)]">
        {wsStatus === 'idle' && (
          <div className="flex items-center gap-2 text-[color:var(--text-tertiary)]">
            <span>&gt;</span> Awaiting input parameters...
          </div>
        )}
        
        {['streaming', 'complete', 'error'].includes(wsStatus) && (
          <div className="space-y-1.5">
            {thoughts.map((thought, idx) => (
              <div key={idx} className="flex gap-2 animate-in fade-in slide-in-from-bottom-1 duration-150">
                <span className="text-[color:var(--text-tertiary)] shrink-0 select-none">&gt;</span>
                <span className="text-[color:var(--text-primary)]">{thought}</span>
              </div>
            ))}
            {wsStatus === 'streaming' && (
              <div className="flex gap-2 items-center text-[color:var(--text-tertiary)]">
                <span className="shrink-0 select-none">&gt;</span>
                <div className="w-1.5 h-3 bg-[color:var(--text-tertiary)] animate-pulse" />
              </div>
            )}
            {wsStatus === 'error' && (
              <div className="flex gap-2 text-[color:var(--negative)] font-medium mt-4">
                <span className="shrink-0 select-none">&gt;</span>
                <span>ERROR: Pipeline execution failed.</span>
              </div>
            )}
          </div>
        )}
        <div ref={scrollRef} className="h-1" />
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. ConsultantChat Component
// ----------------------------------------------------------------------
const ConsultantChat = ({ onSubmit, wsStatus }) => {
  const [inputValue, setInputValue] = useState('');
  const [budget, setBudget] = useState('');
  const [turnover, setTurnover] = useState('');
  const isLocked = wsStatus === 'connecting' || wsStatus === 'streaming';

  const handleFireSubmit = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isLocked) return;
    const b = budget ? parseFloat(budget) : null;
    const t = turnover ? parseFloat(turnover) : null;
    onSubmit(trimmed, b, t);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleFireSubmit();
    }
  };

  const chips = [
    'Quality value, low vol',
    'Momentum tilt, divers.',
    'Eq weight value/qual/mom'
  ];

  return (
    <div className="w-full shrink-0 flex flex-col bg-[color:var(--surface-sunken)] border-t border-[color:var(--border-strong)] p-4">
      <div className="text-[10px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.15em] mb-2">
        Strategy Parameters
      </div>

      <div className="flex w-full gap-2 items-stretch h-[36px] mb-2">
        <input 
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          disabled={isLocked}
          placeholder="Budget ($)"
          className="w-1/2 px-3 bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] rounded-sm focus:outline-none focus:border-[color:var(--text-primary)] transition-colors text-[13px] font-mono text-[color:var(--text-primary)] placeholder:text-[color:var(--text-tertiary)] disabled:opacity-50"
        />
        <input 
          type="number"
          step="0.05"
          value={turnover}
          onChange={(e) => setTurnover(e.target.value)}
          disabled={isLocked}
          placeholder="Turnover Limit (e.g. 0.20)"
          className="w-1/2 px-3 bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] rounded-sm focus:outline-none focus:border-[color:var(--text-primary)] transition-colors text-[13px] font-mono text-[color:var(--text-primary)] placeholder:text-[color:var(--text-tertiary)] disabled:opacity-50"
        />
      </div>

      <div className="flex w-full gap-2 items-stretch h-[36px]">
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLocked}
          placeholder={isLocked ? 'Executing...' : 'Enter criteria...'}
          className="flex-1 px-3 bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] rounded-sm focus:outline-none focus:border-[color:var(--text-primary)] transition-colors text-[13px] font-mono text-[color:var(--text-primary)] placeholder:text-[color:var(--text-tertiary)] disabled:opacity-50"
        />

        <button 
          onClick={handleFireSubmit}
          disabled={isLocked}
          className="shrink-0 px-6 bg-[color:var(--text-primary)] disabled:bg-[color:var(--border-strong)] disabled:text-[color:var(--text-tertiary)] text-[color:var(--surface-card)] text-[11px] font-bold uppercase tracking-widest rounded-sm flex items-center justify-center transition-colors active:opacity-90"
        >
          {isLocked ? 'Running...' : 'Execute'}
        </button>
      </div>

      {!isLocked && (
        <div className="flex flex-wrap gap-2 mt-3">
          {chips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => setInputValue(chip)}
              className="px-2 py-1 bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] hover:border-[color:var(--text-primary)] rounded-sm text-[10px] font-bold uppercase tracking-wider text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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
            <span className="text-lg font-mono text-[color:var(--text-primary)]">${budgetUsed?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-[color:var(--text-secondary)] tracking-widest block mb-1">Budget Remaining</span>
            <span className="text-lg font-mono text-[color:var(--text-primary)]">${budgetRemaining?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
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
              <td className={`py-3 text-[13px] font-mono font-bold ${inst.action === 'BUY' ? 'text-[color:var(--positive)]' : inst.action === 'SELL' ? 'text-[color:var(--negative)]' : 'text-[color:var(--text-tertiary)]'}`}>
                {inst.action}
              </td>
              <td className="py-3 text-[13px] font-mono text-[color:var(--text-primary)] font-bold">{inst.ticker}</td>
              <td className="py-3 text-[13px] font-mono text-[color:var(--text-primary)] text-right">{inst.shares}</td>
              <td className="py-3 text-[13px] font-mono text-[color:var(--text-secondary)] text-right">
                ${(inst.estimated_cost || inst.estimated_value || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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

const RecommendationsDashboard = ({ activeSimulationId, user }) => {
  const [regimeData, setRegimeData] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [portfolioPayload, setPortfolioPayload] = useState(null);
  const [wsStatus, setWsStatus] = useState('idle'); 
  const [thoughts, setThoughts] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const wsRef = useRef(null);

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
      try {
        const res = await fetch('http://127.0.0.1:5002/api/portfolio');
        if (res.status === 200) {
          const data = await res.json();
          setPortfolioPayload(data);
          setIsFirstLoad(false);
        } else if (res.status === 204) {
          setIsFirstLoad(true);
        }
      } catch (err) {
        console.error("Failed to fetch initial portfolio:", err);
      }
    };

    fetchRegime();
    fetchPortfolio();

    const intervalId = setInterval(fetchRegime, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

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

    const wsUrl = `ws://127.0.0.1:5002/ws/pipeline`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setWsStatus('streaming');
      ws.send(JSON.stringify({ 
        message,
        simulation_id: activeSimulationId,
        user_token: userToken,
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
          console.error("Pipeline WS Error:", data.text);
          ws.close();
        }
      } catch (err) {
        console.error("Failed to parse WS message:", err);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setWsStatus('error');
    };

    ws.onclose = () => {
      setWsStatus((prev) => (prev === 'streaming' || prev === 'connecting' ? 'error' : prev));
    };
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] rounded-sm">
      {/* Row 1: Regime Bar */}
      <div className="shrink-0">
        <RegimeHeader regimeData={regimeData} />
      </div>

      {/* Row 2: Layout Split */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Column */}
        <div className="flex flex-col flex-1 lg:flex-[5] overflow-hidden border-b lg:border-b-0 lg:border-r border-[color:var(--border-strong)]">
          <EngineLogs thoughts={thoughts} wsStatus={wsStatus} />
          <ConsultantChat onSubmit={handleSubmit} wsStatus={wsStatus} />
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-1 lg:flex-[7] overflow-hidden bg-[color:var(--surface-card)]">
          {isFirstLoad ? (
            <div className="flex flex-col items-center justify-center h-full text-center bg-[color:var(--surface-sunken)]">
              <span className="text-[11px] font-mono text-[color:var(--text-tertiary)] uppercase tracking-widest mb-6">
                Awaiting Execution...
              </span>
              <button 
                onClick={() => handleSubmit("Analyze my existing portfolio. Make absolutely no trades.", null, 0.0)}
                className="px-6 py-2 bg-[color:var(--surface-card)] border border-[color:var(--border-strong)] text-[color:var(--text-primary)] text-[11px] font-bold uppercase tracking-widest rounded-sm hover:border-[color:var(--text-primary)] transition-colors"
              >
                Analyze Current Portfolio
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              <PortfolioDashboard portfolioPayload={portfolioPayload} isFirstLoad={isFirstLoad} activeSimulationId={activeSimulationId} userToken={userToken} />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export { RegimeHeader, EngineLogs, ConsultantChat, PortfolioDashboard };
export default RecommendationsDashboard;
