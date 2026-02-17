import type { LucideIcon } from "lucide-react";

export type ActivityType =
  | "publication"
  | "conference"
  | "award"
  | "service"
  | "news";

export type ActivityColor = "blue" | "indigo" | "purple" | "green" | "yellow";

export interface Activity {
  id: number;
  date: string;
  type: ActivityType;
  title: string;
  description: string;
  icon: LucideIcon;
  color: ActivityColor;
  link: string;
}
