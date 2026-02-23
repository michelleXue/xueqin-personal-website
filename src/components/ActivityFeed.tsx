import { motion } from 'motion/react';
import { Calendar, ExternalLink } from 'lucide-react';
import { activitiesNewestFirst, activityColorStyles } from '../data/activities/index';

export function ActivityFeed({ onViewArchive }: { onViewArchive: () => void }) {
  const displayedActivities = activitiesNewestFirst.slice(0, 5);

  return (
    <section id="activities" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Recent Activities</h2>
          <p className="text-gray-600 mb-8">
            Latest updates on events, services, and publications
          </p>

          <div className="space-y-4">
            {displayedActivities.map((activity, index) => {
              const Icon = activity.icon;
              const colorStyle = activityColorStyles[activity.color];

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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

          {activitiesNewestFirst.length > 5 && (
            <div className="text-center mt-8">
              <button
                onClick={onViewArchive}
                className="px-6 py-3 border-2 border-gray-200 rounded-lg hover:border-[#002663] transition-all text-gray-700 hover:text-[#002663]"
              >
                View Archive →
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
