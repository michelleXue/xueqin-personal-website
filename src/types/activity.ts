import type { LucideIcon } from "lucide-react";

export type ActivityType =
  | "publication"
  | "conference"
  | "award"
  | "service"
  | "news";

export type ActivityColor = "blue" | "indigo" | "purple" | "green" | "yellow";
export type ActivityIconKey = "Award" | "FileText" | "Presentation" | "Users";

export interface Activity {
  id?: number;
  date: string;
  sortDate: string;
  type: ActivityType;
  title: string;
  description: string;
  icon: LucideIcon;
  color?: ActivityColor;
  link: string;
}

export type ActivityJson = Omit<Activity, "icon"> & {
  icon: ActivityIconKey;
};

export type ActivityResolved = Omit<Activity, "id" | "color"> & {
  id: number;
  color: ActivityColor;
};
