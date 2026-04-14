import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SuccessStory {
  company: string;
  category: string;
  impact: string;
  metrics: string;
  image: string;
  details?: {
    overview: string;
    challenge: string;
    solution: string;
    implementation: string | string[];
    results: string[];
  };
}

export interface Expert {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}
