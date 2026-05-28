import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check if user has previously set a theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Scroll listener to update active section link
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-5xl glass-navbar py-3 px-6 transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <img 
              src="/logo.svg" 
              alt="Yaser Shoshaa Logo" 
              className="w-full h-full object-contain filter brightness-0 invert"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-black font-extrabold text-sm hidden">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black bg-gradient-to-r from-white via-cyan-300 to-emerald-400 bg-clip-text text-transparent dark:from-white dark:via-cyan-300 dark:to-emerald-400 font-heading">
              Yaser Shoshaa
            </span>
            <span className="text-[10px] text-cyan-400 dark:text-cyan-400 font-bold -mt-0.5 tracking-wider uppercase">
              AI Engineer
            </span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/10 dark:bg-white/10 text-cyan-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/5' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          
          <div className="w-px h-5 bg-white/10 mx-3"></div>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/5"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun className="text-sm text-amber-400 animate-pulse" /> : <FaMoon className="text-sm text-cyan-400" />}
          </button>
        </div>
        
        {/* Mobile Menu Trigger & Dark Mode toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/5 text-slate-300 border border-white/5"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun className="text-xs text-amber-400" /> : <FaMoon className="text-xs text-cyan-400" />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full bg-white/5 text-slate-300 border border-white/5 transition-all duration-300 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-xs" /> : <FaBars className="text-xs" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer (Expandable glass card) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full rounded-3xl bg-slate-950/95 dark:bg-black/95 backdrop-blur-2xl border border-white/10 p-5 mt-2 shadow-2xl flex flex-col space-y-2 z-40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={toggleMenu} 
                className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;