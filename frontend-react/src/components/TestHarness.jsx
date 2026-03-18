import React, { useState } from 'react';
import { Loader2, Database, AlertCircle, BarChart2, TrendingUp, Activity } from 'lucide-react';
import DynamicInsightsPanel from './DynamicInsightsPanel';

const COLORS = [
    'from-blue-500 to-cyan-500', 'from-red-500 to-orange-500',
    'from-emerald-500 to-teal-500', 'from-blue-600 to-indigo-600',
    'from-indigo-500 to-purple-500', 'from-orange-400 to-amber-600',
    'from-rose-500 to-pink-500', 'from-fuchsia-500 to-purple-600',
    'from-violet-500 to-fuchsia-500', 'from-cyan-500 to-blue-600',
    'from-teal-400 to-emerald-500', 'from-amber-500 to-orange-600'
];

const TestHarness = () => {
    const [availableTickers, setAvailableTickers] = useState([]);
    const [loadingTickers, setLoadingTickers] = useState(true);
    const [activeTicker, setActiveTicker] = useState(null);
    const [loading, setLoading] = useState(false);
    const [insights, setInsights] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTickers = async () => {
            try {
                const response = await fetch('http://localhost:5002/api/test/tickers');
                const data = await response.json();
                if (response.ok && Array.isArray(data)) {
                    // Map colors onto the objects
                    const mapped = data.map((stockObj, idx) => ({
                        symbol: stockObj.symbol,
                        name: stockObj.name,
                        color: COLORS[idx % COLORS.length]
                    }));
                    setAvailableTickers(mapped);
                }
            } catch (err) {
                console.error("Failed to fetch tickers:", err);
            } finally {
                setLoadingTickers(false);
            }
        };
        fetchTickers();
    }, []);

    const fetchInsights = async (ticker) => {
        setActiveTicker(ticker);
        setLoading(true);
        setInsights(null);
        setError(null);

        try {
            const response = await fetch(`http://localhost:5002/api/test/insights/${ticker}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to fetch insights");
            }

            setInsights(data);
        } catch (err) {
            if (err.message.toLowerCase().includes("locked")) {
                setError("Database locked");
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center py-12 px-4 font-sans selection:bg-indigo-500/30">
            <div className="w-full max-w-4xl mb-10 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <Database size={20} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
                        Stock Insight Cards
                    </h1>
                </div>

                <p className="text-slate-400 text-center mb-8 max-w-lg">
                    Select a stock below to generate real-time quantitative insights from the vault.
                </p>

                {/* Cards Grid */}
                {loadingTickers ? (
                    <div className="flex justify-center items-center h-24">
                        <Loader2 className="animate-spin text-indigo-500" size={32} />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full max-w-6xl mb-12 px-4">
                        {availableTickers.map((stock) => (
                            <button
                                key={stock.symbol}
                                onClick={() => fetchInsights(stock.symbol)}
                                disabled={loading}
                                className={`relative overflow-hidden group p-4 rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 ${activeTicker === stock.symbol
                                    ? 'bg-slate-800/80 border-indigo-500/50 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500/20'
                                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-black/50'
                                    }`}
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${stock.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                                <div className="flex justify-between items-start mb-1 pl-2">
                                    <span className="text-lg font-bold text-slate-100 tracking-wide">{stock.symbol}</span>
                                </div>
                                <span className="text-xs font-medium text-slate-400 block truncate pl-2">{stock.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="w-full flex justify-center max-w-4xl">
                {loading ? (
                    <div className="h-64 flex flex-col items-center justify-center text-slate-500 animate-pulse space-y-4">
                        <Loader2 size={32} className="animate-spin text-indigo-500" />
                        <p className="text-sm font-medium tracking-wide">Analyzing {activeTicker} patterns...</p>
                    </div>
                ) : error ? (
                    <div className="max-w-md w-full p-6 rounded-xl bg-red-500/10 border border-red-500/20 flex flex-col items-center text-center space-y-3">
                        <AlertCircle className="text-red-400" size={32} />
                        <h3 className="text-red-400 font-semibold text-lg">Engine Error</h3>
                        <p className="text-red-300/80 text-sm">{error}</p>
                    </div>
                ) : insights !== null ? (
                    insights.insights && insights.insights.length > 0 ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out w-full transition-all">
                            <DynamicInsightsPanel payload={insights} />
                        </div>
                    ) : (
                        <div className="max-w-md w-full p-8 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col items-center text-center space-y-3 shadow-xl">
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-2">
                                <BarChart2 className="text-slate-500" size={24} />
                            </div>
                            <h3 className="text-slate-300 font-medium text-lg">No anomalies detected</h3>
                            <p className="text-slate-500 text-sm">
                                The insight engine didn't find any statistically significant volume or trend breakouts for <span className="font-semibold text-slate-300">{activeTicker}</span> in the recent history.
                            </p>
                        </div>
                    )
                ) : (
                    <div className="h-64 flex flex-col items-center justify-center text-slate-600 opacity-50">
                        <TrendingUp size={48} className="mb-4 text-slate-800" strokeWidth={1} />
                        <p className="text-sm font-medium">Select a stock card above to begin analysis</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestHarness;
