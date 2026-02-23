import { motion } from "motion/react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import type { Course } from "../types/course";

interface CourseDetailProps {
  course: Course;
  allCourses: Course[];
  onBack: () => void;
  onNavigate: (course: Course) => void;
}

export function CourseDetail({ course, allCourses, onBack, onNavigate }: CourseDetailProps) {
  if (allCourses.length === 0) {
    return null;
  }

  const currentIndex = allCourses.findIndex((item) => item.id === course.id);
  const previousIndex = currentIndex === 0 ? allCourses.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === allCourses.length - 1 ? 0 : currentIndex + 1;
  const previousCourse = allCourses[previousIndex];
  const nextCourse = allCourses[nextIndex];

  const handleNavigate = (target: Course) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onNavigate(target);
  };

  return (
    <div className="syllabus-shell min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#e6eaf0] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#002663] transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Teaching</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigate(previousCourse)}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-[#002663] hover:bg-gray-100 rounded-lg transition-all"
                title={`Previous: ${previousCourse.code} ${previousCourse.title}`}
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Prev</span>
              </button>
              <button
                onClick={() => handleNavigate(nextCourse)}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-[#002663] hover:bg-gray-100 rounded-lg transition-all"
                title={`Next: ${nextCourse.code} ${nextCourse.title}`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 md:px-8 pt-12 pb-8 border-b border-gray-100">
              <div>
                <p className="text-2xl font-semibold" style={{ color: "#9ca3af" }}>{course.code}</p>
                <h1 className="text-4xl font-bold leading-tight mt-1">{course.title}</h1>
              </div>
            </div>

            <div className="syllabus-content p-6 md:p-8 space-y-8">
              <section className="syllabus-section">
                <h2 className="syllabus-section-title">Course Description</h2>
                <p className="syllabus-body">{course.description}</p>
              </section>

              <section className="syllabus-section">
                <h2 className="syllabus-section-title">Course Objectives</h2>
                <ul className="rich-list rich-list-unordered syllabus-body">
                  {course.syllabus.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </section>

              <section className="syllabus-section">
                <h2 className="syllabus-section-title">Textbook</h2>
                <div className="syllabus-textbook-card rounded-xl bg-blue-50/60 p-4">
                  <a
                    href={course.syllabus.textbook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold hover:underline"
                    style={{ color: "#002663" }}
                  >
                    {course.syllabus.textbook.title}
                    <ExternalLink size={14} />
                  </a>
                  <p className="mt-2 syllabus-body">{course.syllabus.textbook.description}</p>
                </div>
              </section>

              <section className="syllabus-section">
                <h2 className="syllabus-section-title">Grading Breakdown</h2>
                <div className="overflow-hidden rounded-xl">
                  <table className="syllabus-table syllabus-grading-table w-full">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="text-left px-4 py-3 font-medium">Component</th>
                        <th className="text-left px-4 py-3 font-medium">Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.syllabus.gradingBreakdown.map((row) => (
                        <tr key={row.item}>
                          <td className="px-4 py-3">{row.item}</td>
                          <td className="px-4 py-3 font-medium">{row.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="syllabus-section">
                <h2 className="syllabus-section-title">Class Schedule Example</h2>
                <div className="overflow-x-auto rounded-xl">
                  <table className="syllabus-table syllabus-schedule-table w-full">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="text-left px-4 py-3 font-medium" style={{ width: "25%" }}>Week</th>
                        <th className="text-left px-4 py-3 font-medium" style={{ width: "75%" }}>Topic</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.syllabus.classSchedule.map((row) => (
                        <tr key={`${row.week}-${row.topic}`} className="odd:bg-white even:bg-gray-50/40">
                          <td className="px-4 py-3 font-medium text-gray-700">Week {row.week}</td>
                          <td className="px-4 py-3">{row.topic}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
