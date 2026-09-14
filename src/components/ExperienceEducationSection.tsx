import React from 'react';
import { GraduationCap, Award, Briefcase, CheckCircle2, Calendar, MapPin, Building2 } from 'lucide-react';
import { Experience, Education, Certification } from '../types';

interface ExperienceEducationSectionProps {
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({
  experiences,
  education,
  certifications
}) => {
  return (
    <section id="experience-education-section" className="w-full bg-slate-50/70 dark:bg-slate-900/40 py-16 px-6 sm:px-12 md:px-20 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* SECTION 1: EXPERIENCE */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="p-2.5 bg-[#4A7C9D]/10 dark:bg-sky-500/10 rounded-xl text-[#3B6982] dark:text-sky-300">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3B6982] dark:text-sky-200">Work Experience</h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">2+ years of data engineering & cloud warehouse migration expertise</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 text-[#4A7C9D] dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">{exp.role}</h3>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="px-3 py-1 bg-sky-50 dark:bg-sky-950/60 text-[#3B6982] dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 rounded-full text-xs font-bold font-mono">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#4A7C9D] dark:text-sky-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-[#4A7C9D] dark:marker:text-sky-400 leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-medium rounded-md border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: EDUCATION & CERTIFICATIONS DUAL COLUMN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="p-2.5 bg-[#4A7C9D]/10 dark:bg-sky-500/10 rounded-xl text-[#3B6982] dark:text-sky-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#3B6982] dark:text-sky-200">Education</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Academic foundation & degree achievements</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900/90 rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2 relative pl-6"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4A7C9D] dark:bg-sky-500 rounded-l-xl" />
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">{edu.institution}</h3>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 font-medium shrink-0">{edu.period}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#3B6982] dark:text-sky-300 font-semibold">
                    {edu.degree} {edu.grade && <span className="text-slate-600 dark:text-slate-200 font-bold bg-sky-100 dark:bg-sky-950 px-2 py-0.5 rounded text-[11px] ml-1">({edu.grade})</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#4A7C9D]/10 dark:bg-sky-500/10 rounded-xl text-[#3B6982] dark:text-sky-300">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#3B6982] dark:text-sky-200">Certifications</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Verified credentials & professional training ({certifications.length})</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#4A7C9D] dark:bg-sky-600 text-white text-xs font-bold rounded-full">
                {certifications.length} Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900/90 rounded-xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-[#4A7C9D] dark:hover:border-sky-500 transition-colors flex items-start gap-3 group"
                >
                  <div className="p-1.5 bg-sky-50 dark:bg-sky-950 text-[#4A7C9D] dark:text-sky-300 rounded-lg shrink-0 mt-0.5 group-hover:bg-[#4A7C9D] dark:group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#3B6982] dark:group-hover:text-sky-300 transition-colors leading-snug">
                    {cert.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
