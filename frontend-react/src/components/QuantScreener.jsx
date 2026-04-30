import React, { useState } from 'react';
import { Search, Loader2, BarChart2, Filter, ChevronRight, AlertCircle } from 'lucide-react';

const SECTORS = [
  "Information Technology",
  "Health Care",
  "Financials",
  "Consumer Discretionary",
  "Communication Services",
  "Industrials",
  "Consumer Staples",
  "Energy",
  "Utilities",
  "Real Estate",
  "Materials"
];

const QuantScreener = () => {
  const [filters, setFilters] = useState({
    sector: '',
    minMarketCap: '',
    trend: '',
    minVolZ: '',
    squeeze: false,
    newsSentiment: '',
    maxPe: '',
    maxRsi: '',
    withinPct52wHigh: ''
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const runScan = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Map frontend filters to backend expected payload
      const payload = {
        sector: filters.sector || undefined,
        min_market_cap: filters.minMarketCap ? parseFloat(filters.minMarketCap) * 1e9 : undefined,
        trend_regime: filters.trend || undefined,
        min_vol_z: filters.minVolZ ? parseFloat(filters.minVolZ) : undefined,
        in_squeeze: filters.squeeze || undefined,
        news_sentiment: filters.newsSentiment || undefined,
        max_pe: filters.maxPe ? parseFloat(filters.maxPe) : undefined,
        max_rsi: filters.maxRsi ? parseFloat(filters.maxRsi) : undefined,
        within_pct_52w_high: filters.withinPct52wHigh ? parseFloat(filters.withinPct52wHigh) : undefined
      };

      const response = await fetch('http://localhost:5002/api/screener', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Screener API error: ${response.status}`);
      }

      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      console.error("Screener scan failed:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCap = (cap) => {
    if (!cap) return 'N/A';
    if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(1)}B`;
    return `$${(cap / 1e6).toFixed(1)}M`;
  };

  return (
    <div className="w-full space-y-6">
      {/* --- Filter Panel --- */}
      <div className="bg-[color:var(--surface-card)] p-6 rounded-xl border border-[color:var(--border-subtle)] shadow-[var(--shadow-1)]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[color:var(--text-primary)]">
            <Filter size={20} className="text-[color:var(--color-action)]" />
            <h2 className="text-lg font-bold tracking-tight">Quantitative Screener</h2>
          </div>
          <button 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-xs font-semibold text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors flex items-center gap-1"
          >
            {showAdvanced ? '- Basic Filters' : '+ Advanced Filters'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Row 1 / Col 1: Sector */}
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.2em] pl-1">Sector</label>
            <select 
              name="sector"
              value={filters.sector}
              onChange={handleInputChange}
              className="w-full bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-xl p-3 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all cursor-pointer appearance-none"
            >
              <option value="">Any Sector</option>
              {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Row 1 / Col 2: Trend Regime */}
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.2em] pl-1">Trend Regime</label>
            <select 
              name="trend"
              value={filters.trend}
              onChange={handleInputChange}
              className="w-full bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-xl p-3 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all cursor-pointer appearance-none"
            >
              <option value="">Any Regime</option>
              <option value="above_50">Price &gt; 50-Day SMA</option>
              <option value="below_50">Price &lt; 50-Day SMA</option>
            </select>
          </div>

          {/* Row 1 / Col 3: Momentum */}
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.2em] pl-1">Min Volume Z-Score</label>
            <input 
              type="number"
              step="0.1"
              name="minVolZ"
              value={filters.minVolZ}
              onChange={handleInputChange}
              placeholder="e.g. 2.0"
              className="w-full bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-xl p-3 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all placeholder:text-[color:var(--text-tertiary)]"
            />
          </div>

          {/* Row 2 / Col 1: Market Cap */}
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-[color:var(--text-secondary)] uppercase tracking-[0.2em] pl-1">Min Market Cap ($B)</label>
            <input 
              type="number"
              name="minMarketCap"
              value={filters.minMarketCap}
              onChange={handleInputChange}
              placeholder="e.g. 100"
              className="w-full bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-xl p-3 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all placeholder:text-[color:var(--text-tertiary)]"
            />
          </div>

          {/* Row 2 / Col 2: Volatility Squeeze */}
          <div className="pt-6">
             <div className="flex items-center gap-3 bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] rounded-xl px-4 h-[46px] hover:border-[color:var(--border-strong)] transition-colors cursor-pointer group">
                <input 
                  type="checkbox"
                  id="squeeze"
                  name="squeeze"
                  checked={filters.squeeze}
                  onChange={handleInputChange}
                  className="w-4 h-4 bg-white border-[color:var(--border-strong)] rounded text-[color:var(--color-action)] focus:ring-[color:var(--color-action)]/20 cursor-pointer"
                />
                <label htmlFor="squeeze" className="text-sm font-medium text-[color:var(--text-secondary)] group-hover:text-[color:var(--text-primary)] cursor-pointer select-none">
                  Volatility Squeeze
                </label>
             </div>
          </div>

          {/* Row 2 / Col 3: Action */}
          <div className="pt-6">
            <button 
              onClick={runScan}
              disabled={isLoading}
              className="w-full bg-[color:var(--color-action)] hover:opacity-90 disabled:bg-[color:var(--border-subtle)] disabled:text-[color:var(--text-tertiary)] text-white font-bold h-[46px] rounded-xl flex items-center justify-center gap-2 transition-all shadow-[var(--shadow-1)] active:scale-[0.98]"
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin text-white" />
              ) : (
                <Search size={18} />
              )}
              {isLoading ? 'Scanning Market...' : 'Run Scan'}
            </button>
          </div>
        </div>

        {/* --- Advanced Filters Drawer --- */}
        {showAdvanced && (
          <div className="mt-8 pt-8 border-t border-[color:var(--border-subtle)] bg-[color:var(--surface-base)] p-6 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-[color:var(--color-action)] uppercase tracking-[0.2em] pl-1">News Sentiment</label>
                <select 
                  name="newsSentiment"
                  value={filters.newsSentiment}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all cursor-pointer"
                >
                  <option value="">Any Sentiment</option>
                  <option value="Bullish">Bullish</option>
                  <option value="Bearish">Bearish</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-[color:var(--color-action)] uppercase tracking-[0.2em] pl-1">Max P/E Ratio</label>
                <input 
                  type="number"
                  name="maxPe"
                  value={filters.maxPe}
                  onChange={handleInputChange}
                  placeholder="e.g. 25"
                  className="w-full bg-white border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all placeholder:text-[color:var(--text-tertiary)]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-[color:var(--color-action)] uppercase tracking-[0.2em] pl-1">Max RSI</label>
                <input 
                  type="number"
                  name="maxRsi"
                  value={filters.maxRsi}
                  onChange={handleInputChange}
                  placeholder="e.g. 30"
                  className="w-full bg-white border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all placeholder:text-[color:var(--text-tertiary)]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-[color:var(--color-action)] uppercase tracking-[0.2em] pl-1">% From 52W High</label>
                <input 
                  type="number"
                  name="withinPct52wHigh"
                  value={filters.withinPct52wHigh}
                  onChange={handleInputChange}
                  placeholder="e.g. 5"
                  className="w-full bg-white border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-[color:var(--color-action)]/20 focus:border-[color:var(--color-action)] outline-none transition-all placeholder:text-[color:var(--text-tertiary)]"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- Results Table --- */}
      <div className="bg-[color:var(--surface-card)] rounded-xl border border-[color:var(--border-subtle)] overflow-hidden shadow-[var(--shadow-1)]">
        <div className="px-6 py-4 border-b border-[color:var(--border-subtle)] flex justify-between items-center bg-[color:var(--surface-base)]">
          <h2 className="text-sm font-bold text-[color:var(--text-primary)] uppercase tracking-widest">Scan Results</h2>
          <span className="text-[10px] font-bold text-[color:var(--text-secondary)] bg-white border border-[color:var(--border-subtle)] px-2.5 py-1 rounded-full uppercase tracking-[0.1em]">
            {results.length} companies matched
          </span>
        </div>
        
        <div className="overflow-x-auto min-h-[400px] relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-3">
              <Loader2 size={40} className="text-[color:var(--color-action)] animate-spin" />
              <p className="text-sm font-medium text-[color:var(--text-secondary)]">Filtering market data...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-[color:var(--color-risk)]">
              <AlertCircle size={32} />
              <p className="font-medium">Error: {error}</p>
            </div>
          )}

          {!isLoading && !error && results.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 gap-3 text-[color:var(--text-tertiary)]">
              <BarChart2 size={48} strokeWidth={1} />
              <p className="text-sm text-[color:var(--text-secondary)]">No companies found. Adjust your filters and run the scan again.</p>
            </div>
          )}

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[color:var(--surface-base)] text-[color:var(--text-secondary)] text-[11px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)]">Ticker</th>
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)]">Company</th>
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)]">Sector</th>
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)] text-right">Market Cap</th>
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)] text-right">P/E</th>
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)] text-right">Close Price</th>
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)] text-right">RSI</th>
                <th className="px-6 py-4 border-b border-[color:var(--border-subtle)] text-right">Vol Z-Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border-subtle)]">
              {results.map((item) => (
                <tr key={item.ticker} className="hover:bg-[color:var(--surface-base)] transition-colors group">
                  <td className="px-6 py-4 font-bold text-[color:var(--color-action)] group-hover:opacity-80 transition-colors">
                    {item.ticker}
                  </td>
                  <td className="px-6 py-4 text-[color:var(--text-primary)] text-sm truncate max-w-[150px]">
                    {item.company_name}
                  </td>
                  <td className="px-6 py-4 text-[color:var(--text-secondary)] text-sm">
                    {item.sector}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-[color:var(--text-primary)] text-sm">
                    {formatCap(item.market_cap)}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-[color:var(--text-primary)] text-sm">
                    {item.pe_ratio?.toFixed(1) || '—'}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-[color:var(--text-primary)] text-sm">
                    ${item.close?.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-[color:var(--text-primary)] text-sm">
                    {item.rsi_14?.toFixed(0) || '—'}
                  </td>
                  <td className={`px-6 py-4 text-right font-mono text-sm ${item.volume_z_score > 2.0 ? 'text-[color:var(--color-alpha)] font-bold' : 'text-[color:var(--text-secondary)]'}`}>
                    {item.volume_z_score?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuantScreener;
