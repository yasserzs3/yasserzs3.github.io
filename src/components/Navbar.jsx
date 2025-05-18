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
    <nav className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-purple-600 dark:text-purple-400">
          Yaser Shoshaa
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
          <a href="#blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-purple-100 dark:bg-gray-700 text-purple-700 dark:text-purple-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-4 rounded-full bg-purple-100 dark:bg-gray-700 text-purple-700 dark:text-purple-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-600 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
            <a href="#blog" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 