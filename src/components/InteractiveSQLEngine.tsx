import React, { useState } from 'react';
import { Play, Database, CheckCircle, Terminal, RefreshCw, BarChart2 } from 'lucide-react';

interface QueryPreset {
  id: string;
  title: string;
  sql: string;
  results: { [key: string]: any }[];
  summary: string;
}

const PRESETS: QueryPreset[] = [
  {
    id: 'anomaly-zscore',
    title: '1. Z-Score Volume Anomaly Detection',
    summary: 'Identifies spikes/drops in daily event volume exceeding 2.5 standard deviations.',
    sql: `WITH daily_counts AS (
  SELECT DATE(created_at) AS event_date, COUNT(1) AS total_events
  FROM fact_events
  WHERE created_at >= CURRENT_DATE - INTERVAL '14 days'
  GROUP BY 1
),
stats AS (
  SELECT AVG(total_events) AS avg_vol, STDDEV(total_events) AS stddev_vol FROM daily_counts
)
SELECT 
  d.event_date,
  d.total_events,
  ROUND(ABS(d.total_events - s.avg_vol) / s.stddev_vol, 2) AS z_score,
  CASE WHEN ABS(d.total_events - s.avg_vol) / s.stddev_vol > 2.5 THEN 'ANOMALY DETECTED' ELSE 'NORMAL' END AS status
FROM daily_counts d, stats s
ORDER BY d.event_date DESC;`,
    results: [
      { event_date: '2026-08-05', total_events: 1420500, z_score: 0.42, status: 'NORMAL' },
      { event_date: '2026-08-04', total_events: 1380200, z_score: 0.15, status: 'NORMAL' },
      { event_date: '2026-08-03', total_events: 3105000, z_score: 3.12, status: 'ANOMALY DETECTED' },
      { event_date: '2026-08-02', total_events: 1410000, z_score: 0.38, status: 'NORMAL' },
      { event_date: '2026-08-01', total_events: 1395000, z_score: 0.22, status: 'NORMAL' }
    ]
  },
  {
    id: 'cohort-retention',
    title: '2. Monthly Customer Cohort Retention Rate',
    summary: 'Calculates month-over-month customer retention percentages using Window Functions.',
    sql: `SELECT 
  cohort_month,
  month_number,
  active_users,
  ROUND((active_users::decimal / cohort_initial) * 100, 1) || '%' AS retention_pct
FROM fact_cohort_retention
ORDER BY cohort_month DESC, month_number ASC
LIMIT 6;`,
    results: [
      { cohort_month: '2026-05-01', month_number: 0, active_users: 14500, retention_pct: '100.0%' },
      { cohort_month: '2026-05-01', month_number: 1, active_users: 11200, retention_pct: '77.2%' },
      { cohort_month: '2026-05-01', month_number: 2, active_users: 9800, retention_pct: '67.5%' },
      { cohort_month: '2026-05-01', month_number: 3, active_users: 9100, retention_pct: '62.7%' }
    ]
  },
  {
    id: 'top-revenue-marts',
    title: '3. Top Performing Product Categories by Net Margin',
    summary: 'Aggregates gold data mart tables to rank profit margins across cloud regions.',
    sql: `SELECT 
  p.category_name,
  SUM(f.order_amount) AS gross_revenue,
  SUM(f.margin_amount) AS net_profit,
  ROUND((SUM(f.margin_amount) / SUM(f.order_amount)) * 100, 2) AS margin_pct
FROM gold_marts.fact_sales f
JOIN gold_marts.dim_products p ON f.product_id = p.product_id
GROUP BY 1
ORDER BY net_profit DESC;`,
    results: [
      { category_name: 'Cloud Infrastructure Services', gross_revenue: '$850,200', net_profit: '$382,590', margin_pct: '45.00%' },
      { category_name: 'Enterprise Analytics Licenses', gross_revenue: '$620,000', net_profit: '$341,000', margin_pct: '55.00%' },
      { category_name: 'Automated Pipeline Connectors', gross_revenue: '$410,500', net_profit: '$184,725', margin_pct: '45.00%' }
    ]
  }
];

export const InteractiveSQLEngine: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<QueryPreset>(PRESETS[0]);
  const [activeSql, setActiveSql] = useState<string>(PRESETS[0].sql);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executedResults, setExecutedResults] = useState<any[]>(PRESETS[0].results);
  const [executionTime, setExecutionTime] = useState<string>('24 ms');

  const handleSelectPreset = (preset: QueryPreset) => {
    setSelectedPreset(preset);
    setActiveSql(preset.sql);
    setExecutedResults(preset.results);
    setExecutionTime(`${Math.floor(Math.random() * 25 + 12)} ms`);
  };

  const handleRunQuery = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setExecutedResults(selectedPreset.results);
      setExecutionTime(`${Math.floor(Math.random() * 20 + 10)} ms`);
    }, 400);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-xl font-mono text-xs">
      {/* Top Header Controls */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 font-sans">
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <Database className="w-4 h-4 text-[#4A7C9D]" />
          <span>Interactive SQL Query Runner</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
            CONNECTED: Snowflake Gold Warehouse
          </span>
        </div>

        <button
          onClick={handleRunQuery}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#4A7C9D] hover:bg-[#3B6982] text-white font-medium text-xs transition-colors cursor-pointer active:scale-95 disabled:opacity-50"
        >
          {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          <span>{isRunning ? 'Running Query...' : 'Execute SQL'}</span>
        </button>
      </div>

      {/* Preset Selector */}
      <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center gap-2 overflow-x-auto font-sans">
        <span className="text-[11px] text-slate-400 whitespace-nowrap">Presets:</span>
        {PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => handleSelectPreset(p)}
            className={`px-3 py-1 rounded-md text-xs whitespace-nowrap transition-all cursor-pointer ${
              selectedPreset.id === p.id
                ? 'bg-[#4A7C9D]/20 text-[#60A5FA] border border-[#4A7C9D]/40 font-medium'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* SQL Editor Area */}
      <div className="p-4 bg-slate-950/60 border-b border-slate-800 relative">
        <div className="text-[11px] text-slate-500 mb-2 font-sans flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-slate-400" />
          <span>SQL Query Console:</span>
          <span className="text-slate-400 italic font-sans">{selectedPreset.summary}</span>
        </div>
        <textarea
          value={activeSql}
          onChange={(e) => setActiveSql(e.target.value)}
          rows={6}
          className="w-full bg-slate-900 text-emerald-300 p-3 rounded-lg border border-slate-800 font-mono text-xs focus:outline-hidden focus:border-[#4A7C9D] resize-none leading-relaxed"
        />
      </div>

      {/* Query Results Table */}
      <div className="p-4 bg-slate-900">
        <div className="flex items-center justify-between mb-3 font-sans">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-slate-300 font-medium">Query Executed Successfully</span>
            <span className="text-[11px] text-slate-500">({executedResults.length} rows returned in {executionTime})</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-800">
          <table className="w-full text-left font-mono">
            <thead className="bg-slate-950 text-slate-400 text-[11px] border-b border-slate-800">
              <tr>
                {executedResults.length > 0 &&
                  Object.keys(executedResults[0]).map((key) => (
                    <th key={key} className="px-3.5 py-2.5 font-semibold capitalize">
                      {key.replace('_', ' ')}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {executedResults.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  {Object.values(row).map((val: any, i) => (
                    <td key={i} className="px-3.5 py-2 whitespace-nowrap">
                      {val === 'ANOMALY DETECTED' || val === 'CRITICAL' ? (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                          {val}
                        </span>
                      ) : val === 'NORMAL' ? (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-medium">
                          {val}
                        </span>
                      ) : (
                        String(val)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
