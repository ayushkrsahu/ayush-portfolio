import React from 'react';
import { DashboardItem } from '../types';
import { LineChart, ExternalLink, Linkedin, Layout, ShieldCheck, Activity } from 'lucide-react';

interface DashboardsSectionProps {
  dashboards: DashboardItem[];
}

export const DashboardsSection: React.FC<DashboardsSectionProps> = ({ dashboards }) => {
  const featured = dashboards.find(d => d.id === 'main-powerbi-embedded') || dashboards[0];
  const listItems = dashboards.filter(d => d.id !== 'main-powerbi-embedded');

  return (
    <section id="dashboards-section" className="w-full bg-white dark:bg-slate-950 py-16 px-6 sm:px-12 md:px-20 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#4A7C9D] dark:text-sky-300">
            <LineChart className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-normal tracking-wide">
              Featured Interactive Dashboards
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Fully interactive Business Intelligence reporting tools and live analytics built with Power BI.
          </p>
          <div className="w-12 h-0.5 bg-[#4A7C9D]/30 dark:bg-sky-400/40 mx-auto rounded-full mt-2" />
        </div>

        {/* Embedded Main Power BI Dashboard */}
        {featured && featured.embedUrl && (
          <div className="bg-slate-900 dark:bg-slate-900/90 p-4 sm:p-6 rounded-2xl border border-slate-800 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-white">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layout className="w-5 h-5 text-[#4A7C9D] dark:text-sky-400" />
                  {featured.title}
                </h3>
                <p className="text-xs text-slate-400">{featured.description}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#4A7C9D] dark:bg-sky-600 hover:bg-[#3B6982] dark:hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Full Screen
                </a>
              </div>
            </div>

            {/* Power BI Responsive Container */}
            <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <iframe
                title="Featured Power BI Dashboard"
                src={featured.embedUrl}
                allowFullScreen={true}
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* Live Analytics Links Grid */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-serif text-[#3B6982] dark:text-sky-200 font-semibold text-center sm:text-left">
            More Live Analytics Links & Case Studies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listItems.map((dash) => (
              <div
                key={dash.id}
                className="bg-slate-50/80 dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 bg-sky-100 dark:bg-sky-950 text-[#3B6982] dark:text-sky-300 rounded-full border border-transparent dark:border-sky-800/40">
                      Power BI Live
                    </span>
                    <a
                      href={dash.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#4A7C9D] dark:hover:text-sky-300 transition-colors p-1"
                      title="Open Live Dashboard"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#3B6982] dark:group-hover:text-sky-300 transition-colors">
                    {dash.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {dash.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dash.tools.map((t) => (
                      <span key={t} className="text-[10px] px-2.5 py-0.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-6 mt-4 border-t border-slate-200/60 dark:border-slate-800">
                  <a
                    href={dash.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#3B6982] dark:bg-sky-600 hover:bg-[#2A4B5E] dark:hover:bg-sky-500 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <LineChart className="w-3.5 h-3.5" /> Live Dashboard
                  </a>
                  <a
                    href={dash.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" /> LinkedIn Post
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
