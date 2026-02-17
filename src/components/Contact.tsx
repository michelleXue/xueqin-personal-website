import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, GraduationCap, Home } from 'lucide-react';

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
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap size={28} className="text-gray-800" />
              </a>
              <a
                href="https://orcid.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="ORCID iD"
              >
                <svg width="28" height="28" viewBox="0 0 256 256" fill="none">
                  <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
                  <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM78.2 72.1c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9-4 8.9-8.9 8.9zm98.4 114.1h-15.3v-52.1c0-5.7-.1-13.1-8-13.1-8 0-9.2 6.2-9.2 12.7v52.5h-15.3V79.1h14.7v14.7h.2c2-3.8 7-7.8 14.4-7.8 15.4 0 18.2 10.1 18.2 23.3v76.9z" fill="white"/>
                </svg>
              </a>
              <a
                href="https://www.researchgate.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="ResearchGate"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.974c0 .8.248 1.475.738 2.022-.05.047-.11.097-.17.15l-1.434 1.356a8.157 8.157 0 0 0-.817-.731 6.168 6.168 0 0 0-1.425-.71 5.835 5.835 0 0 0-1.77-.264c-1.136 0-2.165.302-3.084.903-.919.6-1.627 1.41-2.124 2.425-.497 1.016-.746 2.163-.746 3.443 0 1.262.249 2.405.746 3.43.497 1.025 1.205 1.84 2.124 2.443.92.602 1.948.903 3.084.903.748 0 1.434-.112 2.06-.338a6.456 6.456 0 0 0 1.665-.902c.5-.377.94-.789 1.323-1.237l1.503 1.424c.1.094.176.14.227.14.068 0 .128-.034.18-.102.052-.068.077-.136.077-.204 0-.085-.034-.153-.102-.204l-1.434-1.356c.562-.728.974-1.543 1.237-2.445.263-.903.395-1.831.395-2.786 0-.748-.083-1.461-.248-2.137a7.63 7.63 0 0 0-.737-1.89 6.514 6.514 0 0 0-1.136-1.524l1.434-1.356c.068-.068.102-.136.102-.204 0-.085-.034-.153-.102-.204-.051-.034-.111-.051-.18-.051-.068 0-.128.017-.18.051l-1.434 1.356a6.977 6.977 0 0 0-1.237-.903 5.835 5.835 0 0 0-1.77-.264z" fill="#00D0B1"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} className="text-[#0A66C2]" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm" style={{ color: '#b3c5d6' }}>
            <p>Updated October 2024</p>
            <p>© 2024 Xue Qin. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
