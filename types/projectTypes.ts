export interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  code_link: null;
  project_link: null;
  thumbnail_url: string;
  highlighted: number;
  created_at: Date;
  updated_at: Date;
}

export interface ProjectsProps {
  projects?: Array<Project>;
}
