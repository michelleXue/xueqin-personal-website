import { Award, FileText, Presentation, Users } from "lucide-react";
import type { Activity, ActivityColor } from "../types/activity";

interface ActivityColorStyle {
  backgroundColor: string;
  color: string;
}

export const activityColorStyles: Record<ActivityColor, ActivityColorStyle> = {
  blue: {
    backgroundColor: "#dbeafe",
    color: "#2563eb",
  },
  indigo: {
    backgroundColor: "#e0e7ff",
    color: "#4f46e5",
  },
  purple: {
    backgroundColor: "#f3e8ff",
    color: "#7e22ce",
  },
  green: {
    backgroundColor: "#dcfce7",
    color: "#15803d",
  },
  yellow: {
    backgroundColor: "#fef9c3",
    color: "#a16207",
  },
};

export const activities: Activity[] = [
  {
    id: 1,
    date: "October 2024",
    type: "conference",
    title: "Presented at VARSE'24 (ASE 2024)",
    description:
      'Presented "Utilizing Generative AI for VR Exploration Testing: A Case Study" at the VARSE\'24 workshop.',
    icon: Presentation,
    color: "blue",
    link: "#",
  },
  {
    id: 2,
    date: "October 2024",
    type: "news",
    title: "Match Program Projects Released",
    description:
      "Two exciting research projects now available for undergraduate students. Application deadline: November 15.",
    icon: Users,
    color: "indigo",
    link: "#",
  },
  {
    id: 3,
    date: "October 2024",
    type: "service",
    title: "PC Member - AAAI-25 UC",
    description:
      "Joined as a Program Committee member for AAAI 2025 Undergraduate Consortium.",
    icon: Award,
    color: "purple",
    link: "#",
  },
  {
    id: 4,
    date: "September 2024",
    type: "service",
    title: "Research Catalyst Grant Reviewer",
    description:
      "Accepted invitation to review for the 2024 Research Catalyst Grant (RCG) competition.",
    icon: FileText,
    color: "green",
    link: "#",
  },
  {
    id: 5,
    date: "August 2024",
    type: "publication",
    title: "Paper Accepted at VARSE 2024",
    description:
      "Our paper on utilizing Generative AI for VR testing has been accepted at VARSE 2024.",
    icon: FileText,
    color: "blue",
    link: "#",
  },
  {
    id: 6,
    date: "July 2024",
    type: "award",
    title: "Best Paper Award",
    description: "Received Best Paper Award at Software Engineering Conference.",
    icon: Award,
    color: "yellow",
    link: "#",
  },
];
