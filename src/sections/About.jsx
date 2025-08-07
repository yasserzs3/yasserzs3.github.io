import { motion } from 'framer-motion';
import { FaPython, FaReact, FaGitAlt, FaDocker, FaAws, FaNode } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiFastapi, SiLangchain, SiKubernetes, SiMongodb, SiPostgresql, SiRedis, SiTypescript, SiNextdotjs, SiGraphql, SiOpenai } from 'react-icons/si';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: 'PyTorch', icon: <SiPytorch />, color: 'text-orange-500' },
      { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-600' },
      { name: 'Computer Vision', icon: <SiOpenai />, color: 'text-emerald-500' },
      { name: 'Deep Learning', icon: <SiLangchain />, color: 'text-green-500' },
      { name: 'MLOps', icon: <SiKubernetes />, color: 'text-blue-600' },
      { name: 'ETL Pipelines', icon: <SiRedis />, color: 'text-red-600' },
    ]
  },
  {
    title: "Development Stack",
    skills: [
      { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <FaNode />, color: 'text-yellow-500' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
      { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-800 dark:text-white' },
      { name: 'FastAPI', icon: <SiFastapi />, color: 'text-green-600' },
    ]
  },
  {
    title: "Infrastructure & Data",
    skills: [
      { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400' },
      { name: 'Azure', icon: <FaAws />, color: 'text-orange-400' },
      { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
      { name: 'R', icon: <SiTensorflow />, color: 'text-blue-400' },
    ]
  }
];

const About = () => {
  return (
    <section id="about" className="pb-16 md:pb-24 pt-8 md:pt-12 bg-gradient-to-br from-white to-teal-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into intelligent solutions through code, creativity, and cutting-edge technology.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                🚀 Software Engineer & AI Specialist
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Passionate about developing AI-powered solutions and building scalable applications. I work on 
                computer vision projects, machine learning models, and end-to-end MLOps pipelines. My expertise 
                includes brain tumor segmentation using U-Net architectures, multi-model detection systems, and 
                data processing pipelines.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I enjoy working with modern technologies including Python, React, and cloud infrastructure. 
                Whether it's building neural networks for medical imaging, creating ETL pipelines for data analysis, 
                or developing web applications, I focus on creating practical solutions to real-world problems.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                💡 Innovation & Impact
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond code, I'm passionate about the ethical development of AI and its potential to solve humanity's 
                greatest challenges. I contribute to open-source projects, mentor aspiring developers, and stay at 
                the forefront of technological advancement.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                🎯 Current Focus
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Currently diving deep into advanced computer vision techniques and exploring the intersection of 
                AI and healthcare technology. Working on projects that involve medical image analysis, automated 
                diagnostic systems, and scalable ML infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm">Medical AI</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">MLOps</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20"
              >
                <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                      className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-200"
                    >
                      <div className={`text-xl ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
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