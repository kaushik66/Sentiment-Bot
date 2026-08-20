import React, { useState, useEffect } from 'react';
import { GlassCard } from './ui/GlassCard';
import { useAuth } from '../contexts/AuthContext';

const SECTORS = [
  "Information Technology", "Communication Services", "Consumer Discretionary", 
  "Financials", "Health Care", "Industrials", "Consumer Staples", 
  "Energy", "Utilities", "Real Estate", "Materials"
];

export function PreferencesForm() {
  const { currentUser } = useAuth();
  
  const [formData, setFormData] = useState({
    risk_tolerance: 'moderate',
    max_single_stock_pct: 0.10,
    max_sector_pct: 0.25,
    excluded_sectors: [],
    excluded_tickers: '',
    min_dividend_yield: 0.0,
    esg_required: false,
    investment_horizon: 'medium',
    liquidity_need_pct: 0.0,
    tax_sensitivity: false,
    allow_margin: false
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (!currentUser) return;
    
    fetch(`http://127.0.0.1:5002/api/preferences?userId=${currentUser.uid}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error && Object.keys(data).length > 0) {
          setFormData({
            ...data,
            excluded_tickers: data.excluded_tickers ? data.excluded_tickers.join(', ') : '',
            max_single_stock_pct: data.max_single_stock_pct || 0.10,
            max_sector_pct: data.max_sector_pct || 0.25,
            liquidity_need_pct: data.liquidity_need_pct || 0.0
          });
        }
      })
      .catch(err => console.error("Error loading preferences:", err));
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSectorChange = (sector) => {
    setFormData(prev => {
      const isSelected = prev.excluded_sectors.includes(sector);
      if (isSelected) {
        return { ...prev, excluded_sectors: prev.excluded_sectors.filter(s => s !== sector) };
      } else {
        return { ...prev, excluded_sectors: [...prev.excluded_sectors, sector] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;
    
    setStatus({ type: 'loading', message: 'Saving preferences...' });
    
    const payload = {
      ...formData,
      userId: currentUser.uid,
      excluded_tickers: formData.excluded_tickers.split(',').map(t => t.trim().toUpperCase()).filter(t => t),
      max_single_stock_pct: parseFloat(formData.max_single_stock_pct),
      max_sector_pct: parseFloat(formData.max_sector_pct),
      liquidity_need_pct: parseFloat(formData.liquidity_need_pct)
    };
    
    try {
      const response = await fetch('http://127.0.0.1:5002/api/preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Preferences saved successfully. Engine updated.' });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      } else {
        setStatus({ type: 'error', message: 'Failed to save preferences.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Could not connect to API.' });
    }
  };

  return (
    <GlassCard className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 border-b border-[color:var(--border-default)] pb-4">
        <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">Engine Guardrails & Preferences</h2>
        <p className="text-[color:var(--text-secondary)] text-sm mt-1">Configure hard mathematical constraints for the Quantitative AIRS Engine.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Risk & Core Limits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-[color:var(--text-primary)] text-sm font-medium mb-2">Risk Tolerance</label>
            <select 
              name="risk_tolerance" 
              value={formData.risk_tolerance} 
              onChange={handleChange}
              className="w-full bg-[color:var(--surface-sunken)] border border-[color:var(--border-default)] rounded-md p-2.5 text-[color:var(--text-primary)] focus:outline-none focus:border-[color:var(--accent)] appearance-none cursor-pointer"
            >
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
            <p className="text-[color:var(--text-tertiary)] text-xs mt-1">Scales the cash buffer during volatile regimes.</p>
          </div>
          
          <div>
            <label className="block text-[color:var(--text-primary)] text-sm font-medium mb-2">Investment Horizon</label>
            <select 
              name="investment_horizon" 
              value={formData.investment_horizon} 
              onChange={handleChange}
              className="w-full bg-[color:var(--surface-sunken)] border border-[color:var(--border-default)] rounded-md p-2.5 text-[color:var(--text-primary)] focus:outline-none focus:border-[color:var(--accent)] appearance-none cursor-pointer"
            >
              <option value="short">Short (1-6 months)</option>
              <option value="medium">Medium (1-3 years)</option>
              <option value="long">Long (3+ years)</option>
            </select>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          <div className="relative pt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[color:var(--text-primary)] text-sm font-medium">Max Single Stock Exposure</label>
            </div>
            <div className="relative">
              <input 
                type="range" name="max_single_stock_pct" 
                min="0.05" max="0.50" step="0.01" 
                value={formData.max_single_stock_pct} onChange={handleChange}
                className="quant-slider" 
              />
              <div 
                className="absolute -top-6 -translate-x-1/2 text-xs font-mono bg-[color:var(--surface-raised)] border border-[color:var(--border-default)] px-1.5 py-0.5 rounded text-[color:var(--text-primary)] pointer-events-none"
                style={{ left: `calc(${((formData.max_single_stock_pct - 0.05) / 0.45) * 100}%)` }}
              >
                {(formData.max_single_stock_pct * 100).toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="relative pt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[color:var(--text-primary)] text-sm font-medium">Max Sector Exposure</label>
            </div>
            <div className="relative">
              <input 
                type="range" name="max_sector_pct" 
                min="0.10" max="1.00" step="0.05" 
                value={formData.max_sector_pct} onChange={handleChange}
                className="quant-slider" 
              />
              <div 
                className="absolute -top-6 -translate-x-1/2 text-xs font-mono bg-[color:var(--surface-raised)] border border-[color:var(--border-default)] px-1.5 py-0.5 rounded text-[color:var(--text-primary)] pointer-events-none"
                style={{ left: `calc(${((formData.max_sector_pct - 0.10) / 0.90) * 100}%)` }}
              >
                {(formData.max_sector_pct * 100).toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="relative pt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[color:var(--text-primary)] text-sm font-medium">Hard Minimum Cash Liquidity Floor</label>
            </div>
            <div className="relative">
              <input 
                type="range" name="liquidity_need_pct" 
                min="0.0" max="0.50" step="0.01" 
                value={formData.liquidity_need_pct} onChange={handleChange}
                className="quant-slider" 
              />
              <div 
                className="absolute -top-6 -translate-x-1/2 text-xs font-mono bg-[color:var(--surface-raised)] border border-[color:var(--border-default)] px-1.5 py-0.5 rounded text-[color:var(--text-primary)] pointer-events-none"
                style={{ left: `calc(${((formData.liquidity_need_pct - 0.0) / 0.50) * 100}%)` }}
              >
                {(formData.liquidity_need_pct * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Exclusions */}
        <div>
          <label className="block text-[color:var(--text-primary)] text-sm font-medium mb-3">Excluded Sectors (Do Not Buy)</label>
          <div className="flex flex-wrap gap-2">
            {SECTORS.map(s => {
              const isSelected = formData.excluded_sectors.includes(s);
              return (
                <button
                  type="button"
                  key={s}
                  onClick={() => handleSectorChange(s)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded border transition-colors ${isSelected ? 'bg-[color:var(--negative-bg)] border-[color:var(--negative)] text-[color:var(--negative)]' : 'bg-[color:var(--surface-sunken)] border-[color:var(--border-default)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)]'}`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
        
        <div>
          <label className="block text-[color:var(--text-primary)] text-sm font-medium mb-2">Excluded Tickers (Comma separated)</label>
          <input 
            type="text" 
            name="excluded_tickers"
            value={formData.excluded_tickers}
            onChange={handleChange}
            placeholder="e.g. TSLA, META, NVDA"
            className="w-full bg-[color:var(--surface-sunken)] border border-[color:var(--border-default)] rounded-md p-2.5 text-[color:var(--text-primary)] focus:outline-none focus:border-[color:var(--accent)] font-mono uppercase"
          />
        </div>
        
        {/* Missing Data Fields - Disabled */}
        <div className="p-4 border border-[color:var(--border-default)] rounded-lg bg-[color:var(--surface-sunken)] opacity-50 relative overflow-hidden">
          <div className="absolute top-2 right-4 text-xs font-bold text-[color:var(--warning)] uppercase tracking-wider font-mono">Coming Soon (Data Missing)</div>
          
          <label className="flex items-center space-x-3 mb-4 cursor-not-allowed">
            <div className={`w-5 h-5 rounded border flex items-center justify-center opacity-50 bg-[color:var(--accent)] border-[color:var(--accent)]`}>
              <div className="w-2.5 h-2.5 bg-white rounded-sm" />
            </div>
            <input type="checkbox" disabled checked={formData.esg_required} className="hidden" />
            <div>
              <span className="block text-[color:var(--text-primary)] text-sm font-medium">Strict ESG Screening</span>
              <span className="block text-[color:var(--text-tertiary)] text-xs">Only allow stocks with ESG score &gt; 50</span>
            </div>
          </label>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[color:var(--text-primary)] text-sm font-medium">Minimum Dividend Yield</label>
              <span className="text-[color:var(--text-tertiary)] font-mono text-sm">{(formData.min_dividend_yield * 100).toFixed(1)}%</span>
            </div>
            <input type="range" disabled min="0" max="0.10" step="0.01" value={formData.min_dividend_yield} className="w-full opacity-50 cursor-not-allowed quant-slider" />
          </div>
        </div>
        
        <label className="flex items-center space-x-3 cursor-pointer group">
          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.tax_sensitivity ? 'bg-[color:var(--accent)] border-[color:var(--accent)]' : 'bg-[color:var(--surface-sunken)] border-[color:var(--border-default)] group-hover:border-[color:var(--border-strong)]'}`}>
            {formData.tax_sensitivity && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
          </div>
          <input 
            type="checkbox" 
            name="tax_sensitivity"
            checked={formData.tax_sensitivity}
            onChange={handleChange}
            className="hidden" 
          />
          <div>
            <span className="block text-[color:var(--text-primary)] text-sm font-medium">Tax Sensitive Mode</span>
            <span className="block text-[color:var(--text-secondary)] text-xs mt-1">Applies a heavy mathematical penalty on portfolio turnover.</span>
          </div>
        </label>
        
        <label className="flex items-center space-x-3 cursor-pointer group mt-4">
          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.allow_margin ? 'bg-[color:var(--accent)] border-[color:var(--accent)]' : 'bg-[color:var(--surface-sunken)] border-[color:var(--border-default)] group-hover:border-[color:var(--border-strong)]'}`}>
            {formData.allow_margin && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
          </div>
          <input 
            type="checkbox" 
            name="allow_margin"
            checked={formData.allow_margin}
            onChange={handleChange}
            className="hidden" 
          />
          <div>
            <span className="block text-[color:var(--text-primary)] text-sm font-medium">Enable Margin Trading</span>
            <span className="block text-[color:var(--text-secondary)] text-xs mt-1">Allows portfolio to hold negative cash balance. Without this, trades exceeding cash balance will fail.</span>
          </div>
        </label>
        
        <div className="pt-4 flex items-center justify-between border-t border-[color:var(--border-default)] mt-4">
          <div className="text-sm font-mono tracking-wider">
            {status.type === 'success' && <span className="text-[color:var(--positive)]">{status.message}</span>}
            {status.type === 'error' && <span className="text-[color:var(--negative)]">{status.message}</span>}
            {status.type === 'loading' && <span className="text-[color:var(--accent)]">{status.message}</span>}
          </div>
          <button 
            type="submit" 
            className="px-6 py-2 bg-[color:var(--accent)] hover:bg-[#689BCE] text-[color:var(--surface-base)] font-mono font-bold tracking-wider rounded-md transition-colors"
          >
            SAVE PREFERENCES
          </button>
        </div>
      </form>
    </GlassCard>
  );
}
