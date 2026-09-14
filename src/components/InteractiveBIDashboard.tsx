import React, { useState } from 'react';
import { DollarSign, Users, TrendingUp, Filter, Calendar, Layers, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const InteractiveBIDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'30d' | '90d' | '12m'>('90d');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const statsMap = {
    '30d': { mrr: '$184,200', growth: '+5.4%', activeUsers: '42,850', churn: '1.2%', ltv: '$4,120' },
    '90d': { mrr: '$512,900', growth: '+12.8%', activeUsers: '118,400', churn: '2.8%', ltv: '$4,380' },
    '12m': { mrr: '$2,480,000', growth: '+28.4%', activeUsers: '450,200', churn: '4.2%', ltv: '$4,950' }
  };

  const chartData = [
    { month: 'Jan', revenue: 142000, target: 130000, retention: 88 },
    { month: 'Feb', revenue: 158000, target: 145000, retention: 89 },
    { month: 'Mar', revenue: 175000, target: 160000, retention: 91 },
    { month: 'Apr', revenue: 189000, target: 175000, retention: 92 },
    { month: 'May', revenue: 210000, target: 190000, retention: 94 },
    { month: 'Jun', revenue: 238000, target: 210000, retention: 95 }
  ];

  const currentStats = statsMap[timeframe];

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 shadow-2xl space-y-6">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-base font-medium text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#4A7C9D]" />
            SaaS Revenue & Cohort Executive Dashboard
          </h3>
          <p className="text-xs text-slate-400">Live BI simulation connected to PostgreSQL OLAP Data Marts</p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            <Calendar className="w-3.5 h-3.5 text-slate-400 ml-1" />
            {(['30d', '90d', '12m'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  timeframe === t ? 'bg-[#4A7C9D] text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t === '30d' ? '30 Days' : t === '90d' ? '90 Days' : '1 Year'}
              </button>
            ))}
          </div>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-slate-950 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-slate-800 focus:outline-hidden focus:border-[#4A7C9D]"
          >
            <option value="all">Global (All Regions)</option>
            <option value="eu">Europe (EMEA)</option>
            <option value="na">North America (AMER)</option>
            <option value="apac">Asia Pacific (APAC)</option>
          </select>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Recurring Revenue</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl font-bold text-white">{currentStats.mrr}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
            <ArrowUpRight className="w-3 h-3" />
            <span>{currentStats.growth} vs prior period</span>
          </div>
        </div>

        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Active Subscriptions</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-xl font-bold text-white">{currentStats.activeUsers}</div>
          <div className="flex items-center gap-1 text-[11px] text-sky-400 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>High Engagement</span>
          </div>
        </div>

        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Cohort Churn</span>
            <ArrowDownRight className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-xl font-bold text-white">{currentStats.churn}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
            <span>-0.8% Target SLA Met</span>
          </div>
        </div>

        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Avg Customer LTV</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl font-bold text-white">{currentStats.ltv}</div>
          <div className="flex items-center gap-1 text-[11px] text-amber-400 font-medium">
            <span>3.8x CAC Payback Ratio</span>
          </div>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-medium text-slate-200">Monthly Revenue Inflow vs Target Benchmark</span>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-xs bg-[#4A7C9D]" /> Actual Revenue</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-xs bg-slate-700" /> Target Pace</span>
          </div>
        </div>

        {/* CSS Bar Chart */}
        <div className="pt-4 pb-2 space-y-3">
          {chartData.map((d) => {
            const maxVal = 250000;
            const revPct = Math.round((d.revenue / maxVal) * 100);
            const targetPct = Math.round((d.target / maxVal) * 100);

            return (
              <div key={d.month} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-bold w-10">{d.month}</span>
                  <div className="flex-1 mx-3 h-5 bg-slate-900 rounded-lg overflow-hidden relative border border-slate-800">
                    <div
                      style={{ width: `${revPct}%` }}
                      className="h-full bg-gradient-to-r from-[#3B6982] to-[#4A7C9D] rounded-lg transition-all duration-500 relative flex items-center justify-end pr-2"
                    >
                      <span className="text-[10px] text-white font-medium">${(d.revenue / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                  <span className="text-slate-500 text-[11px] w-20 text-right">{d.retention}% Retention</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
