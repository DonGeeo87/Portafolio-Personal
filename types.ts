import { ReactNode } from 'react';

export enum ProjectStatus {
  MVP = 'MVP',
  InDevelopment = 'En desarrollo',
  Beta = 'Beta',
  Live = 'Live',
  Concept = 'Concept'
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  highlight?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}