import type { Project } from "../../types/project";

type ProjectJsonModule = { default: Project };

const modules = import.meta.glob<ProjectJsonModule>("./*.json", {
  eager: true,
});

const projectImageModules = import.meta.glob(
  "../../assets/projects/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const resolveProjectImage = (image: string): string => {
  if (!image.startsWith("src/assets/")) {
    return image;
  }
  const moduleKey = image.replace(/^src\//, "../../");
  return projectImageModules[moduleKey] ?? image;
};

export const projects: Project[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith("_template.project.json"))
  .map(([, module]) => ({
    ...module.default,
    image: resolveProjectImage(module.default.image),
  }))
  .sort((a, b) => a.id - b.id);
