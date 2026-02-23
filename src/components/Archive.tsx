import { motion } from 'motion/react';
import { Calendar, ExternalLink, ArrowLeft } from 'lucide-react';
import { activitiesNewestFirst, activityColorStyles } from '../data/activities/index';

interface ArchiveProps {
  onBack: () => void;
}

export function Archive({ onBack }: ArchiveProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#e6eaf0] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-[#002663] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <h1 className="text-4xl font-bold mb-4">Activity Archive</h1>
          <p className="text-gray-600 mb-12">
            Complete history of events, services, and publications
          </p>

          <div className="space-y-4">
            {activitiesNewestFirst.map((activity, index) => {
              const Icon = activity.icon;
              const colorStyle = activityColorStyles[activity.color];

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ccd4e0')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                >
                  <div className="flex gap-6">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: colorStyle.backgroundColor }}
                    >
                      <Icon size={24} style={{ color: colorStyle.color }} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3
                          className="font-semibold text-lg transition-colors"
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#002663')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                        >
                          {activity.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 flex-shrink-0">
                          <Calendar size={14} />
                          <span>{activity.date}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-3">{activity.description}</p>

                      <a
                        href={activity.link}
                        className="inline-flex items-center gap-1 text-sm hover:underline"
                        style={{ color: '#002663' }}
                      >
                        Learn more
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
