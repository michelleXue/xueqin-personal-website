import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ActivityFeed } from './components/ActivityFeed';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Teaching } from './components/Teaching';
import { Contact } from './components/Contact';
import { Archive } from './components/Archive';
import { ProjectDetail } from './components/ProjectDetail';
import { projects } from './data/projects';
import type { Project } from './types/project';
import { useState, useEffect } from 'react';

export default function App() {
  const [showArchive, setShowArchive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [shouldRestoreProjectsScroll, setShouldRestoreProjectsScroll] = useState(false);

  // Only restore scroll when returning from project detail.
  useEffect(() => {
    if (!shouldRestoreProjectsScroll || selectedProject || showArchive) {
      return;
    }
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) {
      return;
    }
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShouldRestoreProjectsScroll(false);
  }, [selectedProject, showArchive, shouldRestoreProjectsScroll]);

  const handleBackFromProject = () => {
    setSelectedProject(null);
    setShouldRestoreProjectsScroll(true);
  };

  // Show project detail page
  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        allProjects={projects}
        onBack={handleBackFromProject}
        onNavigate={(project) => setSelectedProject(project)}
      />
    );
  }

  // Show archive page
  if (showArchive) {
    return <Archive onBack={() => setShowArchive(false)} />;
  }

  // Show main page
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#e6eaf0]">
      <Header />
      <main>
        <Hero />
        <ActivityFeed onViewArchive={() => setShowArchive(true)} />
        <ProjectShowcase onProjectClick={(project) => setSelectedProject(project)} />
        <Teaching />
      </main>
      <Contact />
    </div>
  );
}
