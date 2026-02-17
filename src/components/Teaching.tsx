import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const courses = [
  {
    id: 1,
    code: 'CSC 2400',
    title: 'Data Structures',
    term: 'Fall 2024',
    students: 35,
    description: 'Advanced study of fundamental data structures including trees, graphs, hash tables, and their applications in algorithm design.',
    topics: ['Trees & Graphs', 'Hash Tables', 'Algorithm Analysis', 'Big O Notation'],
    schedule: 'MWF 10:00-10:50 AM',
    color: 'blue',
    syllabusUrl: '#',
    active: true
  },
  {
    id: 2,
    code: 'CSC 4790',
    title: 'Applied Machine Learning',
    term: 'Fall 2024',
    students: 28,
    description: 'Hands-on introduction to machine learning techniques with applications in software engineering and AI-powered development tools.',
    topics: ['Supervised Learning', 'Neural Networks', 'NLP', 'ML Applications'],
    schedule: 'TR 2:00-3:15 PM',
    color: 'indigo',
    syllabusUrl: '#',
    active: true
  },
  {
    id: 3,
    code: 'CSC 3300',
    title: 'Algorithm Design',
    term: 'Spring 2025',
    students: 30,
    description: 'Comprehensive study of algorithm design paradigms including divide-and-conquer, dynamic programming, and greedy algorithms.',
    topics: ['Dynamic Programming', 'Greedy Algorithms', 'Graph Algorithms', 'Complexity'],
    schedule: 'MWF 1:00-1:50 PM',
    color: 'purple',
    syllabusUrl: '#',
    active: false
  }
];

export function Teaching() {
  return (
    <section id="teaching" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Teaching</h2>
          <p className="text-gray-600 mb-12">
            Courses I'm currently teaching and upcoming offerings
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ccd4e0'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">{course.code}</div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                  {course.description}
                </p>

                {/* Syllabus Link */}
                <a
                  href={course.syllabusUrl}
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                  style={{ color: '#002663' }}
                >
                  View Syllabus
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
