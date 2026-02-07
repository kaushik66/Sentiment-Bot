import React, { useMemo } from 'react';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';

const CustomizedContent = (props) => {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'rgba(255,255,255,0)',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {depth === 1 ? (
                <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                    {name}
                </text>
            ) : null}
            {depth === 1 ? (
                <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                    {index + 1}
                </text>
            ) : null}
        </g>
    );
};

const SectorHeatmap = ({ data }) => {

    const treeData = useMemo(() => {
        if (!data || data.length === 0) return [];

        // Group by Sector
        const sectors = {};

        data.forEach(item => {
            const sector = item.Sector || 'Unclassified';
            if (!sectors[sector]) {
                sectors[sector] = { name: sector, children: [] };
            }

            // Determine Color state
            let color = '#374151'; // Default gray
            if (item.Signal === 'BULLISH_BREAKOUT') color = '#22c55e'; // Green
            else if (item.Signal === 'BEARISH_DUMP') color = '#ef4444'; // Red
            else if (item.Signal === 'VOLATILITY_WATCH') color = '#f97316'; // Orange
            else if (item.Signal === 'DIVERGENCE_WATCH') color = '#a855f7'; // Purple

            sectors[sector].children.push({
                name: item.Ticker,
                size: Math.abs(item.LSTM_Confidence) * 100, // Size by confidence
                ticker: item.Ticker,
                signal: item.Signal,
                price: item.Price,
                sentiment: item.News_Sentiment,
                fill: color // Recharts Treemap reads 'fill' from data
            });
        });

        // Convert to array
        return Object.values(sectors);
    }, [data]);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const d = payload[0].payload;
            return (
                <div className="bg-gray-900 border border-gray-700 p-3 rounded shadow-xl text-white">
                    <p className="font-bold">{d.ticker}</p>
                    <p className="text-sm">Price: ${d.price}</p>
                    <p className="text-sm">Signal: <span style={{ color: d.fill }}>{d.signal}</span></p>
                    <p className="text-sm">Sentiment: {d.sentiment}</p>
                </div>
            );
        }
        return null;
    };

    if (!treeData.length) return <div className="text-center text-gray-500 py-10">No data for heatmap</div>;

    return (
        <div className="h-[500px] w-full bg-gray-900 border border-gray-800 rounded-xl p-4">
            <h3 className="text-lg font-bold text-white mb-4">Market Heatmap</h3>
            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    width={400}
                    height={200}
                    data={treeData}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#1f2937" // Dark border
                    content={({ root, depth, x, y, width, height, index, payload, colors, rank, name }) => {
                        // Custom Content to render rectangles with our color
                        return (
                            <g>
                                <rect
                                    x={x}
                                    y={y}
                                    width={width}
                                    height={height}
                                    style={{
                                        fill: (payload && payload.fill) ? payload.fill : colors[Math.floor((index / 6) % colors.length)],
                                        stroke: '#111827',
                                        strokeWidth: 2
                                    }}
                                />
                                {width > 30 && height > 20 && (
                                    <text
                                        x={x + width / 2}
                                        y={y + height / 2}
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fill="#fff"
                                        fontWeight="bold"
                                        fontSize={Math.min(width / 3, 16)}
                                    >
                                        {(payload && payload.name) ? payload.name : name}
                                    </text>
                                )}
                            </g>
                        );
                    }}
                >
                    <Tooltip content={<CustomTooltip />} />
                </Treemap>
            </ResponsiveContainer>
        </div>
    );
};

export default SectorHeatmap;
