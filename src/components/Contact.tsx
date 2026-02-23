import { Home, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import googleScholarIcon from '../assets/icons/google-scholar-svgrepo-com.svg';
import linkedinIcon from '../assets/icons/linkedin-svgrepo-com.svg';
import orcidIcon from '../assets/icons/orcid-svgrepo-com.svg';
import researchGateIcon from '../assets/icons/researchgate-svgrepo-com.svg';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-white" style={{ background: 'linear-gradient(to bottom right, #1a1a2e, #002663, #003d99)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12">Contacts</h2>

          {/* Contact Info and Social Links Grid */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            {/* Left Side - Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span className="text-lg">(610) 519-7329</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <a
                  href="mailto:xue.qin@villanova.edu"
                  className="text-lg transition-colors hover:opacity-80"
                >
                  xue.qin@villanova.edu
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Home size={20} className="mt-1" />
                <div className="text-lg">
                  Mendel Hall 167C<br />
                  800 Lancaster Ave<br />
                  Villanova, PA 19085
                </div>
              </div>
            </div>

            {/* Right Side - Social Links */}
            <div className="flex gap-4">
              <a
                href="https://scholar.google.com/citations?user=xPj5STQAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Google Scholar"
              >
                <img src={googleScholarIcon} alt="" className="w-7 h-7" />
              </a>
              <a
                href="https://orcid.org/0000-0003-2503-1527"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="ORCID iD"
              >
                <img src={orcidIcon} alt="" className="w-7 h-7" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Xue-Qin-8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="ResearchGate"
              >
                <img src={researchGateIcon} alt="" className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/xue-qin-39393a5b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm" style={{ color: '#b3c5d6' }}>
            <p>Updated Feb 2026</p>
            <p>© 2026 Xue Qin. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
