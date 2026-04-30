import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Activity } from 'lucide-react';

// ─── Robust Squarified Treemap Algorithm ──────────────────────────────────
// Ref: Bruls, Huizing, van Wijk, "Squarified Treemaps"

function worst(row, width) {
  if (row.length === 0) return Infinity;
  const s = row.reduce((sum, v) => sum + v, 0);
  if (s === 0 || width === 0) return Infinity;
  const rMax = Math.max(...row);
  const rMin = Math.min(...row);
  const w2 = width * width;
  const s2 = s * s;
  return Math.max((w2 * rMax) / s2, s2 / (w2 * rMin));
}

function squarify(values, x, y, width, height) {
  if (width <= 0 || height <= 0 || values.length === 0) return [];

  const total = values.reduce((s, v) => s + v.value, 0);
  if (total === 0) return [];

  // Map values to areas
  const data = values
    .map(v => ({ ...v, area: (v.value / total) * (width * height) }))
    .sort((a, b) => b.area - a.area);

  const rects = [];

  function layout(items, rx, ry, rw, rh) {
    if (items.length === 0) return;

    const side = Math.min(rw, rh);
    let row = [];
    let i = 0;

    // Build the row until the aspect ratio starts getting worse
    while (i < items.length) {
      const areas = [...row, items[i]].map(it => it.area);
      if (row.length === 0 || worst(areas, side) <= worst(row.map(it => it.area), side)) {
        row.push(items[i]);
        i++;
      } else {
        break;
      }
    }

    // Lay out the current row
    const rowArea = row.reduce((sum, it) => sum + it.area, 0);
    const rowWidth = rowArea / side;
    let offset = 0;

    for (const node of row) {
      const len = node.area / rowWidth;
      if (rw >= rh) {
        // Horizontal container, fill vertically
        rects.push({ ...node, x: rx, y: ry + offset, w: rowWidth, h: len });
      } else {
        // Vertical container, fill horizontally
        rects.push({ ...node, x: rx + offset, y: ry, w: len, h: rowWidth });
      }
      offset += len;
    }

    // Recurse on the remaining space
    if (rw >= rh) {
      layout(items.slice(row.length), rx + rowWidth, ry, rw - rowWidth, rh);
    } else {
      layout(items.slice(row.length), rx, ry + rowWidth, rw, rh - rowWidth);
    }
  }

  layout(data, x, y, width, height);
  return rects;
}

// ─── Finviz Styling ────────────────────────────────────────────────────────
function getBg(ret) {
  if (ret >= 3)   return '#00843D'; // Strong Green
  if (ret >= 1)   return '#00CC4F'; // Brighter Green
  if (ret >= 0)   return '#004C1C'; // Dark Green
  if (ret >= -1)  return '#550E0E'; // Dark Red
  if (ret >= -3)  return '#B90000'; // Mid Red
  return '#FF0000';                 // Bright Red
}

const FinvizTreemap = ({ sectors, height = 750 }) => {
  const containerRef = useRef(null);
  const [contW, setContW] = useState(0);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContW(Math.floor(entry.contentRect.width));
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const handleMouseMove = useCallback((e, stock) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      stock
    });
  }, []);

  // Compute sector groups sized by market cap
  const sectorNodes = (sectors || []).map(s => ({
    ...s,
    value: s.components?.reduce((sum, c) => sum + (c.market_cap || 0), 0) || 0
  })).filter(s => s.value > 0);

  const sectorRects = contW > 0 ? squarify(sectorNodes, 0, 0, contW, height) : [];

  return (
    <div className="relative select-none font-sans">
      <div
        ref={containerRef}
        className="relative bg-black rounded-lg overflow-hidden border-2 border-slate-900"
        style={{ width: '100%', height }}
        onMouseLeave={() => setTooltip(null)}
      >
        {sectorRects.map((sector, si) => {
          // Individual stocks within sector
          const stockNodes = (sector.components || [])
            .map(c => ({ ...c, value: c.market_cap || 0 }))
            .filter(c => c.value > 0);
          
          const stockRects = squarify(stockNodes, sector.x, sector.y, sector.w, sector.h);

          return (
            <div key={si}>
              {/* Sector Border Overlay (Finviz thick black divisions) */}
              <div style={{
                position: 'absolute', left: sector.x, top: sector.y, width: sector.w, height: sector.h,
                boxShadow: 'inset 0 0 0 2px black', zIndex: 30, pointerEvents: 'none'
              }} />

              {/* Sector Header Label */}
              {sector.h > 40 && sector.w > 60 && (
                <div 
                  title={`${sector.name} | Return: ${sector.perf > 0 ? '+' : ''}${sector.perf}% | 5D: ${sector.perf_5d > 0 ? '+' : ''}${sector.perf_5d}% | Momentum: ${sector.momentum_tag}`}
                  style={{
                    position: 'absolute', left: sector.x + 4, top: sector.y + 4, zIndex: 40,
                    background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', 
                    padding: '2px 6px', borderRadius: 4, boxShadow: 'var(--shadow-1)',
                    maxWidth: Math.max(20, sector.w - 8),
                    display: 'flex', alignItems: 'center', gap: '6px', cursor: 'default'
                  }}
                >
                   <span className="text-[10px] font-black text-[color:var(--text-primary)] uppercase tracking-tight truncate">
                    {sector.name}
                   </span>
                   <span className={`text-[10px] font-black shrink-0 ${sector.perf >= 0 ? 'text-[color:var(--color-alpha)]' : 'text-[color:var(--color-risk)]'}`}>
                     ({sector.perf >= 0 ? '+' : ''}{sector.perf}%)
                   </span>
                   <span className="text-[10px] font-medium text-[color:var(--text-secondary)] shrink-0 hidden sm:inline">
                     5D: <span className={sector.perf_5d >= 0 ? 'text-[color:var(--color-alpha)] font-bold' : 'text-[color:var(--color-risk)] font-bold'}>
                       {sector.perf_5d >= 0 ? '+' : ''}{sector.perf_5d}%
                     </span>
                   </span>
                   <span className={`shrink-0 px-1.5 py-0.5 rounded-sm text-[8px] font-black uppercase hidden lg:inline ${
                     sector.momentum_tag === 'Leading' ? 'bg-emerald-100 text-[color:var(--color-alpha)]' :
                     sector.momentum_tag === 'Weakening' ? 'bg-amber-100 text-amber-600' :
                     sector.momentum_tag === 'Improving' ? 'bg-blue-100 text-blue-600' :
                     'bg-rose-100 text-[color:var(--color-risk)]'
                   }`}>
                     {sector.momentum_tag}
                   </span>
                </div>
              )}

              {/* Stock Rectangles */}
              {stockRects.map((stock, ki) => (
                <div
                  key={ki}
                  onMouseMove={e => handleMouseMove(e, stock)}
                  className="absolute border-[0.5px] border-black transition-all hover:brightness-110 active:brightness-125"
                  style={{
                    left: stock.x, top: stock.y, width: stock.w, height: stock.h,
                    background: getBg(stock.return),
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    zIndex: 20
                  }}
                >
                  {stock.w > 28 && stock.h > 24 && (
                    <span style={{
                      fontSize: Math.min(18, Math.max(9, Math.sqrt(stock.w * stock.h) / 8.5)),
                      fontWeight: 950, color: 'white', letterSpacing: '-0.02em', lineHeight: 1
                    }}>
                      {stock.ticker}
                    </span>
                  )}
                  {stock.w > 45 && stock.h > 40 && (
                    <span style={{
                      fontSize: Math.min(13, Math.max(7, Math.sqrt(stock.w * stock.h) / 13)),
                      color: 'white', opacity: 0.9, fontWeight: 700, marginTop: 1
                    }}>
                      {stock.return > 0 ? '+' : ''}{stock.return}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          );
        })}

        {/* Improved Finviz Tooltip */}
        {tooltip && (
          <div style={{
            position: 'absolute', left: Math.min(tooltip.x + 15, contW - 190), 
            top: Math.min(tooltip.y + 15, height - 80),
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 8, padding: '10px 15px',
            zIndex: 100, pointerEvents: 'none', boxShadow: 'var(--shadow-3)',
            transition: 'left 0.1s, top 0.1s'
          }}>
            <div className="flex justify-between items-center gap-6 border-b border-[color:var(--border-subtle)] pb-1.5 mb-1.5">
              <span className="text-[color:var(--text-primary)] text-base font-black tracking-tight">{tooltip.stock.ticker}</span>
              <span className={`text-sm font-black ${tooltip.stock.return >= 0 ? 'text-[color:var(--color-alpha)]' : 'text-[color:var(--color-risk)]'}`}>
                {tooltip.stock.return > 0 ? '+' : ''}{tooltip.stock.return}%
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between text-[11px] text-[color:var(--text-secondary)] gap-4">
                <span>Market Cap</span>
                <span className="text-[color:var(--text-primary)] font-bold">${(tooltip.stock.market_cap / 1e9).toFixed(2)}B</span>
              </div>
              <div className="flex justify-between text-[11px] text-[color:var(--text-secondary)] gap-4">
                <span>Vol Z Score</span>
                <span className={`font-bold ${tooltip.stock.vol_z > 1 ? 'text-[color:var(--color-risk)]' : 'text-[color:var(--text-primary)]'}`}>
                  {tooltip.stock.vol_z > 0 ? '+' : ''}{tooltip.stock.vol_z}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Finviz Legend */}
      <div className="mt-5 flex flex-wrap justify-between items-center gap-4 px-1">
        <div className="flex items-center gap-6 text-[12px] font-black text-slate-500 uppercase tracking-tight">
          <span className="flex items-center gap-2">
            <Activity size={14} className="text-slate-400" /> 
            Size = Market Cap
          </span>
          <div className="flex gap-3 items-center">
            {[['#00843D','+3%'], ['#00CC4F','+1%'], ['#004C1C','0%'], ['#550E0E','-1%'], ['#B90000','-3%'], ['#FF0000','<-3%']].map(([bg, label]) => (
              <span key={label} className="flex items-center gap-1.5 grayscale-[0.2]">
                <span className="w-3 h-3 rounded-sm" style={{ background: bg }} />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="text-[10px] text-slate-600 font-bold italic uppercase tracking-widest opacity-60">
          Squarified Heatmap Algorithm v2.1
        </div>
      </div>
    </div>
  );
};

export default FinvizTreemap;
