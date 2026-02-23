export interface PaperPublication {
  id: string;
  type: "paper";
  pin?: boolean;
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
  publishedDate: string;
}

export interface ToolPublication {
  id: string;
  type: "tool";
  pin?: boolean;
  name: string;
  description: string;
  demoLink: string;
  linkType: "github" | "website" | "pypi";
  publishedDate: string;
}

export interface AwardPublication {
  id: string;
  type: "award";
  pin?: boolean;
  name: string;
  description: string;
  url: string;
  publishedDate: string;
}

export type ProjectPublication = PaperPublication | ToolPublication | AwardPublication;

export interface Project {
  id: number;
  title: string;
  overview: string;
  fullDescription: string;
  status: "Active Development" | "Evaluation & Validation" | "Completed & Archived";
  keywords: string[];
  image: string;
  portfolio: ProjectPublication[];
}
