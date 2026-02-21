export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: (
    | "Management"
    | "Developers"
    | "Marketing Team"
    | "Digital Content"
  )[];
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export interface Innovator {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  image: string;
  bio: string;
  projects: string[];
  skills: string[];
  quote?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  innovators: string[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
