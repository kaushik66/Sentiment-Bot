import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { X, ExternalLink, TrendingUp, TrendingDown, Info, Briefcase } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const StockDetailModal = ({ isOpen, onClose, stock }) => {
  const { currentUser } = useAuth();
  const [history, setHistory] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7D'); // 7D, 1M, 1Y, ALL

  // Trade State
  const [activeTab, setActiveTab] = useState('analysis');
  const [tradeQty, setTradeQty] = useState(1);
  const [isTrading, setIsTrading] = useState(false);
  const [tradeError, setTradeError] = useState(null);
  const [tradeSuccess, setTradeSuccess] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  const fetchPortfolio = async () => {
    if (!currentUser) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch('http://localhost:5001/api/portfolio', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setPortfolio(data);
    } catch (err) {
      console.error("Failed to fetch portfolio", err);
    }
  };

  useEffect(() => {
    if (isOpen && activeTab === 'trade') {
      fetchPortfolio();
    }
  }, [isOpen, activeTab, currentUser]);

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
          quantity: tradeQty
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
    if (isOpen && stock) {
      setLoading(true);
      fetch(`http://localhost:5001/api/history/${stock.Ticker}`)
        .then(res => res.json())
        .then(data => {
          // Handle new backend format { symbol, companyName, history }
          if (data.history && Array.isArray(data.history)) {
            setHistory(data.history);
            setCompanyName(data.companyName || stock.Ticker);
          } else if (Array.isArray(data)) {
            // Fallback for legacy array format
            setHistory(data);
            setCompanyName(stock.Ticker);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch history", err);
          setLoading(false);
        });
    }
  }, [isOpen, stock]);

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

  // Determine chart color based on trend
  const isUp = filteredHistory.length > 0 && filteredHistory[filteredHistory.length - 1].price >= filteredHistory[0].price;
  const chartColor = isUp ? "#22c55e" : "#ef4444";

  const ranges = ['7D', '1M', '1Y', 'ALL'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col relative">

        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-800">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              {stock.Ticker}
              <span className="text-sm font-normal text-gray-400 bg-gray-800 px-2 py-1 rounded">
                ${stock.Price}
              </span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              {companyName} • {stock.Signal} •
              <span className="text-xs text-gray-500 ml-2">
                {filteredHistory.length} pts
                (Last: {filteredHistory.length > 0 ? filteredHistory[filteredHistory.length - 1].date : 'N/A'})
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* content */}
        <div className="p-6 space-y-8">

          {/* Tab Switcher */}
          <div className="flex border-b border-gray-800">
            <button
              onClick={() => setActiveTab('analysis')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 
                ${activeTab === 'analysis' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              Analysis & News
            </button>
            <button
              onClick={() => setActiveTab('trade')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 
                ${activeTab === 'trade' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              Trade Simulator
            </button>
          </div>

          {activeTab === 'analysis' ? (
            /* Analysis Content (Original) */
            <>
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">AI Confidence</div>
                  <div className="text-2xl font-bold text-blue-400">{(stock.LSTM_Confidence * 100).toFixed(0)}%</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">News Sentiment</div>
                  <div className={`text-2xl font-bold ${stock.News_Sentiment > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {stock.News_Sentiment > 0 ? '+' : ''}{stock.News_Sentiment}
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Impacting Score</div>
                  <div className="text-2xl font-bold text-purple-400">{stock.News_Impact}</div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="bg-gray-800/30 rounded-xl border border-gray-800 p-4">
                <div className="flex justify-end gap-2 mb-4">
                  {ranges.map(r => (
                    <button
                      key={r}
                      onClick={() => setTimeRange(r)}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${timeRange === r
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <div className="h-64 w-full">
                  {loading ? (
                    <div className="h-full flex items-center justify-center text-gray-500">Loading History...</div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={filteredHistory}>
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
                        />
                        <XAxis dataKey="date" hide />
                        <YAxis domain={['auto', 'auto']} hide />
                        <Area
                          type="monotone"
                          dataKey="price"
                          stroke={chartColor}
                          fillOpacity={1}
                          fill="url(#colorPrice)"
                          animationDuration={500}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              {/* News Section */}
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
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
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Read Full Source
                    </a>
                  </div>
                )}

                {/* --- News Dropdown --- */}
                {stock.All_News && stock.All_News.length > 0 && (
                  <details className="mt-6 bg-gray-900/50 rounded-lg overflow-hidden group">
                    <summary className="cursor-pointer p-4 font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors list-none flex justify-between items-center select-none">
                      <span>View All {stock.All_News.length} Analyzed Articles</span>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 border-t border-gray-800 overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="text-xs text-gray-500 border-b border-gray-800">
                            <th className="pb-2 font-medium">Source / Headline</th>
                            <th className="pb-2 font-medium">Category</th>
                            <th className="pb-2 font-medium text-right">Sentiment</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {stock.All_News.map((news, idx) => (
                            <tr key={idx} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors">
                              <td className="py-3 pr-4">
                                <a
                                  href={news.URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 block truncate max-w-xs md:max-w-sm"
                                  title={news.Headline}
                                >
                                  {news.Headline}
                                </a>
                              </td>
                              <td className="py-3 pr-4 text-gray-400 whitespace-nowrap">
                                <span className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-700">
                                  {news.Category}
                                </span>
                              </td>
                              <td className={`py-3 text-right font-medium ${news.Sentiment > 0 ? 'text-green-400' : news.Sentiment < 0 ? 'text-red-400' : 'text-gray-400'}`}>
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
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Shares Owned</p>
                  <p className="text-3xl font-bold text-white">
                    {portfolio?.holdings?.find(h => h.ticker === stock.Ticker)?.quantity || 0}
                  </p>
                </div>
                <div className="text-right">
                  <Briefcase className="text-blue-500 opacity-20" size={48} />
                </div>
              </div>

              {/* Trade Actions */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-400 font-medium">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={tradeQty}
                      onChange={(e) => setTradeQty(Math.max(1, parseInt(e.target.value) || 0))}
                      className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-right text-white w-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-800 pt-4">
                    <span className="text-gray-400">Estimated Cost</span>
                    <span className="text-xl font-bold text-white">${(tradeQty * stock.Price).toLocaleString()}</span>
                  </div>

                  {tradeError && (
                    <div className="bg-red-900/30 text-red-400 p-3 rounded-lg text-sm flex items-center gap-2">
                      <Info size={16} /> {tradeError}
                    </div>
                  )}

                  {tradeSuccess && (
                    <div className="bg-green-900/30 text-green-400 p-3 rounded-lg text-sm flex items-center gap-2">
                      <Info size={16} /> {tradeSuccess}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <button
                      onClick={() => handleTrade('BUY')}
                      disabled={isTrading}
                      className="bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-900/20 active:scale-[0.98]"
                    >
                      {isTrading ? 'Processing...' : 'BUY'}
                    </button>
                    <button
                      onClick={() => handleTrade('SELL')}
                      disabled={isTrading}
                      className="bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20 active:scale-[0.98]"
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
