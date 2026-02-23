import { motion } from 'motion/react';
import { ArrowLeft, FileText, Wrench, ExternalLink, Github, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Project } from '../types/project';

interface ProjectDetailProps {
  project: Project;
  allProjects: Project[];
  onBack: () => void;
  onNavigate: (project: Project) => void;
}

const inlineTokenRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|==(.+?)==|\*\*(.+?)\*\*/g;
const unorderedListItemRegex = /^\s*[-*]\s+(.+)$/;
const orderedListItemRegex = /^\s*(\d+)\.\s+(.+)$/;

const renderInlineRichText = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(inlineTokenRegex)) {
    const fullMatch = match[0];
    const matchIndex = match.index ?? 0;
    const [_, linkLabel, linkUrl, italicText, boldText] = match;

    if (matchIndex > lastIndex) {
      nodes.push(text.slice(lastIndex, matchIndex));
    }

    if (linkLabel && linkUrl) {
      nodes.push(
        <a
          key={`link-${matchIndex}-${linkUrl}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rich-text-link"
        >
          {linkLabel}
        </a>,
      );
    } else if (italicText) {
      nodes.push(
        <em key={`italic-${matchIndex}`} className="italic text-gray-700">
          {italicText}
        </em>,
      );
    } else if (boldText) {
      nodes.push(
        <strong key={`bold-${matchIndex}`} className="font-semibold">
          {boldText}
        </strong>,
      );
    } else {
      nodes.push(fullMatch);
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const renderDescription = (text: string): ReactNode => {
  const blocks = text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  if (blocks.length === 0) {
    return null;
  }

  return blocks.map((block, blockIndex) => {
    const lines = block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const unorderedMatches = lines.map((line) => line.match(unorderedListItemRegex));
    if (unorderedMatches.length > 0 && unorderedMatches.every(Boolean)) {
      return (
        <ul key={`ul-${blockIndex}`} className="rich-list rich-list-unordered">
          {unorderedMatches.map((match, itemIndex) => (
            <li key={`ul-item-${blockIndex}-${itemIndex}`}>
              {renderInlineRichText(match![1])}
            </li>
          ))}
        </ul>
      );
    }

    const orderedMatches = lines.map((line) => line.match(orderedListItemRegex));
    if (orderedMatches.length > 0 && orderedMatches.every(Boolean)) {
      const start = Number(orderedMatches[0]?.[1] ?? '1');
      return (
        <ol key={`ol-${blockIndex}`} start={start} className="rich-list rich-list-ordered">
          {orderedMatches.map((match, itemIndex) => (
            <li key={`ol-item-${blockIndex}-${itemIndex}`}>
              {renderInlineRichText(match![2])}
            </li>
          ))}
        </ol>
      );
    }

    return <p key={`paragraph-${blockIndex}`}>{renderInlineRichText(block)}</p>;
  });
};

const renderPinnedBadge = () => (
  <span
    style={{
      backgroundColor: '#e6eaf0',
      color: '#002663',
      borderRadius: '9999px',
      padding: '0.15rem 0.5rem',
      fontSize: '0.72rem',
      fontWeight: 600,
    }}
  >
    Pinned
  </span>
);

export function ProjectDetail({ project, allProjects, onBack, onNavigate }: ProjectDetailProps) {
  if (allProjects.length === 0) {
    return null;
  }

  // Sort portfolio items by pin first, then published date (newest first)
  const sortedPortfolio = [...project.portfolio].sort((a, b) => {
    if (Boolean(a.pin) !== Boolean(b.pin)) {
      return a.pin ? -1 : 1;
    }
    return b.publishedDate.localeCompare(a.publishedDate);
  });

  // Get current project index
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  
  // Calculate previous and next indices with circular logic
  const previousIndex = currentIndex === 0 ? allProjects.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1;
  
  const previousProject = allProjects[previousIndex];
  const nextProject = allProjects[nextIndex];

  const handleNavigate = (targetProject: Project) => {
    onNavigate(targetProject);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#e6eaf0] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between mb-8">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#002663] transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>

            {/* Quick Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigate(previousProject)}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-[#002663] hover:bg-gray-100 rounded-lg transition-all"
                title={`Previous: ${previousProject.title}`}
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Prev</span>
              </button>
              <button
                onClick={() => handleNavigate(nextProject)}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-[#002663] hover:bg-gray-100 rounded-lg transition-all"
                title={`Next: ${nextProject.title}`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                  project.status === 'Completed & Archived'
                    ? 'bg-green-100 text-green-700'
                    : project.status === 'Active Development'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 text-sm rounded-full"
                  style={{ backgroundColor: '#e6eaf0', color: '#002663' }}
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* Full Description */}
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {renderDescription(project.fullDescription)}
            </div>
          </div>

          {/* Research Portfolio Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Research Portfolio</h2>

            {sortedPortfolio.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
                <p className="text-gray-500">Portfolio entries coming soon</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedPortfolio.map((item, index) => (
                  <motion.div
                    key={`${project.id}-${item.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ccd4e0'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                  >
                    {item.type === 'paper' ? (
                      // Paper Card
                      <div className="flex gap-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: '#e6eaf0' }}
                        >
                          <FileText size={24} style={{ color: '#002663' }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3
                              className="text-lg font-semibold transition-colors"
                              onMouseEnter={(e) => (e.currentTarget.style.color = '#002663')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                            >
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 flex-shrink-0">
                              {item.pin ? renderPinnedBadge() : null}
                              <span>{item.year}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {renderInlineRichText(item.authors)}
                          </p>
                          <p className="text-sm text-gray-500 mb-3 italic">
                            {renderInlineRichText(item.venue)}
                          </p>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm hover:underline"
                            style={{ color: '#002663' }}
                          >
                            View Paper
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    ) : item.type === 'tool' ? (
                      // Tool Card
                      <div className="flex gap-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: '#dbeafe' }}
                        >
                          <Wrench size={24} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className="text-lg font-semibold mb-2 transition-colors"
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#002663')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                          >
                            {item.name}
                          </h3>
                          {item.pin ? <div className="mb-2">{renderPinnedBadge()}</div> : null}
                          <p className="text-sm text-gray-600 mb-3">
                            {renderInlineRichText(item.description)}
                          </p>
                          <a
                            href={item.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm hover:underline"
                            style={{ color: '#002663' }}
                          >
                            {item.linkType === 'github' ? (
                              <>
                                <Github size={14} />
                                View on GitHub
                              </>
                            ) : item.linkType === 'pypi' ? (
                              <>
                                View on PyPI
                                <ExternalLink size={14} />
                              </>
                            ) : (
                              <>
                                View Demo
                                <ExternalLink size={14} />
                              </>
                            )}
                          </a>
                        </div>
                      </div>
                    ) : (
                      // Award/Funding Card
                      <div className="flex gap-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: '#fef3c7' }}
                        >
                          <Award size={24} className="text-amber-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3
                              className="text-lg font-semibold transition-colors"
                              onMouseEnter={(e) => (e.currentTarget.style.color = '#002663')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                            >
                              {item.name}
                            </h3>
                            {item.pin ? <div className="flex-shrink-0">{renderPinnedBadge()}</div> : null}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {renderInlineRichText(item.description)}
                          </p>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm hover:underline"
                            style={{ color: '#002663' }}
                          >
                            View Funding Details
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Navigation Cards */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">Explore More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Previous Project Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleNavigate(previousProject)}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#002663'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
              >
                <div className="relative h-40 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #e6eaf0, #f0f2f5)' }}>
                  <img
                    src={previousProject.image}
                    alt={previousProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-white">
                      <ChevronLeft size={20} />
                      <span className="text-sm font-semibold">Previous Project</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-[#002663] transition-colors">
                    {previousProject.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {previousProject.overview}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {previousProject.keywords.slice(0, 2).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ backgroundColor: '#e6eaf0', color: '#002663' }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Next Project Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleNavigate(nextProject)}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#002663'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
              >
                <div className="relative h-40 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #e6eaf0, #f0f2f5)' }}>
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-white ml-auto">
                      <span className="text-sm font-semibold">Next Project</span>
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-[#002663] transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {nextProject.overview}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {nextProject.keywords.slice(0, 2).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ backgroundColor: '#e6eaf0', color: '#002663' }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
