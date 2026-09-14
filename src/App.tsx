import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BannerImage } from './components/BannerImage';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DashboardsSection } from './components/DashboardsSection';
import { BlogSection } from './components/BlogSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ProfileModal } from './components/ProfileModal';
import { CustomizeModal } from './components/CustomizeModal';
import { Footer } from './components/Footer';

import {
  initialProfile,
  skillsData,
  projectsData,
  dashboardsData,
  experienceData,
  educationData,
  certificationsData,
  blogPostsData
} from './data/portfolioData';
import { Project, UserProfile } from './types';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  // Modal states
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState<boolean>(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDashboards = () => {
    const el = document.getElementById('dashboards-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCertifications = () => {
    const el = document.getElementById('experience-education-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBlog = () => {
    const el = document.getElementById('blog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-[#4A7C9D]/20 selection:text-[#3B6982] transition-colors duration-300">
      {/* 1. Header Navigation */}
      <Header
        profile={profile}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenEditProfile={() => setIsCustomizeOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onScrollToProjects={handleScrollToProjects}
        onScrollToCertifications={handleScrollToCertifications}
        onScrollToDashboards={handleScrollToDashboards}
        onScrollToBlog={handleScrollToBlog}
      />

      {/* 3. Hero Visual Profile Banner Card */}
      <BannerImage
        profile={profile}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* 4. Experience, Education & All 12 Certifications Section */}
      <ExperienceEducationSection
        experiences={experienceData}
        education={educationData}
        certifications={certificationsData}
      />

      {/* 5. "My skills" Section */}
      <SkillsSection skills={skillsData} />

      {/* 6. Filterable Projects Showcase (13 Real Projects) */}
      <ProjectsSection
        projects={projectsData}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 7. Featured Power BI Dashboards & Live Analytics Links */}
      <DashboardsSection dashboards={dashboardsData} />

      {/* 8. Technical Blog */}
      <BlogSection posts={blogPostsData} />

      {/* 9. Footer */}
      <Footer profile={profile} />

      {/* --- Interactive Modals --- */}
      
      {/* Project Detail & Live Demo Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={experienceData}
        education={educationData}
        certifications={certificationsData}
      />

      {/* Profile & Direct Contact Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
      />

      {/* Personalization Customizer Modal */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        profile={profile}
        onSaveProfile={(updatedProfile) => setProfile(updatedProfile)}
      />
    </div>
  );
}
