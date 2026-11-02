export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  imageFit?: 'cover' | 'contain';
  highlightBadge?: string;
  githubUrl?: string;
  demoUrl?: string;
  youtubeUrl?: string;
  date: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  phone: string;
  email: string;
}
