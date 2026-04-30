import React, { useState } from 'react';

const WhatIfSandbox = ({ portfolioPayload }) => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  if (!portfolioPayload) return null;

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const ticker = inputValue.trim();
    if (!ticker) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch('http://127.0.0.1:5002/api/whatif', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticker })
      });

      if (!res.ok) {
        throw new Error('Network error — check server connection');
      }

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err) {
      setError('Network error — check server connection');
    } finally {
      setLoading(false);
    }
  };

  const MetricStacked = ({ label, value, valueColor }) => (
    <div className="flex flex-col gap-1 mb-3">
      <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1 }}>
        {label}
      </span>
      <span style={{ fontSize: '13px', color: valueColor || 'var(--text-primary)', fontFamily: 'monospace', lineHeight: 1 }}>
        {value}
      </span>
    </div>
  );

  const formatDelta = (val, isPercentage = false, invertColors = false) => {
    if (val === undefined || val === null) return { text: '0', color: 'var(--text-muted)', bg: 'transparent' };
    const isPositive = val > 0;
    const isZero = val === 0;
    
    let color = 'var(--text-muted)';
    let bg = 'transparent';
    let prefix = isPositive ? '+' : '';
    
    if (!isZero) {
      if (invertColors) {
        color = isPositive ? 'var(--accent-red)' : 'var(--accent-green)';
        bg = isPositive ? '#ff3b3b15' : '#00ff8715';
      } else {
        color = isPositive ? 'var(--accent-green)' : 'var(--accent-red)';
        bg = isPositive ? '#00ff8715' : '#ff3b3b15';
      }
    }

    let text = `${prefix}${isPercentage ? (val * 100).toFixed(2) + '%' : parseFloat(val.toFixed(2))}`;
    return { text, color, bg };
  };

  const renderResult = () => {
    if (!result) return null;

    const currentRet = portfolioPayload.expected_return;
    const shadowRet = currentRet + result.return_delta;
    
    const currentRisk = portfolioPayload.portfolio_risk;
    const shadowRisk = currentRisk + result.risk_delta;

    const retDelta = formatDelta(result.return_delta, true, false);
    const riskDelta = formatDelta(result.risk_delta, true, true);
    const posDelta = formatDelta(result.positions_shadow - result.positions_current, false, false);

    return (
      <div className="flex flex-col w-full" style={{ marginTop: '16px' }}>
        <div className="flex w-full" style={{ marginBottom: '12px' }}>
          {/* Current Column */}
          <div className="flex-1 flex flex-col pr-4" style={{ borderRight: '1px solid var(--border)' }}>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.05em' }}>
              CURRENT
            </div>
            <MetricStacked 
              label="WEIGHT" 
              value={result.weight_current === 0 ? 'NOT HELD' : `${(result.weight_current * 100).toFixed(2)}%`}
              valueColor={result.weight_current === 0 ? '#404040' : 'var(--text-primary)'}
            />
            <MetricStacked 
              label="EXP RETURN" 
              value={`${(currentRet * 100).toFixed(2)}%`}
              valueColor={currentRet >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}
            />
            <MetricStacked 
              label="PORT RISK" 
              value={`${(currentRisk * 100).toFixed(2)}%`}
            />
            <MetricStacked 
              label="POSITIONS" 
              value={result.positions_current}
            />
          </div>

          {/* Shadow Column */}
          <div className="flex-1 flex flex-col pl-4">
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.05em' }}>
              SHADOW
            </div>
            <MetricStacked 
              label="WEIGHT" 
              value={`${(result.weight_shadow * 100).toFixed(2)}%`}
            />
            <MetricStacked 
              label="EXP RETURN" 
              value={`${(shadowRet * 100).toFixed(2)}%`}
              valueColor={shadowRet >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}
            />
            <MetricStacked 
              label="PORT RISK" 
              value={`${(shadowRisk * 100).toFixed(2)}%`}
            />
            <MetricStacked 
              label="POSITIONS" 
              value={result.positions_shadow}
            />
          </div>
        </div>

        {/* Delta Summary Row */}
        <div 
          className="flex items-center gap-3 w-full" 
          style={{ backgroundColor: '#0a0a0a', padding: '8px 12px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'monospace', marginRight: 'auto' }}>Δ SUMMARY</div>
          
          <div className="flex items-center gap-2">
            {[
              { label: 'Return Δ', ...retDelta },
              { label: 'Risk Δ', ...riskDelta },
              { label: 'Positions Δ', ...posDelta }
            ].map((d, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 px-2 py-1"
                style={{ backgroundColor: d.bg, borderRadius: '4px' }}
              >
                <span style={{ fontSize: '10px', color: '#606060', fontFamily: 'monospace' }}>{d.label}</span>
                <span style={{ fontSize: '11px', color: d.color, fontFamily: 'monospace' }}>{d.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* In Universe Indicator */}
        <div style={{ marginTop: '12px', fontSize: '10px', fontFamily: 'monospace', color: result.in_universe ? 'var(--accent-green)' : '#a0a0a0' }}>
          {result.in_universe ? '✓ TICKER IN CURRENT UNIVERSE' : '○ TICKER INJECTED AS NEUTRAL'}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="w-full flex flex-col"
      style={{
        backgroundColor: '#111111',
        borderTop: '1px solid #1f1f1f',
        padding: '16px'
      }}
    >
      <div 
        style={{
          fontSize: '10px',
          color: '#404040',
          textTransform: 'uppercase',
          fontFamily: 'monospace',
          marginBottom: '8px',
          letterSpacing: '0.05em'
        }}
      >
        WHAT-IF ANALYSIS
      </div>

      <div className="flex w-full gap-2 items-stretch" style={{ height: '44px' }}>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={loading}
          placeholder={loading ? 'Shadow simulating...' : 'Enter ticker symbol...'}
          className="flex-1 px-4 focus:outline-none transition-colors duration-150 empty-placeholder"
          style={{
            backgroundColor: 'var(--bg-base)',
            border: '1px solid var(--border)',
            borderRadius: 0,
            color: loading ? 'var(--text-muted)' : 'var(--text-primary)',
            fontFamily: 'monospace',
            fontSize: '13px',
            cursor: loading ? 'not-allowed' : 'text'
          }}
          onFocus={(e) => {
            if (!loading) e.target.style.borderColor = 'var(--accent-green)';
          }}
          onBlur={(e) => {
            if (!loading) e.target.style.borderColor = 'var(--border)';
          }}
        />

        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="shrink-0 transition-colors duration-150 whatif-submit-btn"
          style={{
            width: '120px',
            backgroundColor: 'var(--bg-base)',
            border: '1px solid var(--border)',
            borderRadius: 0,
            color: loading ? 'var(--accent-amber)' : '#a0a0a0',
            fontFamily: 'monospace',
            fontSize: '11px',
            textTransform: 'uppercase',
            cursor: loading ? 'progress' : 'pointer'
          }}
        >
          {loading ? 'LOADING...' : 'INJECT'}
        </button>

        <style>{`
          .whatif-submit-btn:hover:not(:disabled) {
            border-color: var(--accent-green) !important;
            color: var(--accent-green) !important;
          }
        `}</style>
      </div>

      {error ? (
        <div style={{ marginTop: '12px', color: '#ff3b3b', fontSize: '12px', fontFamily: 'monospace' }}>
          {error}
        </div>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default WhatIfSandbox;
