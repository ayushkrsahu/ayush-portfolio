import React, { useState } from 'react';
import { Database, LineChart, Search, Workflow, Server, Table, Sparkles, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { SkillItem } from '../types';
import { TechIcon, getTechBrandInfo } from './TechIcon';

interface SkillsSectionProps {
  skills: SkillItem[];
}

interface PrimaryTechTool {
  name: string;
  category: 'Languages & Core' | 'Cloud & Warehouses' | 'Pipelines & Streaming' | 'BI & Analytics' | 'AI & Infra';
  description: string;
}

const PRIMARY_TECH_STACK: PrimaryTechTool[] = [
  { name: 'Python', category: 'Languages & Core', description: 'Pandas, PySpark, pyodbc, pyarrow' },
  { name: 'SQL (Advanced)', category: 'Languages & Core', description: 'T-SQL, Spark SQL, PostgreSQL, MySQL' },
  { name: 'AWS', category: 'Cloud & Warehouses', description: 'S3, Redshift, DMS, EC2, IAM' },
  { name: 'Microsoft Azure', category: 'Cloud & Warehouses', description: 'AZ-104, Synapse, Blob Storage' },
  { name: 'Databricks', category: 'Cloud & Warehouses', description: 'Delta Lake, Medallion Architecture, DLT' },
  { name: 'Snowflake', category: 'Cloud & Warehouses', description: 'Snowpipe, Time Travel, Micro-partitions' },
  { name: 'Apache Airflow', category: 'Pipelines & Streaming', description: 'DAG Orchestration, Retries, Idempotent Jobs' },
  { name: 'dbt', category: 'Pipelines & Streaming', description: 'Data Transformations, Star Schema, Testing' },
  { name: 'Apache Kafka', category: 'Pipelines & Streaming', description: 'Real-Time Event Streaming, Partitioning' },
  { name: 'PySpark', category: 'Pipelines & Streaming', description: 'Distributed Dataframes, Spark SQL' },
  { name: 'Power BI', category: 'BI & Analytics', description: 'DAX Measures, Power Query M, Star Schemas' },
  { name: 'Docker', category: 'AI & Infra', description: 'Containerization, Local Stack, Compose' },
  { name: 'Terraform', category: 'AI & Infra', description: 'Infrastructure as Code (IaC), AWS Modules' },
  { name: 'LangGraph & AI', category: 'AI & Infra', description: 'Azure OpenAI, RAG, FastAPI Agent Services' },
  { name: 'Git & GitHub', category: 'AI & Infra', description: 'CI/CD Pipelines, Version Control' }
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All Stack');

  const categories = ['All Stack', 'Languages & Core', 'Cloud & Warehouses', 'Pipelines & Streaming', 'BI & Analytics', 'AI & Infra'];

  const filteredTechStack = activeCategory === 'All Stack'
    ? PRIMARY_TECH_STACK
    : PRIMARY_TECH_STACK.filter(item => item.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    const iconContainerStyle = "w-16 h-16 rounded-xl flex items-center justify-center border border-[#4A7C9D]/20 dark:border-sky-500/30 text-[#4A7C9D] dark:text-sky-300 bg-slate-50/50 dark:bg-slate-900/60 group-hover:bg-[#4A7C9D]/5 dark:group-hover:bg-sky-500/10 group-hover:border-[#4A7C9D]/40 dark:group-hover:border-sky-400/50 transition-all duration-300 shadow-2xs";
    
    switch (iconName) {
      case 'cleansing':
        return (
          <div className={iconContainerStyle}>
            <Database className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'visualization':
        return (
          <div className={iconContainerStyle}>
            <LineChart className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'exploration':
        return (
          <div className={iconContainerStyle}>
            <Search className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'pipeline':
        return (
          <div className={iconContainerStyle}>
            <Workflow className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'warehouse':
        return (
          <div className={iconContainerStyle}>
            <Server className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'ai':
        return (
          <div className={iconContainerStyle}>
            <Sparkles className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'infrastructure':
        return (
          <div className={iconContainerStyle}>
            <Cpu className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'modeling':
      default:
        return (
          <div className={iconContainerStyle}>
            <Table className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
    }
  };

  return (
    <section id="skills-section" className="w-full bg-white dark:bg-slate-950 py-16 px-6 sm:px-12 md:px-20 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A7C9D] dark:text-sky-300 bg-[#4A7C9D]/10 dark:bg-sky-500/10 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" /> Technical Arsenal
          </div>
          <h2 className="text-2xl sm:text-3xl text-[#3B6982] dark:text-sky-200 font-serif font-bold tracking-wide">
            Technical Skills & Technologies
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Full-stack data engineering, cloud warehousing, distributed processing, and business intelligence toolkit.
          </p>
          <div className="w-12 h-0.5 bg-[#4A7C9D]/30 dark:bg-sky-400/40 mx-auto rounded-full" />
        </div>

        {/* --- GRAPHICAL TECH STACK GRID --- */}
        <div className="space-y-8 bg-slate-50/60 dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-serif">
                Technology Ecosystem
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click category filters to explore tools with graphical icons
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#3B6982] dark:bg-sky-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tech Cards with Graphical Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {filteredTechStack.map((tech) => {
              const brand = getTechBrandInfo(tech.name);
              return (
                <div
                  key={tech.name}
                  className="group relative bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-[#4A7C9D]/40 dark:hover:border-sky-500/50 transition-all duration-200 flex flex-col items-center text-center justify-between gap-3"
                >
                  {/* Icon Container with subtle brand color tint */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 shadow-2xs ${brand.bgLight} ${brand.bgDark}`}>
                    <TechIcon name={tech.name} size={24} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#3B6982] dark:group-hover:text-sky-300 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-tight font-medium">
                      {tech.description}
                    </p>
                  </div>

                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mt-auto">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 6 DOMAIN SKILL CATEGORY CARDS --- */}
        <div className="space-y-6 pt-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-serif text-[#3B6982] dark:text-sky-200 font-semibold">
              Core Technical Competencies
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any competency card below to view detailed breakdown
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            {skills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-slate-900/80 hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-all duration-200 cursor-pointer border border-slate-100 dark:border-slate-800 hover:border-slate-200/80 dark:hover:border-slate-700 shadow-2xs hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="mb-5">
                  {getSkillIcon(skill.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl text-[#3B6982] dark:text-sky-200 font-normal tracking-wide mb-3">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-normal max-w-xs mb-4">
                  {skill.shortDesc}
                </p>

                {/* Tool Chips with Graphical Icons */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto pt-2">
                  {skill.tools.slice(0, 4).map((tool) => {
                    const brand = getTechBrandInfo(tool);
                    return (
                      <span
                        key={tool}
                        className={`text-[11px] px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60 ${brand.bgLight} ${brand.bgDark}`}
                      >
                        <TechIcon name={tool} className="text-sm" />
                        <span>{tool}</span>
                      </span>
                    );
                  })}
                  {skill.tools.length > 4 && (
                    <span className="text-[11px] px-2 py-0.5 text-[#4A7C9D] dark:text-sky-400 font-semibold">
                      +{skill.tools.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- SKILL DETAIL MODAL WITH GRAPHICAL ICONS --- */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {getSkillIcon(selectedSkill.iconName)}
                <div>
                  <h3 className="text-xl font-medium text-[#3B6982] dark:text-sky-200">{selectedSkill.title}</h3>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Core Competency Overview</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {selectedSkill.fullDesc}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Associated Tools & Technologies ({selectedSkill.tools.length})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {selectedSkill.tools.map((t) => {
                  const brand = getTechBrandInfo(t);
                  return (
                    <div
                      key={t}
                      className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium border border-slate-200/70 dark:border-slate-700/70 ${brand.bgLight} ${brand.bgDark}`}
                    >
                      <TechIcon name={t} className="text-base shrink-0" />
                      <span className="truncate">{t}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
