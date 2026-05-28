import { motion } from 'framer-motion';
import { FaPython, FaReact, FaGitAlt, FaDocker, FaAws, FaNode } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiFastapi, SiLangchain, SiKubernetes, SiMongodb, SiPostgresql, SiRedis, SiTypescript, SiNextdotjs, SiOpenai } from 'react-icons/si';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: 'PyTorch', icon: <SiPytorch />, color: 'text-orange-500 hover:text-emerald-400' },
      { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-600 hover:text-emerald-400' },
      { name: 'Computer Vision', icon: <SiOpenai />, color: 'text-emerald-400 hover:text-emerald-300' },
      { name: 'Deep Learning', icon: <SiLangchain />, color: 'text-green-400 hover:text-emerald-300' },
      { name: 'MLOps', icon: <SiKubernetes />, color: 'text-blue-500 hover:text-emerald-400' },
      { name: 'ETL Pipelines', icon: <SiRedis />, color: 'text-red-500 hover:text-emerald-400' },
    ]
  },
  {
    title: "Development Stack",
    skills: [
      { name: 'Python', icon: <FaPython />, color: 'text-blue-400 hover:text-emerald-400' },
      { name: 'JavaScript', icon: <FaNode />, color: 'text-yellow-400 hover:text-emerald-400' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500 hover:text-emerald-400' },
      { name: 'React', icon: <FaReact />, color: 'text-cyan-400 hover:text-emerald-400' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white hover:text-emerald-400' },
      { name: 'FastAPI', icon: <SiFastapi />, color: 'text-emerald-500 hover:text-emerald-400' },
    ]
  },
  {
    title: "Infrastructure & Data",
    skills: [
      { name: 'Docker', icon: <FaDocker />, color: 'text-sky-400 hover:text-emerald-400' },
      { name: 'Azure', icon: <FaAws />, color: 'text-orange-400 hover:text-emerald-400' },
      { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500 hover:text-emerald-400' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500 hover:text-emerald-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600 hover:text-emerald-400' },
      { name: 'R Statistical', icon: <SiTensorflow />, color: 'text-sky-500 hover:text-emerald-400' },
    ]
  }
];

const About = () => {
  return (
    <section id="about" className="pb-24 pt-16 relative overflow-hidden bg-black">
      {/* Background Emerald Mesh Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-emerald-500/25 to-teal-500/20 filter blur-[120px] animate-mesh-1"></div>
        <div className="absolute bottom-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-green-500/20 to-emerald-500/25 filter blur-[100px] animate-mesh-2"></div>
      </div>

      <div className="container">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight font-heading">
            <span className="gradient-text-emerald drop-shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Transforming complex data and algorithms into intelligent, user-centric software solutions through code, creativity, and modern MLOps orchestration.
          </p>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <div className="glass-emerald p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full filter blur-xl"></div>
              <h3 className="text-xl font-bold mb-4 text-white flex items-center space-x-2 font-heading">
                <span className="text-xl">🚀</span>
                <span>Software Engineer & AI Specialist</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                Passionate about developing AI-powered solutions and building scalable applications. I work on 
                computer vision projects, machine learning models, and end-to-end MLOps pipelines. My expertise 
                includes brain tumor segmentation using U-Net architectures, multi-model detection systems, and 
                data processing pipelines.
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                I enjoy working with modern technologies including Python, React, and cloud infrastructure. 
                Whether it's building neural networks for medical imaging, creating ETL pipelines for data analysis, 
                or developing web applications, I focus on creating practical solutions to real-world problems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-emerald p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center space-x-2 font-heading">
                <span className="text-xl">💡</span>
                <span>Innovation & Impact</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Beyond code, I'm passionate about the ethical development of AI and its potential to solve humanity's 
                greatest challenges. I contribute to open-source projects, mentor aspiring developers, and stay at 
                the forefront of technological advancement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-emerald p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center space-x-2 font-heading">
                <span className="text-xl">🎯</span>
                <span>Current Focus</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Currently diving deep into advanced computer vision techniques and exploring the intersection of 
                AI and healthcare technology. Working on projects that involve medical image analysis, automated 
                diagnostic systems, and scalable ML infrastructure.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  Medical AI
                </span>
                <span className="px-3.5 py-1.5 bg-teal-500/10 border border-teal-500/25 text-teal-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  Computer Vision
                </span>
                <span className="px-3.5 py-1.5 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  MLOps
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="glass-emerald p-6 shadow-xl"
              >
                <h4 className="text-base font-extrabold mb-4 text-white tracking-widest uppercase font-heading flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                  {category.title}
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center space-x-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group shadow-sm cursor-pointer"
                    >
                      <div className={`text-xl transition-all duration-300 group-hover:scale-110 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-slate-300 group-hover:text-white transition-colors text-xs md:text-sm tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;