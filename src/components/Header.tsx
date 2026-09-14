import React from 'react';
import { Linkedin, User, Edit3, Github, Sun, Moon } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  profile: UserProfile;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenProfile: () => void;
  onOpenEditProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  isDarkMode,
  onToggleDarkMode,
  onOpenProfile,
  onOpenEditProfile
}) => {
  return (
    <header id="portfolio-header" className="w-full bg-white/95 dark:bg-slate-900/90 border-b border-slate-100 dark:border-slate-800/80 py-6 px-6 sm:px-12 md:px-20 transition-colors duration-300 sticky top-0 z-30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Link */}
        <div className="flex items-center space-x-4">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-[#3B6982] dark:hover:text-sky-300 transition-colors text-sm font-normal tracking-[0.2em] lowercase flex items-center gap-1.5"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 opacity-75" />
            <span>linkedin</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-slate-400 dark:text-slate-400 hover:text-[#3B6982] dark:hover:text-sky-300 transition-colors text-sm font-normal tracking-[0.2em] lowercase"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 opacity-75" />
            <span>github</span>
          </a>
        </div>

        {/* Center Name Title */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={onOpenEditProfile} title="Click to customize profile details">
          <h1 className="text-xl sm:text-2xl text-[#3B6982] dark:text-sky-200 font-normal tracking-[0.15em] font-serif transition-colors group-hover:text-[#2A4B5E] dark:group-hover:text-sky-100">
            {profile.name}
          </h1>
          <button 
            type="button" 
            aria-label="Edit Profile"
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 dark:text-slate-400 hover:text-[#3B6982] dark:hover:text-sky-300"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Links & Theme Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full text-slate-500 dark:text-slate-300 hover:text-[#3B6982] dark:hover:text-sky-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center justify-center"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          <button
            onClick={onOpenProfile}
            className="text-slate-500 dark:text-slate-400 hover:text-[#3B6982] dark:hover:text-sky-300 transition-colors text-sm font-normal tracking-[0.2em] lowercase flex items-center gap-1.5 cursor-pointer"
            title="View Profile & Contact"
          >
            <User className="w-3.5 h-3.5 opacity-75" />
            <span>profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

