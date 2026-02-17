import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-semibold bg-gradient-to-r from-[#002663] to-[#003d99] bg-clip-text text-transparent"
          >
            Xue Qin
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#002663] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="text-gray-700 hover:text-[#002663] transition-colors"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-[#002663] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('teaching')}
              className="text-gray-700 hover:text-[#002663] transition-colors"
            >
              Teaching
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#002663] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-[#002663] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="text-left text-gray-700 hover:text-[#002663] transition-colors"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-gray-700 hover:text-[#002663] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('teaching')}
              className="text-left text-gray-700 hover:text-[#002663] transition-colors"
            >
              Teaching
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 hover:text-[#002663] transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}