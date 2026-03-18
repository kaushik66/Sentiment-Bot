import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, ComposedChart, Area, CartesianGrid, Legend, AreaChart, Cell
} from 'recharts';

const mockInsights = [
  {
    id: 1,
    type: "VolumeAnomaly",
    title: "Unusual Institutional Volume",
    description: "Trading at 2.8x its 20-day average volume.",
    data: [
      { name: "20-Day Avg", volume: 50 },
      { name: "Today", volume: 140 }
    ]
  },
  {
    id: 2,
    type: "SectorStrength",
    title: "Outperforming Tech Sector",
    description: "AAPL is showing strong relative momentum against XLK.",
    data: [
      { day: "Mon", stock: 150, sector: 148 },
      { day: "Tue", stock: 152, sector: 147 },
      { day: "Wed", stock: 155, sector: 146 },
      { day: "Thu", stock: 158, sector: 145 },
      { day: "Fri", stock: 162, sector: 144 }
    ]
  },
  {
    id: 3,
    type: "VolatilitySqueeze",
    title: "Bollinger Bands Coiling",
    description: "Price is compressing tightly. Violent breakout likely.",
    data: [
      { day: "1", price: 150, upper: 155, lower: 145 },
      { day: "2", price: 151, upper: 154, lower: 146 },
      { day: "3", price: 150.5, upper: 153, lower: 147 },
      { day: "4", price: 151, upper: 152.5, lower: 148 },
      { day: "5", price: 151.5, upper: 152, lower: 150 }
    ]
  },
  {
    id: 4,
    type: "VolumeProfile",
    title: "Volume Profile (VPVR)",
    description: "Heavy institutional accumulation detected at $145.",
    data: [
      { price: "$140", volume: 1200 }, { price: "$145", volume: 8500 },
      { price: "$150", volume: 3000 }, { price: "$155", volume: 1500 }
    ]
  },
  {
    id: 5,
    type: "MACD",
    title: "MACD Momentum Shift",
    description: "Bullish crossover. Histogram expanding.",
    data: [
      { day: "1", macd: -0.5, signal: -0.2, hist: -0.3 },
      { day: "2", macd: -0.1, signal: -0.2, hist: 0.1 },
      { day: "3", macd: 0.4, signal: -0.1, hist: 0.5 },
      { day: "4", macd: 0.8, signal: 0.1, hist: 0.7 }
    ]
  },
  {
    id: 6,
    type: "Drawdown",
    title: "Maximum Drawdown",
    description: "Currently trading at a 15% discount from 52-week highs.",
    data: [
      { month: "Jan", drop: 0 }, { month: "Feb", drop: -5 },
      { month: "Mar", drop: -15 }, { month: "Apr", drop: -12 }
    ]
  }
];

const VolumeWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <Tooltip
        cursor={{ fill: '#334155', opacity: 0.4 }}
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
      />
      <Bar dataKey="volume" fill="#82ca9d" radius={[4, 4, 0, 0]} barSize={40} />
    </BarChart>
  </ResponsiveContainer>
);

const SectorWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} domain={['dataMin - 5', 'auto']} tickLine={false} axisLine={false} />
      <Tooltip
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
      />
      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#cbd5e1', paddingTop: '10px' }} />
      <Line type="monotone" dataKey="stock" name="Stock Price" stroke="#2dd4bf" strokeWidth={3} dot={{ r: 3, fill: '#2dd4bf', stroke: '#1e293b' }} activeDot={{ r: 5 }} />
      <Line type="monotone" dataKey="sector" name="Sector Avg" stroke="#f97316" strokeWidth={2} strokeDasharray="5 5" dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

const SqueezeWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} domain={['dataMin - 2', 'dataMax + 2']} tickLine={false} axisLine={false} />
      <Tooltip
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
      />
      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#cbd5e1', paddingTop: '10px' }} />

      {/* Lower and Upper Bands */}
      <Area type="monotone" dataKey="upper" name="Upper Band" fill="#475569" stroke="none" fillOpacity={0.15} />
      <Area type="monotone" dataKey="lower" name="Lower Band" fill="#0f172a" stroke="none" fillOpacity={0.4} />

      {/* Price Line */}
      <Line type="monotone" dataKey="price" name="Price" stroke="#a855f7" strokeWidth={2} dot={{ r: 3, fill: '#a855f7', stroke: '#1e293b' }} activeDot={{ r: 5 }} />
    </ComposedChart>
  </ResponsiveContainer>
);

const MovingAverageBreakoutWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 2', 'auto']} />
      <Tooltip
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
      />
      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#cbd5e1', paddingTop: '10px' }} />
      <Line type="monotone" dataKey="price" name="Price" stroke="#10b981" strokeWidth={3} dot={{ r: 3, fill: '#10b981', stroke: '#1e293b' }} activeDot={{ r: 5 }} />
      <Line type="monotone" dataKey="sma" name="20-Day SMA" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" dot={false} />
    </ComposedChart>
  </ResponsiveContainer>
);

const VolumeProfileWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
      <XAxis type="number" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} hide />
      <YAxis dataKey="price" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <Tooltip
        cursor={{ fill: '#334155', opacity: 0.4 }}
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
      />
      <Bar dataKey="volume" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={24} />
    </BarChart>
  </ResponsiveContainer>
);

const MACDWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <Tooltip
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
      />
      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#cbd5e1', paddingTop: '10px' }} />
      <Bar dataKey="hist" name="Histogram" barSize={10} radius={[2, 2, 0, 0]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.hist > 0 ? '#22c55e' : '#ef4444'} />
        ))}
      </Bar>
      <Line type="monotone" dataKey="macd" name="MACD" stroke="#3b82f6" strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="signal" name="Signal" stroke="#f97316" strokeWidth={2} dot={false} strokeDasharray="4 4" />
    </ComposedChart>
  </ResponsiveContainer>
);

const DrawdownWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[-30, 0]} />
      <Tooltip
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
      />
      <Area type="stepAfter" dataKey="drop" name="Drawdown" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} strokeWidth={2} />
    </AreaChart>
  </ResponsiveContainer>
);

const SeasonalityWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <Tooltip
        cursor={{ fill: '#334155', opacity: 0.4 }}
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
        formatter={(value) => [`${value}%`, "Avg Return"]}
      />
      <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.avg >= 0 ? '#10b981' : '#ef4444'} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

const PeerCorrelationWidget = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
      <XAxis type="number" domain={[-1, 1]} stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis dataKey="peer" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} width={50} />
      <Tooltip
        cursor={{ fill: '#334155', opacity: 0.4 }}
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }}
        formatter={(value) => [value, "Correlation"]}
      />
      <Bar dataKey="correlation" radius={[0, 4, 4, 0]} barSize={24}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.correlation >= 0 ? '#3b82f6' : '#f97316'} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

const DynamicInsightsPanel = ({ payload }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback for legacy arrays if any are passed
  const insights = payload?.insights || (Array.isArray(payload) ? payload : []);


  // Ensure currentIndex is valid if insights array length changes
  const validIndex = insights && insights.length > 0 ? (currentIndex >= insights.length ? 0 : currentIndex) : 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? insights.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === insights.length - 1 ? 0 : prev + 1));
  };

  if (!insights || insights.length === 0) return null;

  const currentInsight = insights[validIndex];

  const renderWidget = () => {
    switch (currentInsight.type) {
      case 'VolumeAnomaly':
        return <VolumeWidget data={currentInsight.data} />;
      case 'SectorStrength':
        return <SectorWidget data={currentInsight.data} />;
      case 'VolatilitySqueeze':
        return <SqueezeWidget data={currentInsight.data} />;
      case 'MovingAverageBreakout':
        return <MovingAverageBreakoutWidget data={currentInsight.data} />;
      case 'VolumeProfile':
        return <VolumeProfileWidget data={currentInsight.data} />;
      case 'MACD':
        return <MACDWidget data={currentInsight.data} />;
      case 'Drawdown':
        return <DrawdownWidget data={currentInsight.data} />;
      case 'Seasonality':
        return <SeasonalityWidget data={currentInsight.data} />;
      case 'PeerCorrelation':
        return <PeerCorrelationWidget data={currentInsight.data} />;
      default:
        return (
          <div className="text-slate-500 text-sm flex items-center justify-center h-full font-medium">
            Unknown Insight Type
          </div>
        );
    }
  };

  return (
    <div className="w-full flex flex-col font-sans">

      {/* Header section (Fluid, no borders) */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1 pr-4">
          <div className="text-xs font-bold text-indigo-400/90 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            {currentInsight.type.replace(/([A-Z])/g, ' $1').trim()}
          </div>
          <h2 className="text-2xl font-semibold text-slate-100 leading-tight mb-2">
            {currentInsight.title}
          </h2>

          {/* Fluid English Analysis (No quotes, no blockquote) */}
          {currentInsight.translation ? (
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentInsight.translation}
            </p>
          ) : (
            <p className="text-sm text-slate-400 mb-4">
              {currentInsight.description}
            </p>
          )}
        </div>

        {/* Navigation controls */}
        <div className="flex space-x-2 shrink-0 mt-1">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-500 hover:text-slate-200 transition-all focus:outline-none"
            aria-label="Previous insight"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-500 hover:text-slate-200 transition-all focus:outline-none"
            aria-label="Next insight"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Dynamic Chart Container */}
      <div className="h-[220px] w-full relative mb-6">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-30 rounded-lg"></div>
        <div className="relative h-full w-full">
          {renderWidget()}
        </div>
      </div>

      {/* Target: Historical Receipts (Fluid) */}
      {currentInsight.receipts && (
        <div className="text-sm flex gap-3 text-slate-400 items-start mb-6">
          <div className="shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="leading-relaxed">
            <span className="font-semibold text-slate-300 mr-2">Historical Precedent:</span>
            {currentInsight.receipts}
          </div>
        </div>
      )}

      {/* Progress Indicators */}
      <div className="flex justify-center items-center space-x-2 mt-auto pt-4">
        {insights.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full h-1.5 ${validIndex === idx
              ? 'w-6 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]'
              : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            aria-label={`Go to insight ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicInsightsPanel;
