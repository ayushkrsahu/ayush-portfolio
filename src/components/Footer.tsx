import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { UserProfile } from '../types';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 px-6 sm:px-12 md:px-20 border-t border-slate-800 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left info */}
        <div className="text-center md:text-left space-y-1">
          <h4 className="text-base font-serif text-slate-200 font-normal">{profile.name}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-normal capitalize">
            {profile.role} • {profile.location}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-xs text-slate-400">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-slate-800 hover:bg-[#4A7C9D] text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-800/60 text-center text-[11px] text-slate-600">
        © {new Date().getFullYear()} {profile.name}. All rights reserved. Data Engineer & Analyst Portfolio.
      </div>
    </footer>
  );
};
