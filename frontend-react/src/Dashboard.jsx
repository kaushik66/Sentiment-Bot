import React, { useEffect, useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import {
  ArrowUpRight, ArrowDownRight, Activity, Clock, ChevronLeft, ChevronRight,
  LayoutDashboard, Star, LogOut, Briefcase, PieChart, TrendingUp, TrendingDown,
  Trash2, LayoutGrid, Map, Edit2, Plus, Brain, Filter, ChevronUp, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import SectorHeatmap from './components/SectorHeatmap';
import StockDetailModal from './components/StockDetailModal';
import MarketTopography from './components/MarketTopography';
import RecommendationsDashboard from './components/RecommendationsDashboard';
import QuantScreener from './components/QuantScreener';
import { addToWatchlist, removeFromWatchlist, getWatchlist } from './services/userDatabase';

const OdometerTotal = ({ value, prefix = "" }) => {
  return <span>{prefix}{value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>;
};

const GlassCard = ({ children, className }) => (
  <div className={`bg-[color:var(--color-panel)] border border-[color:var(--color-border-glass)] rounded-xl backdrop-blur-md ${className}`}>
    {children}
  </div>
);

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [data, setData] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [watchlist, setWatchlist] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'heatmap' | 'map'

  const [portfolioData, setPortfolioData] = useState(null);
  const [simulations, setSimulations] = useState([]);
  const [activeSimId, setActiveSimId] = useState(null);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  
  const [isNewSimModalOpen, setIsNewSimModalOpen] = useState(false);
  const [newSimName, setNewSimName] = useState('');
  
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [renameValue, setRenameValue] = useState('');
  const [renamingSimId, setRenamingSimId] = useState(null);

  useEffect(() => {
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

  useEffect(() => {
    if (currentUser) {
      const fetchWatchlist = async () => {
        const savedList = await getWatchlist(currentUser.uid);
        setWatchlist(savedList);
      };
      fetchWatchlist();
    } else {
      setWatchlist([]);
    }
  }, [currentUser]);

  const fetchSimulations = async () => {
    if (!currentUser) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch('http://localhost:5001/api/simulations', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setSimulations(data.simulations || []);
      if (data.simulations && data.simulations.length > 0 && !activeSimId) {
        setActiveSimId(data.simulations[0].id);
      }
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSimulations();
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && (activeView === 'portfolio' || activeView === 'recommendations')) {
      const fetchPortfolio = async () => {
        try {
          const token = await currentUser.getIdToken();
          const url = activeSimId 
            ? `http://localhost:5001/api/portfolio?simulationId=${activeSimId}`
            : `http://localhost:5001/api/portfolio`;
          const res = await fetch(url, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          setPortfolioData(data);
        } catch (err) {
          console.error("Error fetching portfolio:", err);
        }
      };
      fetchPortfolio();
      const interval = setInterval(fetchPortfolio, 10000);
      return () => clearInterval(interval);
    }
  }, [currentUser, activeView, activeSimId]);

  const handleCreateSimulation = async () => {
    if (!newSimName.trim() || !currentUser) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch('http://localhost:5001/api/simulations', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newSimName })
      });
      const data = await res.json();
      if (res.ok) {
        await fetchSimulations();
        setActiveSimId(data.simulationId);
        setIsNewSimModalOpen(false);
        setNewSimName('');
      }
    } catch(err) {
      console.error(err);
    }
  };

  const handleRenameSimulation = async () => {
    if (!renameValue.trim() || !currentUser || !renamingSimId) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch(`http://localhost:5001/api/simulations/${renamingSimId}`, {
        method: 'PATCH',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: renameValue })
      });
      if (res.ok) {
        await fetchSimulations();
        setIsRenameModalOpen(false);
        setRenameValue('');
        setRenamingSimId(null);
      }
    } catch(err) {
      console.error(err);
    }
  };

  const handleDeleteSimulation = async (e, id) => {
    e.stopPropagation();
    if (!currentUser) return;
    if (!window.confirm("Are you sure you want to delete this portfolio simulation?")) return;
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch(`http://localhost:5001/api/simulations/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        await fetchSimulations();
        if (activeSimId === id) {
          setActiveSimId(null);
        }
      }
    } catch(err) {
      console.error(err);
    }
  };

  const handleDeletePosition = async (ticker) => {
    if (!currentUser) return;
    if (!window.confirm(`Are you sure you want to remove ${ticker} from your portfolio? This cannot be undone.`)) return;

    try {
      const token = await currentUser.getIdToken();
      const url = activeSimId 
            ? `http://localhost:5001/api/portfolio/${ticker}?simulationId=${activeSimId}`
            : `http://localhost:5001/api/portfolio/${ticker}`;
      const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        const fetchPortfolio = async () => {
          const res = await fetch(activeSimId ? `http://localhost:5001/api/portfolio?simulationId=${activeSimId}` : 'http://localhost:5001/api/portfolio', {
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
  };

  const handleToggleWatchlist = async (ticker) => {
    if (!currentUser) return;
    const isWatched = watchlist.includes(ticker);
    setWatchlist(prev => isWatched ? prev.filter(t => t !== ticker) : [...prev, ticker]);
    try {
      if (isWatched) {
        await removeFromWatchlist(currentUser.uid, ticker);
      } else {
        await addToWatchlist(currentUser.uid, ticker);
      }
    } catch (error) {
      console.error("Error updating watchlist:", error);
      setWatchlist(prev => isWatched ? [...prev, ticker] : prev.filter(t => t !== ticker));
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg)] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <Activity className="animate-spin text-[color:var(--color-action)]" size={48} />
          <p className="text-[color:var(--color-secondary)]">Connecting to Cortex...</p>
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

  const renderSimulationWorkspaceHeader = () => (
    <div className="flex flex-col gap-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-2">
        <div className="relative z-40">
          <div className="text-[color:var(--color-action)] text-[10px] uppercase font-mono tracking-[0.3em] font-bold mb-2 opacity-70">Active Portfolio Selection</div>
          
          <div className="relative">
            <button 
              onClick={() => setIsSelectorOpen(!isSelectorOpen)}
              className="flex items-center gap-4 bg-[color:var(--color-panel)] hover:bg-[color:var(--color-panel-hover)] border border-white/10 rounded-xl px-5 py-4 transition-all group min-w-[300px] shadow-2xl"
            >
              <div className="bg-[color:var(--color-action)]/20 p-2 rounded-lg text-[color:var(--color-action)]">
                <Briefcase size={20} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-black text-xl tracking-tight uppercase italic truncate max-w-[200px]">
                  {portfolioData?.name || 'Loading...'}
                </div>
                <div className="text-[color:var(--color-secondary)] text-[10px] font-mono uppercase tracking-widest">
                  ID: {activeSimId?.slice(-6).toUpperCase() || '---'}
                </div>
              </div>
              {isSelectorOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500 group-hover:text-white transition-colors" />}
            </button>

            <AnimatePresence>
              {isSelectorOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-0 right-0 top-full mt-2 z-50 bg-[color:var(--color-panel)] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
                >
                  <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
                    {(() => {
                      let displayList = [...simulations];
                      if (activeSimId && !displayList.find(s => s.id === activeSimId)) {
                        displayList.push({
                          id: activeSimId,
                          name: portfolioData?.name || 'Active Workspace',
                          cash: portfolioData?.cash_balance || 0
                        });
                      }
                      
                      return displayList.map(sim => (
                        <div key={sim.id} className="relative group">
                          <div
                            onClick={() => {
                              setActiveSimId(sim.id);
                              setIsSelectorOpen(false);
                            }}
                            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${activeSimId === sim.id ? 'bg-[color:var(--color-action)]/10 text-[color:var(--color-action)]' : 'hover:bg-white/5 text-[color:var(--color-secondary)] hover:text-white text-left'}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${activeSimId === sim.id ? 'bg-[color:var(--color-action)] shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'bg-gray-700'}`} />
                              <span className="font-bold uppercase tracking-tight italic text-sm">{sim.name}</span>
                            </div>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={(e) => { e.stopPropagation(); setRenamingSimId(sim.id); setRenameValue(sim.name); setIsRenameModalOpen(true); }}
                                className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-all"
                              >
                                <Edit2 size={14} />
                              </button>
                              {simulations.length > 1 && (
                                <button 
                                  onClick={(e) => handleDeleteSimulation(e, sim.id)}
                                  className="p-1.5 hover:bg-red-500/20 rounded-md text-gray-400 hover:text-red-500 transition-all"
                                >
                                  <Trash2 size={14} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                  
                  <div className="p-2 border-t border-white/5 bg-black/20">
                    <button 
                      onClick={() => { setIsSelectorOpen(false); setIsNewSimModalOpen(true); }}
                      className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-white/10 text-[color:var(--color-secondary)] hover:text-[color:var(--color-action)] hover:border-[color:var(--color-action)] transition-all text-xs font-mono uppercase"
                    >
                      <Plus size={14} /> New Simulation
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 bg-[color:var(--color-panel)] px-4 py-2 rounded-lg border border-[color:var(--color-border-glass)] text-[color:var(--color-secondary)] font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Portfolio Sync: Active
          </div>
        </div>
      </div>
      
      <div className="p-2 border-t border-white/5 bg-black/20 text-[10px] font-mono text-gray-500 rounded-b-xl flex flex-wrap gap-4">
        <span>API_SOURCE: http://localhost:5001</span>
        <span>SIMS_COUNT: {simulations.length}</span>
        <span>ACTIVE_ID: {activeSimId}</span>
        <span className="text-[color:var(--color-action)]">USER_UID: {currentUser?.uid}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-white flex overflow-hidden font-sans">
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[color:var(--color-panel)] border-r border-[color:var(--color-border-glass)] flex flex-col transition-all duration-300 ease-in-out relative z-30`}>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-8 bg-[color:var(--color-panel-hover)] border border-[color:var(--color-border-glass)] rounded-full p-1 text-[color:var(--color-secondary)] hover:text-white z-50"
        >
          {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <div className={`p-6 flex items-center ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
          <Activity className="text-[color:var(--color-action)] shrink-0" size={28} />
          {isSidebarOpen && (
            <span className="ml-3 font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              CORTEX
            </span>
          )}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Signals Feed" isActive={activeView === 'dashboard'} isOpen={isSidebarOpen} onClick={() => setActiveView('dashboard')} />
          <SidebarItem icon={<Star size={20} />} label="My Watchlist" isActive={activeView === 'watchlist'} isOpen={isSidebarOpen} onClick={() => setActiveView('watchlist')} />
          <SidebarItem icon={<Briefcase size={20} />} label="My Portfolio" isActive={activeView === 'portfolio'} isOpen={isSidebarOpen} onClick={() => setActiveView('portfolio')} />
          <SidebarItem icon={<Filter size={20} />} label="Quant Screener" isActive={activeView === 'screener'} isOpen={isSidebarOpen} onClick={() => setActiveView('screener')} />
          <SidebarItem icon={<Brain size={20} />} label="Recommendations" isActive={activeView === 'recommendations'} isOpen={isSidebarOpen} onClick={() => setActiveView('recommendations')} />
        </nav>

        <div className="p-4 border-t border-[color:var(--color-border-glass)]">
          <button onClick={logout} className={`flex items-center w-full p-3 rounded-lg hover:bg-[color:var(--color-risk)]/20 text-[color:var(--color-secondary)] hover:text-[color:var(--color-risk)] transition-colors ${!isSidebarOpen && 'justify-center'}`}>
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-3 font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 h-screen overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          <header className="mb-8 flex justify-between items-end pb-6 border-b border-white/5">
            <div>
              <h1 className="text-3xl font-bold text-white">
                {activeView === 'dashboard' ? 'Market Signals' :
                  activeView === 'watchlist' ? 'Your Watchlist' : 
                  activeView === 'screener' ? 'Quant Screener' : 
                  activeView === 'recommendations' ? 'AI Recommendations' : 'Portfolio'}
              </h1>
              <p className="text-[color:var(--color-secondary)] mt-1 flex items-center gap-2 text-sm">
                <Clock size={14} /> Updated: {data.last_updated}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {activeView === 'dashboard' && (
                <div className="flex bg-[color:var(--color-panel)] rounded-lg p-1 border border-[color:var(--color-border-glass)]">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-[color:var(--color-panel-hover)] text-white' : 'text-gray-400 hover:text-white'}`} title="Grid View"><LayoutGrid size={20} /></button>
                  <button onClick={() => setViewMode('heatmap')} className={`p-2 rounded-md transition-colors ${viewMode === 'heatmap' ? 'bg-[color:var(--color-panel-hover)] text-white' : 'text-gray-400 hover:text-white'}`} title="Sector Heatmap"><Map size={20} /></button>
                  <button onClick={() => setViewMode('map')} className={`p-2 rounded-md transition-colors ${viewMode === 'map' ? 'bg-[color:var(--color-panel-hover)] text-white' : 'text-gray-400 hover:text-white'}`} title="Market Topography"><Map size={20} /></button>
                </div>
              )}
              {activeView !== 'portfolio' && activeView !== 'recommendations' && activeView !== 'screener' && (
                <input type="text" placeholder="Search..." className="bg-[color:var(--color-panel)] border border-[color:var(--color-border-glass)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-action)] w-64" onChange={(e) => setSearchTerm(e.target.value)} />
              )}
            </div>
          </header>

          {activeView === 'screener' ? (
            <QuantScreener />
          ) : activeView === 'recommendations' ? (
            <div className="flex flex-col gap-6 h-[calc(100vh-140px)]">
              {renderSimulationWorkspaceHeader()}
              <div className="flex-1 overflow-hidden">
                <RecommendationsDashboard activeSimulationId={activeSimId} user={currentUser} />
              </div>
            </div>
          ) : activeView === 'portfolio' ? (
            <div className="flex flex-col gap-8">
              {renderSimulationWorkspaceHeader()}
              
              {portfolioData ? (
                <div className="space-y-8 animate-in fade-in duration-500 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <GlassCard className="p-6 relative overflow-hidden group">
                      <div className="text-[color:var(--color-secondary)] text-xs uppercase tracking-wider font-semibold mb-1">Total Investment</div>
                      <div className="text-3xl font-bold font-mono text-white">
                        <OdometerTotal prefix="$" value={portfolioData.total_investment} />
                      </div>
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Activity size={48} className="text-[color:var(--color-action)]" />
                      </div>
                    </GlassCard>
                    <GlassCard className="p-6 relative overflow-hidden group">
                      <div className="text-[color:var(--color-secondary)] text-xs uppercase tracking-wider font-semibold mb-1">Current P&L</div>
                      {(() => {
                        const pl = portfolioData.total_unrealized_pl || 0;
                        const isProfitable = pl >= 0;
                        return (
                          <div className={`text-3xl font-bold font-mono flex items-center gap-2 ${isProfitable ? 'text-[color:var(--color-alpha)]' : 'text-[color:var(--color-risk)]'}`}>
                            {isProfitable ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                            <OdometerTotal prefix={isProfitable ? "$" : "-$"} value={Math.abs(pl)} />
                          </div>
                        )
                      })()}
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <PieChart size={48} className={portfolioData.total_unrealized_pl >= 0 ? "text-[color:var(--color-alpha)]" : "text-[color:var(--color-risk)]"} />
                      </div>
                    </GlassCard>
                  </div>

                  <GlassCard className="overflow-hidden">
                    <div className="p-6 border-b border-white/5">
                      <h2 className="text-xl font-bold">Your Holdings</h2>
                    </div>
                    {portfolioData.holdings && portfolioData.holdings.length > 0 ? (
                      <table className="w-full text-left">
                        <thead className="bg-white/5 text-[color:var(--color-secondary)] text-xs uppercase tracking-widest">
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
                        <tbody className="divide-y divide-white/5">
                          {portfolioData.holdings.map((h) => {
                            const isProfitable = h.unrealized_pl >= 0;
                            return (
                              <tr key={h.ticker} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4 font-bold text-white tracking-wider">{h.ticker}</td>
                                <td className="p-4 text-right text-gray-300 font-mono">{h.quantity}</td>
                                <td className="p-4 text-right text-gray-400 font-mono">${h.avg_price.toFixed(2)}</td>
                                <td className="p-4 text-right text-white font-mono">${h.current_price.toFixed(2)}</td>
                                <td className="p-4 text-right font-medium text-[color:var(--color-action)] font-mono">${h.market_value.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                                <td className={`p-4 text-right font-bold font-mono ${isProfitable ? 'text-[color:var(--color-alpha)]' : 'text-[color:var(--color-risk)]'}`}>
                                  {isProfitable ? '+' : ''}{h.return_pct.toFixed(2)}%
                                  <span className="block text-[10px] opacity-70">
                                    ({isProfitable ? '+' : ''}${h.unrealized_pl.toFixed(2)})
                                  </span>
                                </td>
                                <td className="p-4 text-right">
                                  <button onClick={() => handleDeletePosition(h.ticker)} className="p-2 opacity-0 group-hover:opacity-100 hover:bg-[color:var(--color-risk)]/20 text-[color:var(--color-risk)] rounded-lg transition-all">
                                    <Trash2 size={16} />
                                  </button>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <div className="p-10 text-center text-[color:var(--color-secondary)] uppercase text-xs font-mono tracking-widest">
                        Empty Portfolio Workspace
                      </div>
                    )}
                  </GlassCard>
                </div>
              ) : (
                <div className="flex justify-center items-center h-64 text-[color:var(--color-secondary)]">
                  <Activity className="animate-spin text-[color:var(--color-action)] mr-3" /> Syncing Exchange Data...
                </div>
              )}
            </div>
          ) : viewMode === 'heatmap' && activeView === 'dashboard' ? (
            <div className="animate-in fade-in duration-500"><SectorHeatmap data={displayedStocks} /></div>
          ) : viewMode === 'map' && activeView === 'dashboard' ? (
            <div className="animate-in fade-in duration-500"><MarketTopography data={displayedStocks} /></div>
          ) : (
            displayedStocks.length === 0 ? (
              <div className="text-center py-20 text-[color:var(--color-secondary)]">No signals found.</div>
            ) : (
              <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                {displayedStocks.map((stock) => (
                  <StockCard
                    key={stock.Ticker}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                    isWatched={watchlist.includes(stock.Ticker)}
                    onToggleWatchlist={(e) => { e.stopPropagation(); handleToggleWatchlist(stock.Ticker); }}
                  />
                ))}
              </main>
            )
          )}

          <StockDetailModal isOpen={!!selectedStock} onClose={() => setSelectedStock(null)} stock={selectedStock} />
        </div>
      </div>
      
      {/* New Simulation Modal */}
      <AnimatePresence>
        {isNewSimModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-[color:var(--color-panel)] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Create New Simulation Workspace</h3>
              <input type="text" value={newSimName} onChange={e => setNewSimName(e.target.value)} placeholder="e.g. Value Investing 2024" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-[color:var(--color-action)] transition-colors" />
              <div className="flex justify-end gap-3">
                <button onClick={() => setIsNewSimModalOpen(false)} className="px-4 py-2 rounded-lg text-gray-400 hover:text-white">Cancel</button>
                <button onClick={handleCreateSimulation} className="px-6 py-2 bg-[color:var(--color-action)] text-white font-bold rounded-lg hover:brightness-110">Create</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Rename Simulation Modal */}
      <AnimatePresence>
        {isRenameModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-[color:var(--color-panel)] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Rename Workspace</h3>
              <input type="text" value={renameValue} onChange={e => setRenameValue(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-[color:var(--color-action)] transition-colors" />
              <div className="flex justify-end gap-3">
                <button onClick={() => setIsRenameModalOpen(false)} className="px-4 py-2 rounded-lg text-gray-400 hover:text-white">Cancel</button>
                <button onClick={handleRenameSimulation} className="px-6 py-2 bg-[color:var(--color-action)] text-white font-bold rounded-lg hover:brightness-110">Save</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

const SidebarItem = ({ icon, label, isActive, isOpen, onClick }) => (
  <button onClick={onClick} className={`flex items-center w-full p-3 rounded-xl transition-colors ${isActive ? 'bg-[color:var(--color-action)]/10 text-[color:var(--color-action)] border border-[color:var(--color-action)]/20' : 'text-[color:var(--color-secondary)] hover:text-white hover:bg-[color:var(--color-panel-hover)]'} ${!isOpen && 'justify-center'}`}>
    {icon}
    {isOpen && <span className="ml-3 font-medium tracking-wide">{label}</span>}
  </button>
);

const StockCard = ({ stock, onClick, isWatched, onToggleWatchlist }) => (
  <GlassCard className="p-6 hover:border-[color:var(--color-action)]/50 transition-all cursor-pointer relative overflow-hidden group">
    <div className={`absolute top-0 left-0 w-1 h-full ${stock.Signal === 'BULLISH_BREAKOUT' ? 'bg-[color:var(--color-alpha)]' : stock.Signal === 'BEARISH_DUMP' ? 'bg-[color:var(--color-risk)]' : 'bg-gray-700'}`} />
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-2xl font-black tracking-tight">{stock.Ticker}</h2>
        <p className="text-sm text-[color:var(--color-secondary)] font-mono">${stock.Price}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${stock.Signal === 'BULLISH_BREAKOUT' ? 'bg-[color:var(--color-alpha)]/20 text-[color:var(--color-alpha)]' : stock.Signal === 'BEARISH_DUMP' ? 'bg-[color:var(--color-risk)]/20 text-[color:var(--color-risk)]' : 'bg-gray-700/50 text-gray-400'}`}>
          {stock.Signal.replace('_', ' ')}
        </div>
        <button onClick={onToggleWatchlist} className={`p-1 rounded-full hover:bg-white/10 transition-colors ${isWatched ? 'text-yellow-400' : 'text-gray-600'}`}>
          <Star size={16} fill={isWatched ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-[color:var(--color-secondary)] uppercase tracking-wider font-semibold">
          <span>AI Confidence</span>
          <span>{(stock.LSTM_Confidence * 100).toFixed(0)}%</span>
        </div>
        <div className="w-full bg-black/30 rounded-full h-1.5 overflow-hidden">
          <div className="bg-[color:var(--color-action)] h-full rounded-full" style={{ width: `${stock.LSTM_Confidence * 100}%` }} />
        </div>
      </div>
      <div className="pt-4 border-t border-white/5">
        {stock.URL && stock.URL !== '#' ? (
          <a href={stock.URL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-[color:var(--color-action)] hover:text-blue-300 hover:underline line-clamp-2 italic transition-colors block">
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
  </GlassCard>
);

export default Dashboard;
