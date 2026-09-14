export interface Project {
  id: string;
  title: string;
  category: 'data-engineering' | 'data-analytics' | 'machine-learning' | 'ai-engineering';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architecture?: string[];
  externalUrl?: string;
  embeddedPowerBiUrl?: string;
  linkedInPostUrl?: string;
  sampleCode?: {
    language: string;
    filename: string;
    code: string;
  };
  hasInteractiveDemo?: boolean;
  demoType?: 'sql-runner' | 'bi-dashboard' | 'pipeline-dag';
}

export interface SkillItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'cleansing' | 'visualization' | 'exploration' | 'pipeline' | 'warehouse' | 'modeling' | 'cdc' | 'ai' | 'infrastructure';
  tools: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
}

export interface Education {
  institution: string;
  degree: string;
  grade?: string;
  period: string;
}

export interface DashboardItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  liveUrl: string;
  linkedInUrl: string;
  embedUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  category: string;
  content: string;
}

export interface UserProfile {
  name: string;
  role: string;
  location: string;
  bio: string;
  tagline: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
  pswVisaInfo: string;
  photoUrl?: string;
}
