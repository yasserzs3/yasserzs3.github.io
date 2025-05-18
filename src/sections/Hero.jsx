import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-violet-300 dark:bg-violet-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-fuchsia-300 dark:bg-fuchsia-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-purple-600 dark:text-purple-400">Yaser Shoshaa</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Developer, ML Engineer, Python Expert
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building intelligent systems and creating solutions at the intersection of AI and software engineering.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="btn btn-primary inline-flex items-center space-x-2 text-lg"
            >
              <span>View Projects</span>
              <FaArrowDown className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 