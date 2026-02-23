import type { Course } from "../../types/course";

type CourseJsonModule = { default: Course };

const modules = import.meta.glob<CourseJsonModule>("./*.json", {
  eager: true,
});

export const courses: Course[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith("_template.course.json"))
  .map(([, module]) => module.default)
  .sort((a, b) => a.id - b.id);
