import { Phone, Mail, MapPin } from 'lucide-react';

export function Contacts() {
  return (
    <footer id="contacts" className="bg-[#000033] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-5xl mb-12">Contacts</h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              <span>(610) 519-7329</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5" />
              <a href="mailto:xue.qin@villanova.edu" className="hover:underline">
                xue.qin@villanova.edu
              </a>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <div>Mendel Hall 167C</div>
                <div>800 Lancaster Ave</div>
                <div>Villanova, PA 19085</div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="w-12 h-12 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Google Scholar"
            >
              <span className="text-[#000033] text-xl">G</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="ORCID"
            >
              <span className="text-[#000033] font-bold">iD</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="ResearchGate"
            >
              <span className="text-[#000033] font-bold text-sm">R<sup>G</sup></span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-[#000033] font-bold">in</span>
            </a>
          </div>
        </div>
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>Updated by 2024 October</p>
          <p>© 2024 Xue Qin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
