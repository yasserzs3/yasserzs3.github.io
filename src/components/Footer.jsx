import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCode, FaRocket } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/yasserzs3",
      icon: <FaGithub className="text-lg" />,
      label: "GitHub",
      glowClass: "hover:text-white hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    },
    {
      href: "https://linkedin.com/in/yaserzk/",
      icon: <FaLinkedin className="text-lg" />,
      label: "LinkedIn",
      glowClass: "hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
    },
    {
      href: "https://instagram.com/yasser.zs3",
      icon: <FaInstagram className="text-lg" />,
      label: "Instagram",
      glowClass: "hover:text-pink-400 hover:border-pink-500/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
    },
    {
      href: "mailto:yasserzaher03@gmail.com",
      icon: <FaEnvelope className="text-lg" />,
      label: "Email",
      glowClass: "hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" }
  ];
  
  return (
    <footer className="relative bg-black/60 backdrop-blur-md border-t border-white/5 py-16 mt-20 overflow-hidden">
      {/* Background neon flares for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full filter blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-slate-950/30 dark:bg-black/30 border border-white/10 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 p-1 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.25)] group-hover:border-cyan-500/30">
                <img 
                  src="/logo.svg" 
                  alt="Yaser Shoshaa Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-white font-extrabold text-sm hidden font-heading">Y</span>
              </div>
              <div>
                <h2 className="text-lg font-black tracking-wide text-white font-heading">
                  Yaser Shoshaa
                </h2>
                <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider -mt-0.5">
                  AI Engineer & Developer
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Developing production-ready artificial intelligence models, computer vision systems, MLOps orchestration architectures, and full-stack software solutions out of Dubai, UAE.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <FaRocket className="animate-bounce text-xs" />
              <span>Available for new projects & roles</span>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium hover:pl-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Let's Connect
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-400 border border-white/5 transition-all duration-300 ${social.glowClass}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a 
                href="mailto:yasserzaher03@gmail.com"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                <FaEnvelope className="text-xs" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Sub-footer Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
          <p>&copy; {currentYear} Yaser Shoshaa. All rights reserved.</p>
          
          <p className="flex items-center space-x-1.5 font-semibold text-slate-600">
            <FaCode className="text-cyan-500" />
            <span>Designed & developed with passion for innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;