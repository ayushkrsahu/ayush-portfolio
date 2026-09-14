import React from 'react';
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiLinux,
  SiDatabricks,
  SiSnowflake,
  SiFastapi
} from 'react-icons/si';
import { Database, Layers, Network, Code2, RefreshCw, BarChart2 } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
  showColor?: boolean;
}

// High-precision custom brand SVGs for tools
const PowerBiIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="16" y="2" width="5" height="20" rx="1" />
    <rect x="9.5" y="7" width="5" height="15" rx="1" />
    <rect x="3" y="12" width="5" height="10" rx="1" />
  </svg>
);

const DbtIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.996 0L1.758 5.912v12.176l10.238 5.912 10.246-5.912V5.912L11.996 0zm0 3.328l7.354 4.246-7.354 4.246-7.354-4.246 7.354-4.246zm-8.082 6.096l7.082 4.09v7.186l-7.082-4.09V9.424zm9.082 11.276v-7.186l7.082-4.09v7.186l-7.082 4.09z" />
  </svg>
);

const AwsIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.73 12.3c0 .52.12.98.37 1.37.25.39.63.7 1.12.92.5.22 1.11.33 1.83.33 1.25 0 2.22-.38 2.92-1.15.7-.77 1.05-1.78 1.05-3.04V6.26h-2.1v4.42c0 .76-.18 1.34-.55 1.74-.37.4-.92.6-1.65.6-.68 0-1.19-.18-1.54-.53-.35-.35-.52-.87-.52-1.56V6.26H5.56v4.52c0 .54.12 1.05.37 1.52zM1.7 18.5c3.2 2 7.1 3 11.2 3 5.4 0 10.4-1.8 14.3-5-1.1.9-2.9 1.6-4.9 2-3.2.7-6.5.7-9.7.1-3.6-.7-7.1-2.1-10.9-.1zM18.8 14.8c.3.5.7.8 1.3 1 .6.2 1.3.3 2.1.3s1.5-.1 2.1-.3c.6-.2 1-.5 1.3-1V6.26h-2.1v7.1c0 .4-.1.7-.4.9-.3.2-.7.3-1.1.3s-.8-.1-1.1-.3c-.3-.2-.4-.5-.4-.9V6.26h-2.1v8.54z"/>
  </svg>
);

const AzureIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.9 2.2L5.2 16.1l3.5 5.6h11.9L12.9 2.2zm-1.8 14.3l3.3-5.9 4.3 5.9h-7.6z"/>
  </svg>
);

const AirflowIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-3H8l4-5 4 5h-3v3z"/>
  </svg>
);

const KafkaIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.5v-9l7 4.5-7 4.5z"/>
  </svg>
);

const SparkIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2.4 6.6L21 11l-5.6 4.4L17 22l-5-3.8L7 22l1.6-6.6L3 11l6.6-2.4L12 2z"/>
  </svg>
);

const TerraformIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.44 0v7.6l6.57 3.8V3.8L1.44 0zm7.21 4.16v7.6l6.57 3.8V7.96L8.65 4.16zm0 8.32v7.62l6.57 3.8v-7.62l-6.57-3.8zM15.86 8.32v7.6l6.57 3.8V12.12l-6.57-3.8z"/>
  </svg>
);

const AiBrainIcon: React.FC<{ className?: string }> = ({ className = 'w-[1em] h-[1em]' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
    <path d="M12 6v12M6 12h12" />
  </svg>
);

export const getTechBrandInfo = (name: string): { icon: React.ReactNode; color: string; bgLight: string; bgDark: string } => {
  const norm = name.toLowerCase().trim();

  if (norm.includes('python')) {
    return { icon: <SiPython />, color: '#3776AB', bgLight: 'bg-blue-50 text-[#3776AB]', bgDark: 'dark:bg-blue-950/50 dark:text-blue-400' };
  }
  if (norm.includes('pyspark') || norm === 'spark sql' || norm.includes('spark streaming') || norm.includes('spark')) {
    return { icon: <SparkIcon />, color: '#E25A1C', bgLight: 'bg-orange-50 text-[#E25A1C]', bgDark: 'dark:bg-orange-950/50 dark:text-orange-400' };
  }
  if (norm.includes('airflow')) {
    return { icon: <AirflowIcon />, color: '#017CEE', bgLight: 'bg-sky-50 text-[#017CEE]', bgDark: 'dark:bg-sky-950/50 dark:text-sky-400' };
  }
  if (norm.includes('kafka')) {
    return { icon: <KafkaIcon />, color: '#231F20', bgLight: 'bg-slate-100 text-slate-800', bgDark: 'dark:bg-slate-800 dark:text-slate-200' };
  }
  if (norm.includes('dbt')) {
    return { icon: <DbtIcon />, color: '#FF694B', bgLight: 'bg-orange-50 text-[#FF694B]', bgDark: 'dark:bg-orange-950/50 dark:text-orange-400' };
  }
  if (norm.includes('power bi') || norm === 'dax' || norm.includes('power query')) {
    return { icon: <PowerBiIcon />, color: '#F2C811', bgLight: 'bg-amber-50 text-amber-600', bgDark: 'dark:bg-amber-950/50 dark:text-amber-400' };
  }
  if (norm.includes('aws') || norm.includes('amazon') || norm.includes('s3') || norm.includes('redshift') || norm.includes('dms')) {
    return { icon: <AwsIcon />, color: '#FF9900', bgLight: 'bg-amber-50 text-[#FF9900]', bgDark: 'dark:bg-amber-950/50 dark:text-amber-400' };
  }
  if (norm.includes('azure') || norm.includes('azure openai')) {
    return { icon: <AzureIcon />, color: '#0089D6', bgLight: 'bg-blue-50 text-[#0089D6]', bgDark: 'dark:bg-blue-950/50 dark:text-blue-400' };
  }
  if (norm.includes('databricks') || norm.includes('delta lake')) {
    return { icon: <SiDatabricks />, color: '#FF3621', bgLight: 'bg-rose-50 text-[#FF3621]', bgDark: 'dark:bg-rose-950/50 dark:text-rose-400' };
  }
  if (norm.includes('snowflake')) {
    return { icon: <SiSnowflake />, color: '#29B5E8', bgLight: 'bg-sky-50 text-[#29B5E8]', bgDark: 'dark:bg-sky-950/50 dark:text-sky-300' };
  }
  if (norm.includes('docker')) {
    return { icon: <SiDocker />, color: '#2496ED', bgLight: 'bg-blue-50 text-[#2496ED]', bgDark: 'dark:bg-blue-950/50 dark:text-blue-400' };
  }
  if (norm.includes('terraform')) {
    return { icon: <TerraformIcon />, color: '#844FBA', bgLight: 'bg-purple-50 text-[#844FBA]', bgDark: 'dark:bg-purple-950/50 dark:text-purple-300' };
  }
  if (norm.includes('fastapi')) {
    return { icon: <SiFastapi />, color: '#009688', bgLight: 'bg-emerald-50 text-[#009688]', bgDark: 'dark:bg-emerald-950/50 dark:text-emerald-300' };
  }
  if (norm.includes('langgraph') || norm.includes('langsmith') || norm.includes('rag') || norm.includes('ai')) {
    return { icon: <AiBrainIcon />, color: '#0D9488', bgLight: 'bg-teal-50 text-teal-700', bgDark: 'dark:bg-teal-950/50 dark:text-teal-300' };
  }
  if (norm.includes('git')) {
    return { icon: <SiGit />, color: '#F05032', bgLight: 'bg-orange-50 text-[#F05032]', bgDark: 'dark:bg-orange-950/50 dark:text-orange-400' };
  }
  if (norm.includes('linux')) {
    return { icon: <SiLinux />, color: '#FCC624', bgLight: 'bg-amber-50 text-amber-700', bgDark: 'dark:bg-amber-950/50 dark:text-amber-300' };
  }
  if (norm.includes('postgres')) {
    return { icon: <SiPostgresql />, color: '#4169E1', bgLight: 'bg-blue-50 text-[#4169E1]', bgDark: 'dark:bg-blue-950/50 dark:text-blue-300' };
  }
  if (norm.includes('mysql') || norm.includes('sql server') || norm.includes('t-sql') || norm.includes('sql')) {
    return { icon: <Database />, color: '#00758F', bgLight: 'bg-cyan-50 text-[#00758F]', bgDark: 'dark:bg-cyan-950/50 dark:text-cyan-300' };
  }
  if (norm.includes('cdc') || norm.includes('elt') || norm.includes('pipeline')) {
    return { icon: <RefreshCw />, color: '#4A7C9D', bgLight: 'bg-slate-100 text-[#4A7C9D]', bgDark: 'dark:bg-slate-800 dark:text-sky-300' };
  }
  if (norm.includes('model') || norm.includes('schema') || norm.includes('architecture') || norm.includes('medallion')) {
    return { icon: <Layers />, color: '#3B6982', bgLight: 'bg-sky-50 text-[#3B6982]', bgDark: 'dark:bg-sky-950/50 dark:text-sky-300' };
  }

  return { icon: <Code2 />, color: '#4A7C9D', bgLight: 'bg-slate-100 text-slate-700', bgDark: 'dark:bg-slate-800 dark:text-slate-300' };
};

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', showColor = true }) => {
  const brand = getTechBrandInfo(name);

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={showColor && brand.color ? { color: brand.color } : undefined}
      title={name}
    >
      {brand.icon}
    </span>
  );
};
