import React, { useEffect, useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import {
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Clock,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Star,
  LogOut,
  Briefcase,
  PieChart,
  TrendingUp,
  TrendingDown,
  Trash2,
  LayoutGrid,
  Map
} from 'lucide-react';
import SectorHeatmap from './components/SectorHeatmap';
import StockDetailModal from './components/StockDetailModal';
import { addToWatchlist, removeFromWatchlist, getWatchlist } from './services/userDatabase';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [data, setData] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [watchlist, setWatchlist] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'heatmap'

  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Poll for data every 5 seconds
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/dashboard');
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching dashboard:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  // Effect 2: Fetch User's Watchlist (Only when user logs in)
  useEffect(() => {
    if (currentUser) {
      const fetchWatchlist = async () => {
        // call your getWatchlist(currentUser.uid) function here
        const savedList = await getWatchlist(currentUser.uid);
        setWatchlist(savedList);
      };
      fetchWatchlist();
    } else {
      setWatchlist([]); // Clear watchlist if logged out
    }
  }, [currentUser]); // Dependency: Runs whenever 'currentUser' changes

  // Effect 3: Fetch Portfolio Data
  useEffect(() => {
    if (currentUser && activeView === 'portfolio') {
      const fetchPortfolio = async () => {
        try {
          const token = await currentUser.getIdToken();
          const res = await fetch('http://localhost:5001/api/portfolio', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          setPortfolioData(data);
        } catch (err) {
          console.error("Error fetching portfolio:", err);
        }
      };
      fetchPortfolio();
      // Optional: Poll portfolio data too
      const interval = setInterval(fetchPortfolio, 10000);
      return () => clearInterval(interval);
    }
  }, [currentUser, activeView]);

  const handleDeletePosition = async (ticker) => {
    if (!currentUser) return;
    if (!window.confirm(`Are you sure you want to remove ${ticker} from your portfolio? This cannot be undone.`)) return;

    try {
      const token = await currentUser.getIdToken();
      const res = await fetch(`http://localhost:5001/api/portfolio/${ticker}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        // Refresh portfolio logic needs to be robust, re-calling fetchPortfolio
        const fetchPortfolio = async () => {
          const token = await currentUser.getIdToken();
          const res = await fetch('http://localhost:5001/api/portfolio', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          setPortfolioData(data);
        };
        fetchPortfolio();
      } else {
        alert("Failed to delete position");
      }
    } catch (err) {
      console.error("Delete failed", err);
    }
  }

  const handleToggleWatchlist = async (ticker) => {
    if (!currentUser) return;

    const isWatched = watchlist.includes(ticker);

    // Optimistic Update
    setWatchlist(prev =>
      isWatched
        ? prev.filter(t => t !== ticker)
        : [...prev, ticker]
    );

    // Sync with DB
    try {
      if (isWatched) {
        await removeFromWatchlist(currentUser.uid, ticker);
      } else {
        await addToWatchlist(currentUser.uid, ticker);
      }
    } catch (error) {
      console.error("Error updating watchlist:", error);
      // Rollback on error (optional, but good practice)
      setWatchlist(prev =>
        isWatched
          ? [...prev, ticker]
          : prev.filter(t => t !== ticker)
      );
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <Activity className="animate-spin text-blue-500" size={48} />
          <p className="text-gray-400">Connecting to Cortex...</p>
        </div>
      </div>
    );
  }

  let displayedStocks = data ? data.signals : [];
  if (activeView === 'watchlist') {
    displayedStocks = displayedStocks.filter(s => watchlist.includes(s.Ticker));
  }

  displayedStocks = displayedStocks.filter(s =>
    s.Ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.Headline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white flex overflow-hidden">

      {/* --- SIDEBAR --- */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 border-r border-gray-800 flex flex-col transition-all duration-300 ease-in-out relative`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-8 bg-gray-800 border border-gray-700 rounded-full p-1 text-gray-400 hover:text-white z-50"
        >
          {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* Logo Area */}
        <div className={`p-6 flex items-center ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
          <Activity className="text-blue-500 shrink-0" size={28} />
          {isSidebarOpen && (
            <span className="ml-3 font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              CORTEX
            </span>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Signals Feed"
            isActive={activeView === 'dashboard'}
            isOpen={isSidebarOpen}
            onClick={() => setActiveView('dashboard')}
          />
          <SidebarItem
            icon={<Star size={20} />}
            label="My Watchlist"
            isActive={activeView === 'watchlist'}
            isOpen={isSidebarOpen}
            onClick={() => setActiveView('watchlist')}
          />
          <SidebarItem
            icon={<Briefcase size={20} />}
            label="My Portfolio"
            isActive={activeView === 'portfolio'}
            isOpen={isSidebarOpen}
            onClick={() => setActiveView('portfolio')}
          />
        </nav>

        {/* Footer / Logout */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={logout}
            className={`flex items-center w-full p-3 rounded-lg hover:bg-red-900/20 text-gray-400 hover:text-red-400 transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-3 font-medium">Logout</span>}
          </button>
        </div>
      </aside>


      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">

          {/* Header */}
          <header className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-white">
                {activeView === 'dashboard' ? 'Market Signals' :
                  activeView === 'watchlist' ? 'Your Watchlist' : 'Portfolio'}
              </h1>
              <p className="text-gray-400 mt-1 flex items-center gap-2 text-sm">
                <Clock size={14} />
                Updated: {data.last_updated}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {activeView === 'dashboard' && (
                <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
                    title="Grid View"
                  >
                    <LayoutGrid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('heatmap')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'heatmap' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
                    title="Sector Heatmap"
                  >
                    <Map size={20} />
                  </button>
                </div>
              )}

              {activeView !== 'portfolio' && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              )}
            </div>
          </header>

          {/* View Content */}
          {activeView === 'portfolio' ? (
            portfolioData ? (
              <div className="space-y-8 animate-in fade-in duration-500">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative overflow-hidden">
                    <div className="text-gray-400 text-sm font-medium mb-1">Total Investment</div>
                    <div className="text-3xl font-bold text-purple-400">
                      ${portfolioData.total_investment?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <Activity size={48} className="text-purple-500" />
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative overflow-hidden">
                    <div className="text-gray-400 text-sm font-medium mb-1">Current P&L</div>
                    {(() => {
                      const pl = portfolioData.total_unrealized_pl || 0;
                      const isProfitable = pl >= 0;
                      return (
                        <div className={`text-3xl font-bold flex items-center gap-2 ${isProfitable ? 'text-green-400' : 'text-red-400'}`}>
                          {isProfitable ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                          ${Math.abs(pl).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      )
                    })()}
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <PieChart size={48} className="text-green-500" />
                    </div>
                  </div>
                </div>

                {/* Holdings Table */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-xl font-bold">Your Holdings</h2>
                  </div>

                  {portfolioData.holdings && portfolioData.holdings.length > 0 ? (
                    <table className="w-full text-left">
                      <thead className="bg-gray-800/50 text-gray-400 text-sm uppercase">
                        <tr>
                          <th className="p-4">Ticker</th>
                          <th className="p-4 text-right">Qty</th>
                          <th className="p-4 text-right">Avg Price</th>
                          <th className="p-4 text-right">Current Price</th>
                          <th className="p-4 text-right">Mkt Value</th>
                          <th className="p-4 text-right">Return</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {portfolioData.holdings.map((h) => {
                          const isProfitable = h.unrealized_pl >= 0;
                          return (
                            <tr key={h.ticker} className="hover:bg-gray-800/30 transition-colors">
                              <td className="p-4 font-bold text-white">{h.ticker}</td>
                              <td className="p-4 text-right text-gray-300">{h.quantity}</td>
                              <td className="p-4 text-right text-gray-400">${h.avg_price.toFixed(2)}</td>
                              <td className="p-4 text-right text-white">${h.current_price.toFixed(2)}</td>
                              <td className="p-4 text-right font-medium text-blue-200">${h.market_value.toLocaleString()}</td>
                              <td className={`p-4 text-right font-bold ${isProfitable ? 'text-green-400' : 'text-red-400'}`}>
                                {isProfitable ? '+' : ''}{h.return_pct.toFixed(2)}%
                                <span className="block text-xs opacity-70">
                                  ({isProfitable ? '+' : ''}${h.unrealized_pl.toFixed(2)})
                                </span>
                              </td>
                              <td className="p-4 text-right">
                                <button
                                  onClick={() => handleDeletePosition(h.ticker)}
                                  className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
                                  title="Remove from portfolio"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <div className="p-10 text-center text-gray-500">
                      You don't have any holdings yet. Go to the dashboard to trade!
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-64 text-gray-500">
                Loading Portfolio...
              </div>
            )
          ) : viewMode === 'heatmap' && activeView === 'dashboard' ? (
            <div className="animate-in fade-in duration-500">
              <SectorHeatmap data={displayedStocks} />
            </div>
          ) : (
            displayedStocks.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                {activeView === 'watchlist'
                  ? "Your watchlist is empty. Star some stocks from the Dashboard!"
                  : "No signals found."}
              </div>
            ) : (
              <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                {displayedStocks.map((stock) => (
                  <StockCard
                    key={stock.Ticker}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                    isWatched={watchlist.includes(stock.Ticker)}
                    onToggleWatchlist={(e) => {
                      e.stopPropagation(); // Prevent opening modal
                      handleToggleWatchlist(stock.Ticker);
                    }}
                  />
                ))}
              </main>
            )
          )}

          {/* Modal */}
          <StockDetailModal
            isOpen={!!selectedStock}
            onClose={() => setSelectedStock(null)}
            stock={selectedStock}
          />
        </div>
      </div>
    </div >
  );
};

// Sub-components

const SidebarItem = ({ icon, label, isActive, isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full p-3 rounded-lg transition-colors
      ${isActive ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' : 'text-gray-400 hover:bg-gray-800'}
      ${!isOpen && 'justify-center'} 
    `}
  >
    {icon}
    {isOpen && <span className="ml-3 font-medium">{label}</span>}
  </button>
);

const StockCard = ({ stock, onClick, isWatched, onToggleWatchlist }) => (
  <div
    onClick={onClick}
    className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 hover:border-blue-500/50 transition-all cursor-pointer relative overflow-hidden"
  >
    {/* Status Indicator Line */}
    <div className={`absolute top-0 left-0 w-1 h-full 
      ${stock.Signal === 'BULLISH_BREAKOUT' ? 'bg-green-500' :
        stock.Signal === 'BEARISH_DUMP' ? 'bg-red-500' : 'bg-gray-700'}`}
    />

    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-2xl font-bold">{stock.Ticker}</h2>
        <p className="text-sm text-gray-500 font-mono">${stock.Price}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider 
          ${stock.Signal === 'BULLISH_BREAKOUT' ? 'bg-green-500/20 text-green-400' :
            stock.Signal === 'BEARISH_DUMP' ? 'bg-red-500/20 text-red-400' : 'bg-gray-700 text-gray-400'}`}>
          {stock.Signal.replace('_', ' ')}
        </div>
        <button
          onClick={onToggleWatchlist}
          className={`p-1 rounded-full hover:bg-gray-700 transition-colors ${isWatched ? 'text-yellow-400' : 'text-gray-600'}`}
        >
          <Star size={16} fill={isWatched ? "currentColor" : "none"} />
        </button>
      </div>
    </div>

    <div className="space-y-4">
      {/* Signal Bars */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-400">
          <span>AI Confidence</span>
          <span>{(stock.LSTM_Confidence * 100).toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
          <div className="bg-blue-500 h-full rounded-full" style={{ width: `${stock.LSTM_Confidence * 100}%` }} />
        </div>
      </div>

      {/* Headline Teaser */}
      <div className="pt-4 border-t border-gray-800/50">
        {stock.URL && stock.URL !== '#' ? (
          <a
            href={stock.URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-blue-400 hover:text-blue-300 hover:underline line-clamp-2 italic transition-colors block"
          >
            "{stock.Headline}"
            <ArrowUpRight size={12} className="inline ml-1 mb-1" />
          </a>
        ) : (
          <p className="text-sm text-gray-300 line-clamp-2 italic opacity-80 group-hover:opacity-100 transition-opacity">
            "{stock.Headline}"
          </p>
        )}
      </div>
    </div>
  </div>
);

export default Dashboard;
