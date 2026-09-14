import React from "react";
import { UserProfile } from "@/src/types";
import { Mail, Linkedin, Github } from "lucide-react";

interface BannerImageProps {
  profile: UserProfile;
  onOpenProfile?: () => void;
}

export const BannerImage: React.FC<BannerImageProps> = ({ profile }) => {
  return (
    <section id="banner-section" className="w-full bg-white dark:bg-slate-950 py-2 sm:py-4 px-0 sm:px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto overflow-hidden relative shadow-md rounded-none sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-900 group">
        <div className="w-full h-[280px] sm:h-[380px] md:h-[460px] relative overflow-hidden flex items-center justify-center">
          <img
            src={profile.photoUrl || "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1800&auto=format&fit=crop"}
            alt={`${profile.name} - ${profile.role}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-slate-950/75 backdrop-blur-md p-3 sm:px-5 sm:py-3 rounded-xl border border-white/10 shadow-lg text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4A7C9D] flex items-center justify-center text-white font-bold text-sm border border-white/20">
                AS
              </div>
              <div>
                <div className="text-sm font-bold tracking-wide text-white flex items-center gap-2">
                  {profile.name}
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
                </div>
                <div className="text-[11px] text-sky-200 font-mono">
                  {profile.role} • {profile.location} ({profile.pswVisaInfo})
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-4 sm:border-l sm:border-slate-700 sm:pl-4">
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-white/10 hover:bg-[#0A66C2] text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-white/10 hover:bg-slate-700 text-white transition-colors"><Github className="w-4 h-4" /></a>
              <a href={`mailto:${profile.email}`} className="p-1.5 rounded-lg bg-white/10 hover:bg-emerald-600 text-white transition-colors"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
