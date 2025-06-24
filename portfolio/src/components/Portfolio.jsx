import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronDown, Menu, X, } from 'lucide-react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'contact'];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'
        } backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Sarvjeet
            </button>

            <div className="hidden md:flex space-x-8">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-500 transition-colors duration-200 font-medium ${activeSection === section
                      ? 'text-blue-500'
                      : isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left px-4 py-2 rounded-lg transition-all duration-200 font-medium ${activeSection === section
                        ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : isDark
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                          : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
                      }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <Home scrollToSection={scrollToSection} isDark={isDark} isVisible={isVisible.home} ChevronDown={ChevronDown}/>


      {/* About Section */}
      <About scrollToSection={scrollToSection} isDark={isDark} isVisible={isVisible.about}/>


      {/* Contact Section */}
      <Contact isDark={isDark} isVisible={isVisible.contact}/>

      {/* Footer */}
      <Footer isDark={isDark}/>
    </div>
  );
};

export default Portfolio;