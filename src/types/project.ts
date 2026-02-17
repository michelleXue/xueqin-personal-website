export interface PaperPublication {
  id: string;
  type: "paper";
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
  date: string;
}

export interface ToolPublication {
  id: string;
  type: "tool";
  name: string;
  description: string;
  demoLink: string;
  linkType: "github" | "website";
  date: string;
}

export type ProjectPublication = PaperPublication | ToolPublication;

export interface Project {
  id: number;
  title: string;
  overview: string;
  fullDescription: string;
  status: "Active Development" | "Evaluation & Validation" | "Disseminated";
  keywords: string[];
  image: string;
  publications: ProjectPublication[];
}
