import React from 'react';
import { X, TrendingUp, TrendingDown } from 'lucide-react';

const getBlockStyle = (ret) => {
  if (ret >= 2)    return 'bg-emerald-500 text-white';
  if (ret > 0)     return 'bg-emerald-900 border border-emerald-700 text-emerald-300';
  if (ret > -2)    return 'bg-red-900 border border-red-700 text-red-300';
  return 'bg-red-600 text-white';
};

const SectorDrilldownModal = ({ sectorData, onClose }) => {
  if (!sectorData) return null;

  const isPositive = sectorData.perf > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Panel */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-slate-900/90 border border-slate-700 rounded-2xl shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 p-5 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">{sectorData.name}</h2>
            <div className="flex items-center gap-3 mt-1">
              <span className={`text-sm font-mono font-bold flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-[color:var(--color-risk)]'}`}>
                {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {isPositive ? '+' : ''}{sectorData.perf}%
              </span>
              <span className="text-xs text-slate-500">
                Vol Z: <span className={sectorData.vol_z > 1 ? 'text-amber-400' : 'text-slate-400'}>
                  {sectorData.vol_z > 0 ? '+' : ''}{sectorData.vol_z}
                </span>
              </span>
              <span className="text-xs text-slate-500">{sectorData.components?.length} stocks</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Legend */}
        <div className="px-5 pt-4 pb-2 flex items-center gap-4 text-[10px] font-medium text-slate-400 flex-wrap">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" /> &gt;+2%</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-900 border border-emerald-700 inline-block" /> 0 to +2%</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-900 border border-red-700 inline-block" /> 0 to -2%</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-600 inline-block" /> &lt;-2%</span>
        </div>

        {/* Heatmap Grid */}
        <div className="p-5 pt-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {sectorData.components?.map((stock, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-3 flex flex-col justify-between aspect-square cursor-default transition-opacity hover:opacity-90 ${getBlockStyle(stock.return)}`}
            >
              <span className="text-xs font-bold tracking-wide leading-tight truncate">{stock.ticker}</span>
              <div>
                <span className="text-sm font-mono font-bold leading-none">
                  {stock.return > 0 ? '+' : ''}{stock.return}%
                </span>
                {stock.vol_z !== undefined && (
                  <div className="text-[9px] opacity-60 mt-0.5 font-mono">
                    z:{stock.vol_z > 0 ? '+' : ''}{stock.vol_z}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorDrilldownModal;
