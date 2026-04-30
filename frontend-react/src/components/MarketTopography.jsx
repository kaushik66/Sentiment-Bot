import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Activity, BarChart2, Layers, Loader2, AlertCircle } from 'lucide-react';
import FinvizTreemap from './FinvizTreemap';

const MACRO_API = 'http://localhost:5002/api/macro';

const MarketTopography = () => {
  const [macroData, setMacroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMacro = async () => {
      try {
        const res = await fetch(MACRO_API);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        setMacroData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMacro();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-28 gap-4 text-[color:var(--text-secondary)]">
        <Loader2 size={32} className="animate-spin text-indigo-500" />
        <p className="text-sm font-medium tracking-wide">Calculating macro topology...</p>
      </div>
    );
  }

  if (error || !macroData) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-28 gap-3 text-[color:var(--color-risk)]">
        <AlertCircle size={28} />
        <p className="text-sm">Failed to load macro data: {error}</p>
      </div>
    );
  }

  const totalStocks = macroData.breadth.advancing + macroData.breadth.declining;
  const breadthPct = Math.round((macroData.breadth.advancing / totalStocks) * 100);

  return (
    <div className="w-full bg-[color:var(--surface-card)] text-[color:var(--text-primary)] font-sans p-6 rounded-xl border border-[color:var(--border-subtle)] shadow-[var(--shadow-1)] mb-12">

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-8">
        <div className="flex items-center gap-3">
          <Layers className="text-[color:var(--color-action)]" size={24} />
          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-primary)]">
            Market Topography
          </h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] text-[color:var(--text-secondary)] font-mono uppercase tracking-widest">Market: {macroData.as_of}</span>
          <span className="text-[10px] text-[color:var(--color-action)] opacity-80 font-mono uppercase tracking-widest leading-none">Macro: {macroData.macro_as_of}</span>
        </div>
      </div>

      {/* ── ROW 1: Context Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        {/* Regime (Market Trend + Macro Risk) */}
        <div className="bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] p-5 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[color:var(--text-secondary)] font-medium">Market Trend</span>
              {macroData.regime.spy_vs_50sma > 0
                ? <TrendingUp size={16} className="text-[color:var(--color-alpha)]" />
                : <TrendingDown size={16} className="text-[color:var(--color-risk)]" />}
            </div>
            <div className={`text-2xl font-bold ${macroData.regime.spy_vs_50sma > 0 ? 'text-[color:var(--color-alpha)]' : 'text-[color:var(--color-risk)]'}`}>
              {macroData.regime.status}
            </div>
            <div className="text-xs text-[color:var(--text-secondary)] mt-1">
              {macroData.regime.spy_vs_50sma > 0 ? '+' : ''}{macroData.regime.spy_vs_50sma}% vs 50-Day SMA
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-[color:var(--border-subtle)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-[color:var(--text-secondary)] uppercase font-black tracking-widest">Macro Risk</span>
              <span className={`text-[10px] font-bold uppercase ${macroData.regime.recession_prob > 25 ? 'text-amber-500' : 'text-[color:var(--color-alpha)]'}`}>
                {macroData.regime.macro_status}
              </span>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-xl font-black text-[color:var(--text-primary)]">
                {macroData.regime.recession_prob}%
              </div>
              <div className="text-[10px] text-[color:var(--text-secondary)] pb-1 font-medium">Recession Prob (Estrella-Mishkin)</div>
            </div>
          </div>
        </div>

        {/* Fear & Greed Composite */}
        <div className="bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] p-5 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[color:var(--text-secondary)] font-medium">Fear & Greed Index</span>
            <span className={`text-xs font-black px-2 py-0.5 rounded ${
              macroData.sentiment.score > 80 ? 'bg-blue-100 text-blue-700' :
              macroData.sentiment.score > 60 ? 'bg-emerald-100 text-emerald-700' :
              macroData.sentiment.score > 40 ? 'bg-slate-200 text-slate-700' :
              'bg-rose-100 text-rose-700'
            }`}>
              {macroData.sentiment.label}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-4xl font-black text-[color:var(--text-primary)] text-center py-1">
              {macroData.sentiment.score}
            </div>
            <div className="relative h-2 bg-[color:var(--border-subtle)] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-slate-400 to-emerald-500 opacity-20" />
              <div 
                className={`absolute top-0 bottom-0 transition-all duration-1000 ${
                  macroData.sentiment.score > 60 ? 'bg-[color:var(--color-alpha)] shadow-[0_0_10px_rgba(16,185,129,0.2)]' :
                  macroData.sentiment.score > 40 ? 'bg-slate-400' : 'bg-[color:var(--color-risk)] shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                }`}
                style={{ left: 0, width: `${macroData.sentiment.score}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-[color:var(--text-secondary)] font-bold uppercase tracking-tighter">
              <span>Fear</span>
              <span>Neutral</span>
              <span>Greed</span>
            </div>
          </div>
        </div>

        {/* Volatility Term Structure */}
        <div className="bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] p-5 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[color:var(--text-secondary)] font-medium">Vol Structure</span>
              <Activity size={16} className={macroData.regime.vol_ratio > 1 ? 'text-[color:var(--color-risk)] animate-pulse' : 'text-[color:var(--color-alpha)]'} />
            </div>
            <div className={`text-2xl font-bold flex items-baseline gap-2 ${macroData.regime.vol_ratio > 1 ? 'text-[color:var(--color-risk)]' : 'text-[color:var(--color-alpha)]'}`}>
              {macroData.regime.vol_ratio}
              <span className="text-xs font-black uppercase opacity-60">Ratio</span>
            </div>
            <div className="text-[10px] text-[color:var(--text-secondary)] mt-1 uppercase font-bold tracking-tight">
              VXST (9d) vs VIX (30d) — {macroData.regime.vol_status} Risk
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-[color:var(--border-subtle)]">
             <div className="flex justify-between text-[11px] text-[color:var(--text-secondary)]">
                <span>VIX Baseline</span>
                <span className="text-[color:var(--text-primary)] font-mono">{macroData.regime.vix}</span>
             </div>
             <div className="w-full h-1 bg-[color:var(--border-subtle)] rounded-full mt-1.5 overflow-hidden">
                <div 
                  className={`h-full ${macroData.regime.vol_ratio > 1 ? 'bg-[color:var(--color-risk)]' : 'bg-[color:var(--color-alpha)]'}`} 
                  style={{ width: `${Math.min(macroData.regime.vol_ratio * 50, 100)}%` }} 
                />
             </div>
          </div>
        </div>
      </div>

      {/* ── ROW 2: Market Breadth ── */}
      <div className="bg-[color:var(--surface-base)] border border-[color:var(--border-subtle)] p-5 rounded-xl mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-[color:var(--text-primary)]">Market Breadth</h3>
          <span className="text-xs font-mono text-[color:var(--text-secondary)]">
            {macroData.breadth.advancing} Adv / {macroData.breadth.declining} Dec
          </span>
        </div>
        <div className="w-full h-3 flex rounded-full overflow-hidden bg-[color:var(--border-subtle)]">
          <div className="bg-[color:var(--color-alpha)] transition-all duration-1000" style={{ width: `${breadthPct}%` }} />
          <div className="bg-[color:var(--color-risk)] transition-all duration-1000" style={{ width: `${100 - breadthPct}%` }} />
        </div>
        <div className="flex justify-between mt-3 text-xs text-[color:var(--text-secondary)] font-mono">
          <div className="flex flex-col gap-1">
            <span className="text-[color:var(--color-alpha)]">{breadthPct}% Advancing</span>
            <span className={macroData.breadth.volume_trend > 0 ? 'text-amber-600' : 'text-[color:var(--text-secondary)]'}>
              Vol Trend: {macroData.breadth.volume_trend > 0 ? '+' : ''}{macroData.breadth.volume_trend}% vs 20d SMA
            </span>
          </div>
          <div className="text-center self-center text-[color:var(--text-secondary)]">
            52w Highs: <span className="text-[color:var(--color-alpha)] font-bold">{macroData.breadth.new_highs}</span>
            {' | '}
            52w Lows: <span className="text-[color:var(--color-risk)] font-bold">{macroData.breadth.new_lows}</span>
          </div>
          <span className="text-[color:var(--color-risk)] text-right self-start">{100 - breadthPct}% Declining</span>
        </div>
      </div>

      {/* ── ROW 3: Finviz-Style Treemap ── */}
      <div>
        <h3 className="text-sm font-semibold text-[color:var(--text-primary)] mb-4 pl-1">
          S&amp;P 500 Sector Map
          <span className="ml-2 text-xs font-normal text-[color:var(--text-secondary)]">
            — block size = market cap · color = daily return
          </span>
        </h3>
        <FinvizTreemap sectors={macroData.sectors} height={620} />
      </div>
    </div>
  );
};

export default MarketTopography;
