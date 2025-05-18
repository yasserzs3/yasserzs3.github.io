import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          AI Dev
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
            <a href="#home" onClick={toggleMenu} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#blog" onClick={toggleMenu} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 