import { BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { courses } from "../data/teaching";
import type { Course } from "../types/course";

interface TeachingProps {
  onCourseClick: (course: Course) => void;
}

export function Teaching({ onCourseClick }: TeachingProps) {

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
          <p className="text-gray-600 mb-12">Courses I'm currently teaching and have offered</p>

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

                {/* Syllabus Action */}
                <button
                  type="button"
                  onClick={() => onCourseClick(course)}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  style={{ color: '#002663' }}
                >
                  <BookOpen size={14} />
                  View Syllabus
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
