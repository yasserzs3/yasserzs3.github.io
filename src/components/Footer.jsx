import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCode, FaRocket } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/yasserzs3",
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      hoverColor: "hover:text-gray-800 dark:hover:text-white"
    },
    {
      href: "https://linkedin.com/in/yaserzk/",
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      hoverColor: "hover:text-teal-600"
    },
    {
      href: "https://instagram.com/yasser.zs3",
      icon: <FaInstagram className="text-xl" />,
      label: "Instagram",
      hoverColor: "hover:text-pink-500"
    },
    {
      href: "mailto:yasserzaher03@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      hoverColor: "hover:text-red-500"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" }
  ];
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-900 dark:to-slate-900 border-t border-gray-200/20 dark:border-gray-700/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
                  Yaser Shoshaa
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  AI Engineer & Full-Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Passionate about developing AI-powered solutions and building scalable applications. Specializing in 
              computer vision, machine learning models, and end-to-end MLOps pipelines based in Dubai, UAE.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-500">
              <FaRocket className="text-emerald-500" />
              <span>Available for new opportunities</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Let's Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.hoverColor} border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transform hover:scale-110 transition-all duration-200`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a 
                href="mailto:yasserzaher03@gmail.com"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium"
              >
                <FaEnvelope />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <p>&copy; {currentYear} Yaser Shoshaa. All rights reserved.</p>
            </div>
            

          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center space-x-1">
              <FaCode className="text-teal-500" />
              <span>Designed & developed with passion for innovation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 