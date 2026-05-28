import { motion } from 'framer-motion';
import { FaArrowDown, FaCode, FaBrain, FaRocket } from 'react-icons/fa';
import { SiPython, SiReact, SiTensorflow } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-28 bg-black">
      {/* Radiant Underlay Blobs (Cyan-Blue Accent) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 */}
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-500/20 filter blur-[120px] animate-mesh-1"></div>
        {/* Blob 2 */}
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-indigo-500/20 to-cyan-500/25 filter blur-[120px] animate-mesh-2"></div>
        {/* Blob 3 (subtle background fill) */}
        <div className="absolute bottom-[10%] left-[25%] w-[35vw] h-[35vw] rounded-full bg-blue-600/10 filter blur-[100px] animate-pulse"></div>
      </div>

      {/* Floating Animated Icons in the Canvas */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Code Icon */}
        <motion.div
          className="absolute top-[22%] left-[12%] text-cyan-400 opacity-30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, 8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode className="text-4xl md:text-5xl" />
        </motion.div>

        {/* Brain Icon */}
        <motion.div
          className="absolute top-[35%] right-[15%] text-indigo-400 opacity-35 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          animate={{ 
            y: [0, 20, 0], 
            rotate: [0, -10, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaBrain className="text-5xl md:text-6xl" />
        </motion.div>

        {/* Python Icon */}
        <motion.div
          className="absolute bottom-[28%] left-[16%] text-blue-400 opacity-25"
          animate={{ 
            y: [0, -12, 0], 
            rotate: [0, 5, 0] 
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiPython className="text-4xl md:text-5xl" />
        </motion.div>

        {/* TensorFlow Icon */}
        <motion.div
          className="absolute bottom-[35%] right-[10%] text-sky-400 opacity-30"
          animate={{ 
            y: [0, 15, 0], 
            rotate: [0, -6, 0] 
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiTensorflow className="text-4xl md:text-5xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="text-center max-w-5xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Welcome Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-950/40 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full border border-cyan-500/25 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>👋 Welcome to my digital space</span>
            </span>
          </motion.div>

          {/* Headline Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text-cyan drop-shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              Building the Future
            </span>
            <br />
            <span className="text-white">with AI & Code</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.h2 
            className="text-lg md:text-2xl font-bold mb-8 text-slate-300 font-heading tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer <span className="text-cyan-400">•</span> AI/ML Specialist <span className="text-cyan-400">•</span> Full-Stack Developer
          </motion.h2>
          
          {/* Brief Bio */}
          <motion.p 
            className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating intelligent systems that solve real-world problems. 
            I blend cutting-edge AI research with robust software engineering to build 
            scalable, impactful solutions.
          </motion.p>
          
          {/* Action Triggers */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="btn-cyan px-8 py-4 rounded-xl font-bold flex items-center space-x-2 text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <FaRocket className="text-sm" />
              <span>Explore My Work</span>
            </a>
            
            <a 
              href="#contact" 
              className="btn-cyan-outline px-8 py-4 rounded-xl font-bold flex items-center space-x-2 text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Let's Connect</span>
              <FaArrowDown className="text-xs animate-bounce" />
            </a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            className="mt-20 flex justify-center items-center space-x-8 opacity-40 hover:opacity-75 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className="flex items-center space-x-2 text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Built with:</span>
            </div>
            <div className="flex items-center space-x-6 text-xl">
              <SiPython className="text-blue-400 hover:scale-125 transition-transform duration-200" title="Python" />
              <SiReact className="text-cyan-400 hover:scale-125 transition-transform duration-200" title="React" />
              <SiTensorflow className="text-orange-400 hover:scale-125 transition-transform duration-200" title="TensorFlow" />
              <FaBrain className="text-indigo-400 hover:scale-125 transition-transform duration-200" title="AI Brain" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;