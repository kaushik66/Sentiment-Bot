import React, { useEffect, useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Bar } from 'recharts';
import { X, ExternalLink, TrendingUp, TrendingDown, Minus, Info, Briefcase, Loader2, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { addToWatchlist, removeFromWatchlist, getWatchlist } from '../services/userDatabase';
import DynamicInsightsPanel from './DynamicInsightsPanel';

const StockDetailModal = ({ isOpen, onClose, stock, simulationId, defaultTab = 'analysis' }) => {
  const { currentUser } = useAuth();
  const [history, setHistory] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7D'); // 7D, 1M, 1Y, ALL
  const [insights, setInsights] = useState(null);
  const [insightsLoading, setInsightsLoading] = useState(false);

  // Trade State
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [tradeQty, setTradeQty] = useState(1);
  const [isTrading, setIsTrading] = useState(false);
  const [tradeError, setTradeError] = useState(null);
  const [tradeSuccess, setTradeSuccess] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [livePrice, setLivePrice] = useState(stock?.Price || 0);
  const [watchlist, setWatchlist] = useState([]);

  const fetchPortfolio = async () => {
    if (!currentUser || !simulationId) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch(`http://localhost:5001/api/portfolio?simulationId=${simulationId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setPortfolio(data);
    } catch (err) {
      console.error("Failed to fetch portfolio", err);
    }
  };

  useEffect(() => {
    if (isOpen && activeTab === 'trade' && simulationId) {
      fetchPortfolio();
    }
  }, [isOpen, activeTab, currentUser, simulationId]);

  const handleTrade = async (action) => {
    if (!currentUser) return;
    setIsTrading(true);
    setTradeError(null);
    setTradeSuccess(null);

    try {
      const token = await currentUser.getIdToken();
      const res = await fetch('http://localhost:5001/api/trade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ticker: stock.Ticker,
          action: action,
          quantity: tradeQty,
          simulationId: simulationId
        })
      });

      const data = await res.json();

      if (res.ok) {
        setTradeSuccess(data.message);
        fetchPortfolio(); // Refresh balance
        setTimeout(() => setTradeSuccess(null), 3000);
      } else {
        setTradeError(data.error || "Trade failed");
      }
    } catch (err) {
      setTradeError("Network error occurred");
    } finally {
      setIsTrading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

  useEffect(() => {
    if (isOpen && stock) {
      setLivePrice(stock.Price || 0);
      setLoading(true);
      fetch(`http://localhost:5001/api/history/${stock.Ticker}`)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (data.history && Array.isArray(data.history)) {
            setHistory(data.history);
            setCompanyName(data.companyName || stock.Ticker);
            if ((!stock.Price || stock.Price === 0) && data.history.length > 0) {
              setLivePrice(data.history[data.history.length - 1].price);
            }
          } else if (Array.isArray(data)) {
            setHistory(data);
            setCompanyName(stock.Ticker);
            if ((!stock.Price || stock.Price === 0) && data.length > 0) {
              setLivePrice(data[data.length - 1].price);
            }
          }
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch history", err);
          setLoading(false);
        });
    }
  }, [isOpen, stock]);
  useEffect(() => {
    if (currentUser && isOpen) {
      getWatchlist(currentUser.uid).then(setWatchlist);
    }
  }, [currentUser, isOpen]);

  const isWatched = Array.isArray(watchlist) && watchlist.includes(stock?.Ticker);

  const toggleWatchlist = async (e) => {
    e.stopPropagation();
    if (!currentUser || !stock) return;
    
    const newWatched = !isWatched;
    setWatchlist(prev => newWatched ? [...(prev || []), stock.Ticker] : (prev || []).filter(t => t !== stock.Ticker));
    
    try {
      if (newWatched) {
        await addToWatchlist(currentUser.uid, stock.Ticker);
      } else {
        await removeFromWatchlist(currentUser.uid, stock.Ticker);
      }
    } catch (err) {
      console.error("Watchlist sync failed", err);
    }
  };
  // Fetch dynamic insights from Python engine on port 5002
  useEffect(() => {
    if (isOpen && stock?.Ticker && activeTab === 'analysis') {
      let isMounted = true;
      setInsightsLoading(true);
      fetch(`http://localhost:5002/api/test/insights/${stock.Ticker}`)
        .then(res => {
          if (!res.ok) return { error: "Insights unavailable" };
          return res.json();
        })
        .then(data => {
          if (isMounted) {
            setInsights(!data.error && data.insights ? data : null);
            setInsightsLoading(false);
          }
        })
        .catch(err => {
          if (isMounted) {
            console.error("Insights fetch failed", err);
            setInsightsLoading(false);
          }
        });

      return () => { isMounted = false; };
    }
  }, [isOpen, stock?.Ticker, activeTab]);

  if (!isOpen || !stock) return null;

  // Filter History based on Time Range
  const getFilteredHistory = () => {
    if (!history.length) return [];
    if (timeRange === 'ALL') return history;

    // Use slice for 7D (Trading Days) instead of calendar days
    if (timeRange === '7D') return history.slice(-7);

    const now = new Date();
    const cutoff = new Date();

    // if (timeRange === '1W') cutoff.setDate(now.getDate() - 7); // Replaced by 7D
    if (timeRange === '1M') cutoff.setMonth(now.getMonth() - 1);
    if (timeRange === '1Y') cutoff.setFullYear(now.getFullYear() - 1);

    return history.filter(item => new Date(item.date) >= cutoff);
  };

  const filteredHistory = getFilteredHistory();

  // Create optimized downsampled data specifically for the Recharts SVG to prevent browser freezing
  let chartData = filteredHistory;
  const MAX_POINTS = 150;
  if (filteredHistory.length > MAX_POINTS) {
    // Naive downsampling while keeping the absolute last day for accurate right-edge tracking
    const step = Math.ceil(filteredHistory.length / MAX_POINTS);
    chartData = filteredHistory.filter((_, idx) => idx % step === 0 || idx === filteredHistory.length - 1);
  }

  // Determine chart color based on trend
  const isUp = filteredHistory.length > 0 && filteredHistory[filteredHistory.length - 1].price >= filteredHistory[0].price;
  const chartColor = isUp ? "#22c55e" : "#ef4444";

  // 1. Daily Change (Absolute Anchor)
  let dailyChange = 0;
  let dailyChangePct = 0;
  if (filteredHistory.length >= 2) {
    const today = filteredHistory[filteredHistory.length - 1].price;
    const yesterday = filteredHistory[filteredHistory.length - 2].price;
    dailyChange = today - yesterday;
    dailyChangePct = (dailyChange / yesterday) * 100;
  }
  const isDailyUp = dailyChange >= 0;

  // 2. Next Earnings Deterministic Mock (Risk Tracker)
  let earnings = null;
  if (stock?.Ticker) {
    const sum = stock.Ticker.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const daysAhead = (sum % 40) + 1; // 1 to 40 days
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    earnings = {
      dateString: date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      daysAhead,
      isNear: daysAhead <= 7
    };
  }

  const ranges = ['7D', '1M', '1Y', 'ALL'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[var(--shadow-3)] w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col relative dark text-[var(--text-primary)]">

        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-[color:var(--color-border-glass)]">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              {stock.Ticker}
              <span className="text-xl font-medium text-gray-200 bg-[color:var(--color-panel-hover)] px-3 py-1 rounded shadow-inner">
                ${livePrice.toFixed(2)}
              </span>
              <button 
                onClick={toggleWatchlist}
                className={`p-2 rounded-full hover:bg-white/10 transition-colors ${isWatched ? 'text-yellow-400' : 'text-gray-400'}`}
                title={isWatched ? "Remove from Watchlist" : "Add to Watchlist"}
              >
                <Star size={20} fill={isWatched ? "currentColor" : "none"} />
              </button>
              {filteredHistory.length >= 2 && (
                <span className={`text-lg font-medium tracking-tight ${isDailyUp ? 'text-[color:var(--color-alpha)]' : 'text-[color:var(--color-risk)]'}`}>
                  {isDailyUp ? '+' : ''}{dailyChange.toFixed(2)} ({isDailyUp ? '+' : ''}{dailyChangePct.toFixed(2)}%)
                </span>
              )}
            </h2>
            <p className="text-[color:var(--color-secondary)] text-sm mt-2 flex items-center gap-2">
              <span>{companyName}</span>
              <span>•</span>
              <span className="text-[color:var(--color-secondary)] font-medium">{stock.Signal}</span>
              {earnings && (
                <>
                  <span>•</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold border ${earnings.isNear ? 'bg-[color:var(--color-risk)]/20 text-[color:var(--color-risk)] border-red-500/50 animate-pulse' : 'bg-blue-500/20 text-[color:var(--color-action)] border-blue-500/50'}`}>
                    Next Earnings: {earnings.dateString}
                  </span>
                </>
              )}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[color:var(--color-secondary)] hover:text-white transition-colors p-2 rounded-full hover:bg-[color:var(--color-panel-hover)]"
          >
            <X size={24} />
          </button>
        </div>

        {/* content */}
        <div className="p-6 space-y-8">

          {/* Tab Switcher */}
          <div className="flex border-b border-[color:var(--color-border-glass)]">
            <button
              onClick={() => setActiveTab('analysis')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 
                ${activeTab === 'analysis' ? 'border-blue-500 text-[color:var(--color-action)]' : 'border-transparent text-[color:var(--color-secondary)] hover:text-white'}`}
            >
              Analysis & News
            </button>
            <button
              onClick={() => setActiveTab('trade')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 
                ${activeTab === 'trade' ? 'border-purple-500 text-purple-400' : 'border-transparent text-[color:var(--color-secondary)] hover:text-white'}`}
            >
              Trade Simulator
            </button>
          </div>

          {activeTab === 'analysis' ? (
            /* Analysis Content (Original) */
            <>
              {/* Sentiment Distribution Matrix */}
              <div className="bg-[color:var(--color-panel-hover)]/50 p-5 rounded-xl border border-[color:var(--color-border-glass)]/50 mb-4">
                <div className="text-[color:var(--color-secondary)] text-xs uppercase tracking-wider mb-2">Live News Distribution</div>
                {stock.Sentiment_Distribution ? (
                  <>
                    <div className={`text-xl font-bold mb-3 ${stock.Sentiment_Distribution.bullish_pct > 50 ? 'text-emerald-500' : stock.Sentiment_Distribution.bearish_pct > 50 ? 'text-[color:var(--color-risk)]' : 'text-slate-300'}`}>
                      {stock.Sentiment_Distribution.label}
                    </div>
                    
                    {/* The Tug of War Bar */}
                    <div className="w-full h-2 rounded-full flex overflow-hidden bg-slate-800">
                      <div className="bg-emerald-500 transition-all duration-1000" style={{ width: `${stock.Sentiment_Distribution.bullish_pct}%` }}></div>
                      <div className="bg-slate-500 transition-all duration-1000" style={{ width: `${stock.Sentiment_Distribution.neutral_pct}%` }}></div>
                      <div className="bg-[color:var(--color-risk)] transition-all duration-1000" style={{ width: `${stock.Sentiment_Distribution.bearish_pct}%` }}></div>
                    </div>
                    
                    <div className="flex justify-between text-[11px] font-medium text-[color:var(--color-secondary)] mt-2 px-1">
                      <span className="text-emerald-500/80">{stock.Sentiment_Distribution.bullish_pct}% Bullish</span>
                      <span className="text-slate-500">{stock.Sentiment_Distribution.neutral_pct}% Neutral</span>
                      <span className="text-[color:var(--color-risk)]/80">{stock.Sentiment_Distribution.bearish_pct}% Bearish</span>
                    </div>

                    <div className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-700/50 flex justify-between font-mono">
                      <span>Based on {stock.Sentiment_Distribution.total_articles} articles analyzed</span>
                      <span>Avg Conviction: {stock.Sentiment_Distribution.avg_conviction}</span>
                    </div>

                    {/* Momentum Indicator */}
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-700/50">
                      {stock.Sentiment_Distribution.sentiment_delta_points > 0.1 ? (
                        <>
                          <TrendingUp size={14} className="text-emerald-500" />
                          <span className="text-emerald-500 text-[11px] font-medium tracking-wide">
                            Sentiment is warming up (+{stock.Sentiment_Distribution.sentiment_delta_points} pts vs 7-day avg)
                          </span>
                        </>
                      ) : stock.Sentiment_Distribution.sentiment_delta_points < -0.1 ? (
                        <>
                          <TrendingDown size={14} className="text-[color:var(--color-risk)]" />
                          <span className="text-[color:var(--color-risk)] text-[11px] font-medium tracking-wide">
                            Sentiment is cooling off ({stock.Sentiment_Distribution.sentiment_delta_points} pts vs 7-day avg)
                          </span>
                        </>
                      ) : (
                        <>
                          <Minus size={14} className="text-slate-400" />
                          <span className="text-slate-400 text-[11px] font-medium tracking-wide">
                            Sentiment is holding steady at historical baseline
                          </span>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="py-4 text-sm text-[color:var(--color-secondary)] italic">Quantitative distribution matrix pending next AI cluster scan...</div>
                )}
              </div>

              {/* Chart Section */}
              <div className="bg-[color:var(--color-panel-hover)]/30 rounded-xl border border-[color:var(--color-border-glass)] p-4">
                <div className="flex justify-end gap-2 mb-4">
                  {ranges.map(r => (
                    <button
                      key={r}
                      onClick={() => setTimeRange(r)}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${timeRange === r
                        ? 'bg-[color:var(--color-action)] text-white'
                        : 'bg-[color:var(--color-panel-hover)] text-[color:var(--color-secondary)] hover:bg-gray-700'
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <div className="h-64 w-full">
                  {loading ? (
                    <div className="h-full flex items-center justify-center text-[color:var(--color-secondary)]">Loading History...</div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={chartData}>
                        <defs>
                          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#9ca3af' }}
                          formatter={(value, name) => [name === 'volume' ? value.toLocaleString() : `$${value}`, name.charAt(0).toUpperCase() + name.slice(1)]}
                        />
                        <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis dataKey="date" hide />
                        <YAxis yAxisId="price" domain={['auto', 'auto']} hide />
                        <YAxis yAxisId="volume" orientation="right" hide />
                        <Bar
                          yAxisId="volume"
                          dataKey="volume"
                          fill="#475569"
                          opacity={0.4}
                          barSize={timeRange === '7D' ? 40 : timeRange === '1M' ? 10 : 2}
                        />
                        <Area
                          yAxisId="price"
                          type="monotone"
                          dataKey="price"
                          stroke={chartColor}
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorPrice)"
                          animationDuration={500}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              {/* Dynamic Insights Panel Integration */}
              <div className="bg-[color:var(--color-panel-hover)]/20 rounded-xl border border-[color:var(--color-border-glass)] pt-2 pb-6 px-4">
                <h3 className="text-sm font-semibold text-[color:var(--color-secondary)] mb-4 px-2 uppercase tracking-wider flex items-center gap-2">
                  <TrendingUp size={16} className="text-indigo-400" />
                  Quantitative Engine Insights
                </h3>
                {insightsLoading ? (
                  <div className="h-48 flex flex-col items-center justify-center text-slate-500 animate-pulse space-y-3">
                    <Loader2 size={24} className="animate-spin text-indigo-500" />
                    <p className="text-xs">Processing Vault Data...</p>
                  </div>
                ) : insights && insights.insights && insights.insights.length > 0 ? (
                  <div className="animate-in fade-in duration-500 w-full">
                    <DynamicInsightsPanel payload={insights} />
                  </div>
                ) : (
                  <div className="h-32 flex items-center justify-center border border-dashed border-[color:var(--color-border-glass)] rounded-lg bg-[color:var(--color-panel)]/40">
                    <p className="text-sm text-[color:var(--color-secondary)]">No advanced quant signals currently active.</p>
                  </div>
                )}
              </div>

              {/* News Section */}
              <div className="bg-[color:var(--color-panel-hover)]/30 rounded-xl p-6 border border-[color:var(--color-border-glass)]">
                <h3 className="text-lg font-semibold text-white mb-3">Latest Headline</h3>
                <p className="text-xl text-gray-200 leading-relaxed font-light">
                  "{stock.Headline}"
                </p>

                {stock.URL && stock.URL !== '#' && (
                  <div className="mt-4">
                    <a
                      href={stock.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[color:var(--color-action)] hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Read Full Source
                    </a>
                  </div>
                )}

                {/* --- News Dropdown --- */}
                {stock.All_News && stock.All_News.length > 0 && (
                  <details className="mt-6 bg-[color:var(--color-panel)]/50 rounded-lg overflow-hidden group">
                    <summary className="cursor-pointer p-4 font-medium text-[color:var(--color-secondary)] hover:text-white hover:bg-[color:var(--color-panel-hover)] transition-colors list-none flex justify-between items-center select-none">
                      <span>View All {stock.All_News.length} Analyzed Articles</span>
                      <span className="text-[color:var(--color-secondary)] group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 border-t border-[color:var(--color-border-glass)] overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="text-xs text-[color:var(--color-secondary)] border-b border-[color:var(--color-border-glass)]">
                            <th className="pb-2 font-medium">Source / Headline</th>
                            <th className="pb-2 font-medium">Category</th>
                            <th className="pb-2 font-medium text-right">Sentiment</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {stock.All_News.map((news, idx) => (
                            <tr key={idx} className="border-b border-[color:var(--color-border-glass)]/50 last:border-0 hover:bg-[color:var(--color-panel-hover)]/30 transition-colors">
                              <td className="py-3 pr-4">
                                <a
                                  href={news.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[color:var(--color-action)] hover:text-blue-300 block truncate max-w-xs md:max-w-sm"
                                  title={news.Headline}
                                >
                                  {news.Headline}
                                </a>
                              </td>
                              <td className="py-3 pr-4 text-[color:var(--color-secondary)] whitespace-nowrap">
                                <span className="bg-[color:var(--color-panel-hover)] px-2 py-1 rounded text-xs border border-[color:var(--color-border-glass)]">
                                  {news.Category}
                                </span>
                              </td>
                              <td className={`py-3 text-right font-medium ${news.Sentiment > 0 ? 'text-[color:var(--color-alpha)]' : news.Sentiment < 0 ? 'text-[color:var(--color-risk)]' : 'text-[color:var(--color-secondary)]'}`}>
                                {news.Sentiment > 0 ? '+' : ''}{news.Sentiment}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </details>
                )}
              </div>
            </>
          ) : (
            /* Trade Tab Content */
            <div className="flex flex-col gap-6 py-4">
              {/* Balance Info */}
              {/* Balance Info -> Shares Owned */}
              <div className="bg-[color:var(--color-panel-hover)]/50 p-6 rounded-xl border border-[color:var(--color-border-glass)]/50 flex justify-between items-center">
                <div>
                  <p className="text-[color:var(--color-secondary)] text-sm">Shares Owned</p>
                  <p className="text-3xl font-bold text-white">
                    {portfolio?.holdings?.find(h => h.ticker === stock.Ticker)?.quantity || 0}
                  </p>
                </div>
                <div className="text-right">
                  <Briefcase className="text-blue-500 opacity-20" size={48} />
                </div>
              </div>

              {/* Trade Actions */}
              <div className="bg-[color:var(--color-panel)] rounded-xl border border-[color:var(--color-border-glass)] p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[color:var(--color-secondary)] font-medium">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={tradeQty}
                      onChange={(e) => setTradeQty(Math.max(1, parseInt(e.target.value) || 0))}
                      className="bg-[color:var(--color-panel-hover)] border border-[color:var(--color-border-glass)] rounded-lg px-4 py-2 text-right text-white w-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex justify-between items-center border-t border-[color:var(--color-border-glass)] pt-4">
                    <span className="text-[color:var(--color-secondary)]">Estimated Cost</span>
                    <span className="text-xl font-bold text-white">${(tradeQty * livePrice).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>

                  {tradeError && (
                    <div className="bg-red-900/30 text-[color:var(--color-risk)] p-3 rounded-lg text-sm flex items-center gap-2">
                      <Info size={16} /> {tradeError}
                    </div>
                  )}

                  {tradeSuccess && (
                    <div className="bg-green-900/30 text-[color:var(--color-alpha)] p-3 rounded-lg text-sm flex items-center gap-2">
                      <Info size={16} /> {tradeSuccess}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <button
                      onClick={() => handleTrade('BUY')}
                      disabled={isTrading}
                      className="bg-green-600 hover:bg-[color:var(--color-alpha)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-900/20 active:scale-[0.98]"
                    >
                      {isTrading ? 'Processing...' : 'BUY'}
                    </button>
                    <button
                      onClick={() => handleTrade('SELL')}
                      disabled={isTrading}
                      className="bg-red-600 hover:bg-[color:var(--color-risk)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20 active:scale-[0.98]"
                    >
                      {isTrading ? 'Processing...' : 'SELL'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockDetailModal;
