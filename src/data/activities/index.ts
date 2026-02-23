import { Award, FileText, Presentation, Users } from "lucide-react";
import type {
  Activity,
  ActivityColor,
  ActivityIconKey,
  ActivityJson,
  ActivityResolved,
} from "../../types/activity";

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

const activityColorPool: ActivityColor[] = [
  "blue",
  "indigo",
  "purple",
  "green",
  "yellow",
];

const iconByKey: Record<ActivityIconKey, Activity["icon"]> = {
  Award,
  FileText,
  Presentation,
  Users,
};

type ActivitiesJsonModule = { default: ActivityJson[] };

const activityModules = import.meta.glob<ActivitiesJsonModule>("./activities.json", {
  eager: true,
});

const hashString = (value: string): number => {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
};

const getAutoColor = (activity: { id: number; sortDate: string; title: string }): ActivityColor => {
  const seed = `${activity.id}-${activity.sortDate}-${activity.title}`;
  const colorIndex = hashString(seed) % activityColorPool.length;
  return activityColorPool[colorIndex];
};

const resolveActivityIds = (items: Activity[]): (Activity & { id: number })[] => {
  const usedIds = new Set<number>();
  let nextGeneratedId = 1;

  for (const item of items) {
    if (typeof item.id === "number") {
      usedIds.add(item.id);
      nextGeneratedId = Math.max(nextGeneratedId, item.id + 1);
    }
  }

  return items.map((item) => {
    if (typeof item.id === "number") {
      return item as Activity & { id: number };
    }
    while (usedIds.has(nextGeneratedId)) {
      nextGeneratedId += 1;
    }
    const resolvedId = nextGeneratedId;
    usedIds.add(resolvedId);
    nextGeneratedId += 1;
    return {
      ...item,
      id: resolvedId,
    };
  });
};

const activitySource = activityModules["./activities.json"]?.default ?? [];

export const activities: Activity[] = activitySource.map((item) => ({
  ...item,
  icon: iconByKey[item.icon] ?? FileText,
}));

export const activitiesWithResolvedColor: ActivityResolved[] = resolveActivityIds(
  activities,
).map((activity) => ({
  ...activity,
  color: activity.color ?? getAutoColor(activity),
}));

// Newest first for rendering, while allowing source data to be appended at the end.
export const activitiesNewestFirst = [...activitiesWithResolvedColor].sort((a, b) => {
  return b.sortDate.localeCompare(a.sortDate) || b.id - a.id;
});
