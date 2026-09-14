import React from 'react';
import { UserProfile } from '../types';

interface HeroProps {
  profile: UserProfile;
  onOpenResume: () => void;
  onScrollToProjects: () => void;
  onScrollToCertifications: () => void;
  onScrollToDashboards?: () => void;
  onScrollToBlog?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenResume,
  onScrollToProjects,
  onScrollToCertifications,
  onScrollToDashboards,
  onScrollToBlog
}) => {
  return (
    <section id="hero-section" className="w-full bg-white dark:bg-slate-950 pt-10 pb-8 px-6 sm:px-12 text-center transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-4">
        
        {/* Main Heading - Refined, moderate size matching sample UI */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light tracking-wide leading-relaxed">
          Hello there, I'm a <span className="font-semibold text-[#3B6982] dark:text-sky-300">{profile.role.toLowerCase()}</span> based in {profile.location.split(',').pop()?.trim() || 'United Kingdom'}.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-normal tracking-wide max-w-xl mx-auto">
          Get to know me more through my resume, projects, dashboards, certifications and technical blogs.
        </p>

        {/* Action Pill Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={onOpenResume}
            className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-all duration-200 text-xs tracking-wide font-medium cursor-pointer active:scale-95 shadow-2xs"
          >
            Resume
          </button>
          
          <button
            onClick={onScrollToProjects}
            className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-all duration-200 text-xs tracking-wide font-medium cursor-pointer active:scale-95 shadow-2xs"
          >
            Projects
          </button>

          {onScrollToDashboards && (
            <button
              onClick={onScrollToDashboards}
              className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-all duration-200 text-xs tracking-wide font-medium cursor-pointer active:scale-95 shadow-2xs"
            >
              Dashboards
            </button>
          )}
          
          <button
            onClick={onScrollToCertifications}
            className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-all duration-200 text-xs tracking-wide font-medium cursor-pointer active:scale-95 shadow-2xs"
          >
            Certifications
          </button>

          {onScrollToBlog && (
            <button
              onClick={onScrollToBlog}
              className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-all duration-200 text-xs tracking-wide font-medium cursor-pointer active:scale-95 shadow-2xs"
            >
              Blog
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
