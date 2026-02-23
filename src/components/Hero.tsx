import { motion } from 'motion/react';
import profileImage from '../assets/profile.png';

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building{' '}
              <span className="bg-gradient-to-r from-[#002663] to-[#003d99] bg-clip-text text-transparent">
                Reliable & Accessible
              </span>{' '}
              Software
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hi! I'm <strong>Xue Qin</strong>, an Assistant Professor at{' '}
              <a
                href="https://www.villanova.edu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#002663' }}
                className="hover:underline"
              >
                Villanova University
              </a>
              ,{' '}
              <a
                href="https://www.villanova.edu/university/liberal-arts-sciences/programs/computing-sciences.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#002663' }}
                className="hover:underline"
              >
                Department of Computing Sciences
              </a>
              . 
              I focus on <strong>Software Testing</strong>, <strong>Accessibility</strong> on Virtual Reality and Mobile Applications, and I am also interested in designing and developing new <strong>AI-powered</strong> technologies.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              I'm passionate about empowering both undergraduates and graduate sudents to create technology that works for everyone. 
              If you're interested in research opportunities or collaboration, let's connect!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#002663] to-[#003d99] text-white rounded-lg hover:shadow-lg transition-all"
              >
                Find Opportunity
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-lg hover:border-[#002663] text-gray-700 hover:text-[#002663] transition-all"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{ background: 'linear-gradient(to bottom right, #002663, #003d99)' }}
              ></div>
              <img
                src={profileImage}
                alt="Xue Qin"
                className="relative w-full max-w-md aspect-square mx-auto rounded-full shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
