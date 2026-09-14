import React, { useState } from 'react';
import { ExternalLink, Database, BarChart3, Cpu, Sparkles, Github, Linkedin } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects (13)' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'ai-engineering', label: 'AI & Engineering' },
    { id: 'data-analytics', label: 'Analytics & Dashboards' },
    { id: 'machine-learning', label: 'Machine Learning & Repos' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects-section" className="w-full bg-slate-50/50 dark:bg-slate-900/40 py-16 px-6 sm:px-12 md:px-20 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl text-[#4A7C9D] dark:text-sky-300 font-normal tracking-wide">
            Data Engineering & AI Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Production Medallion pipelines, CDC ingestion, LangGraph LLM agents, and Power BI analytics.
          </p>
          <div className="w-12 h-0.5 bg-[#4A7C9D]/30 dark:bg-sky-400/40 mx-auto rounded-full mt-2" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#4A7C9D] dark:bg-sky-600 text-white shadow-xs font-bold'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-800 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div 
                onClick={() => onSelectProject(project)}
                className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-800 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold bg-slate-900/85 text-white backdrop-blur-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                </div>
                {project.hasInteractiveDemo && (
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-semibold bg-[#4A7C9D] dark:bg-sky-600 text-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-3 h-3" /> Live Demo
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div 
                  onClick={() => onSelectProject(project)}
                  className="space-y-2 cursor-pointer"
                >
                  <h3 className="text-lg text-[#3B6982] dark:text-sky-200 font-bold group-hover:text-[#2A4B5E] dark:group-hover:text-sky-100 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 dark:border-slate-800 text-center font-mono text-[11px]">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <div className="text-slate-400 dark:text-slate-500 text-[10px] truncate">{m.label}</div>
                      <div className="font-bold text-[#3B6982] dark:text-sky-300">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tags & External Direct Link */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-1.5 flex-1 pr-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white text-slate-500 dark:text-slate-400 transition-colors shrink-0"
                      title="Open External Link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
