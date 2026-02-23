import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ActivityFeed } from './components/ActivityFeed';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Teaching } from './components/Teaching';
import { CourseDetail } from './components/CourseDetail';
import { Contact } from './components/Contact';
import { Archive } from './components/Archive';
import { ProjectDetail } from './components/ProjectDetail';
import { projects } from './data/projects/index';
import { courses } from './data/teaching';
import type { Project } from './types/project';
import type { Course } from './types/course';
import { useState, useEffect } from 'react';

export default function App() {
  const [showArchive, setShowArchive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [shouldRestoreProjectsScroll, setShouldRestoreProjectsScroll] = useState(false);
  const [shouldRestoreTeachingScroll, setShouldRestoreTeachingScroll] = useState(false);

  // Only restore scroll when returning from project detail.
  useEffect(() => {
    if (!shouldRestoreProjectsScroll || selectedProject || selectedCourse || showArchive) {
      return;
    }
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) {
      return;
    }
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShouldRestoreProjectsScroll(false);
  }, [selectedProject, selectedCourse, showArchive, shouldRestoreProjectsScroll]);

  // Only restore scroll when returning from course detail.
  useEffect(() => {
    if (!shouldRestoreTeachingScroll || selectedCourse || selectedProject || showArchive) {
      return;
    }
    const teachingSection = document.getElementById('teaching');
    if (!teachingSection) {
      return;
    }
    teachingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShouldRestoreTeachingScroll(false);
  }, [selectedCourse, selectedProject, showArchive, shouldRestoreTeachingScroll]);

  const handleBackFromProject = () => {
    setSelectedProject(null);
    setShouldRestoreProjectsScroll(true);
  };

  const handleBackFromCourse = () => {
    setSelectedCourse(null);
    setShouldRestoreTeachingScroll(true);
  };

  const handleViewArchive = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setShowArchive(true);
  };

  const handleOpenProject = (project: Project) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setSelectedProject(project);
  };

  const handleOpenCourse = (course: Course) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setSelectedCourse(course);
  };

  // Show project detail page
  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        allProjects={projects}
        onBack={handleBackFromProject}
        onNavigate={handleOpenProject}
      />
    );
  }

  // Show course detail page
  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        allCourses={courses}
        onBack={handleBackFromCourse}
        onNavigate={handleOpenCourse}
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
        <ActivityFeed onViewArchive={handleViewArchive} />
        <ProjectShowcase onProjectClick={handleOpenProject} />
        <Teaching onCourseClick={handleOpenCourse} />
      </main>
      <Contact />
    </div>
  );
}
