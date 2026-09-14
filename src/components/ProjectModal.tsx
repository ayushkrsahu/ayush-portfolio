import React, { useState } from 'react';
import { X, ExternalLink, Code2, Layers, CheckCircle, Database, Play, Eye } from 'lucide-react';
import { Project } from '../types';
import { InteractiveSQLEngine } from './InteractiveSQLEngine';
import { InteractiveBIDashboard } from './InteractiveBIDashboard';
import { InteractivePipelineDAG } from './InteractivePipelineDAG';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'code'>('demo');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col text-slate-800 dark:text-slate-100">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs z-10">
          <div>
            <span className="text-xs font-semibold text-[#4A7C9D] dark:text-sky-300 bg-[#4A7C9D]/10 dark:bg-sky-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <h2 className="text-2xl font-serif text-[#3B6982] dark:text-sky-200 mt-2 font-bold">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xl font-bold cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8 flex-1">
          {/* Top Banner & Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 h-52 sm:h-64 shadow-xs relative group">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 bg-slate-900/90 hover:bg-[#4A7C9D] text-white text-xs px-3.5 py-2 rounded-lg font-medium shadow-md flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Direct Link / Repo
                </a>
              )}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 space-y-4 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-400 mb-3">
                  Key Metrics & Impact
                </h4>
                <div className="space-y-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{m.label}</span>
                      <span className="text-sm font-bold text-[#3B6982] dark:text-sky-300 font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* External Link Highlight Banner */}
          {project.externalUrl && (
            <div className="bg-[#4A7C9D]/10 dark:bg-sky-950/50 border border-[#4A7C9D]/30 dark:border-sky-800/50 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-[#3B6982] dark:text-sky-300 uppercase tracking-wider">Verified External Publication</div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Explore the live post, architectural documentation, or code repo.</p>
              </div>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-[#3B6982] dark:bg-sky-600 hover:bg-[#2A4B5E] dark:hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0 shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View Original Link
              </a>
            </div>
          )}

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#3B6982] dark:text-sky-200">Project Overview</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="pt-2 space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Key Achievements</h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc pl-4 marker:text-[#4A7C9D] dark:marker:text-sky-400">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Interactive Showcase Tabs */}
          {(project.hasInteractiveDemo || project.architecture || project.sampleCode) && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
                {project.hasInteractiveDemo && (
                  <button
                    onClick={() => setActiveTab('demo')}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'demo'
                        ? 'bg-[#4A7C9D] dark:bg-sky-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Interactive Live Demo</span>
                  </button>
                )}

                {project.architecture && (
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'architecture'
                        ? 'bg-[#4A7C9D] dark:bg-sky-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Pipeline Architecture</span>
                  </button>
                )}

                {project.sampleCode && (
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'code'
                        ? 'bg-[#4A7C9D] dark:bg-sky-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Sample Code Snippets</span>
                  </button>
                )}
              </div>

              {/* Active Tab View */}
              {activeTab === 'demo' && project.hasInteractiveDemo && (
                <div className="pt-2 animate-in fade-in duration-300">
                  {project.demoType === 'sql-runner' && <InteractiveSQLEngine />}
                  {project.demoType === 'bi-dashboard' && <InteractiveBIDashboard />}
                  {project.demoType === 'pipeline-dag' && <InteractivePipelineDAG />}
                </div>
              )}

              {activeTab === 'architecture' && project.architecture && (
                <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-3 animate-in fade-in duration-300">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-400">
                    Data Lineage & Pipeline Stages
                  </h4>
                  <div className="space-y-2">
                    {project.architecture.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200/60 dark:border-slate-700/60 shadow-2xs">
                        <span className="w-6 h-6 rounded-full bg-[#4A7C9D]/10 dark:bg-sky-500/20 text-[#3B6982] dark:text-sky-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-200 font-mono pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'code' && project.sampleCode && (
                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 space-y-2 animate-in fade-in duration-300">
                  <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>File: {project.sampleCode.filename}</span>
                    <span className="uppercase text-[10px] text-[#4A7C9D] dark:text-sky-400 font-bold">{project.sampleCode.language}</span>
                  </div>
                  <pre className="text-emerald-300 leading-relaxed overflow-x-auto pt-2">
                    <code>{project.sampleCode.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between rounded-b-2xl">
          <span className="text-xs text-slate-400 dark:text-slate-500">Data Engineering & Analytics Project Showcase</span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
