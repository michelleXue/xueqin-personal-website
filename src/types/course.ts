export interface CourseGradingItem {
  item: string;
  weight: string;
}

export interface CourseTextbook {
  title: string;
  url: string;
  description: string;
}

export interface CourseScheduleItem {
  week: number | string;
  topic: string;
}

export interface CourseSyllabus {
  objectives: string[];
  textbook: CourseTextbook;
  gradingBreakdown: CourseGradingItem[];
  classSchedule: CourseScheduleItem[];
}

export interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  syllabusUrl: string;
  active: boolean;
  syllabus: CourseSyllabus;
}
