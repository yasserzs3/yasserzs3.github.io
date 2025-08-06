import { motion } from 'framer-motion';
import { FaArrowDown, FaCode, FaBrain, FaRocket } from 'react-icons/fa';
import { SiPython, SiReact, SiTensorflow } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden -mt-16 pt-16 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-emerald-950">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-teal-500 dark:text-teal-400 opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode className="text-4xl" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-16 text-emerald-500 dark:text-emerald-400 opacity-20"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaBrain className="text-5xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-cyan-500 dark:text-cyan-400 opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiPython className="text-4xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-12 text-orange-500 dark:text-orange-400 opacity-20"
          animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiTensorflow className="text-4xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-sm font-medium rounded-full mb-4">
              👋 Welcome to my digital space
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-400 dark:via-emerald-400 dark:to-cyan-400">
              Building the Future
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">with AI & Code</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-medium mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer • AI/ML Specialist • Full-Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating intelligent systems that solve real-world problems. 
            I blend cutting-edge AI research with robust software engineering to build 
            scalable, impactful solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="btn btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <FaRocket className="text-lg" />
              <span>Explore My Work</span>
            </a>
            
            <a 
              href="#contact" 
              className="btn btn-secondary inline-flex items-center space-x-2 text-lg px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-teal-200 dark:border-teal-700 rounded-xl hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <span>Let's Connect</span>
              <FaArrowDown className="text-sm" />
            </a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            className="mt-16 flex justify-center items-center space-x-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <span className="text-sm font-medium">Built with:</span>
            </div>
            <SiPython className="text-2xl text-cyan-600 dark:text-cyan-400" />
            <SiReact className="text-2xl text-teal-500 dark:text-teal-400" />
            <SiTensorflow className="text-2xl text-orange-500 dark:text-orange-400" />
            <FaBrain className="text-2xl text-emerald-600 dark:text-emerald-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 