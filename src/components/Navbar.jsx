import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user has a dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Check if user has previously set a theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 p-2">
            <img 
              src="/logo.svg" 
              alt="Yaser Shoshaa Logo" 
              className="w-full h-full object-contain filter brightness-0 invert"
              onError={(e) => {
                // Fallback to letter if logo doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-white font-bold text-lg hidden">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
              Yaser Shoshaa
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
              AI Engineer
            </span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium">
            Home
          </a>
          <a href="#about" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium">
            About
          </a>
          <a href="#projects" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium">
            Projects
          </a>
          <a href="#blog" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium">
            Blog
          </a>
          <a href="#contact" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium">
            Contact
          </a>
          
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-4"></div>
          
          <button 
            onClick={toggleDarkMode}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 transform hover:scale-105"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-3">
            <a 
              href="#home" 
              onClick={toggleMenu} 
              className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={toggleMenu} 
              className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={toggleMenu} 
              className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium"
            >
              Projects
            </a>
            <a 
              href="#blog" 
              onClick={toggleMenu} 
              className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium"
            >
              Blog
            </a>
            <a 
              href="#contact" 
              onClick={toggleMenu} 
              className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 