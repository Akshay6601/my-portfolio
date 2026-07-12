export interface Project {
  title: string;
  description: string;
  tech: string[];
  href?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}
