
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  imageUrl: string;
  links: { name: string; url: string }[];
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
  grade?: string;
  thesis?: {
    title: string;
    grade?: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
