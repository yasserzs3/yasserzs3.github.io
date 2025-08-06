import { motion } from 'framer-motion';
import { FaPython, FaReact, FaGitAlt, FaDocker, FaAws, FaNode } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiFastapi, SiLangchain, SiKubernetes, SiMongodb, SiPostgresql, SiRedis, SiTypescript, SiNextdotjs, SiGraphql, SiOpenai } from 'react-icons/si';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: 'PyTorch', icon: <SiPytorch />, color: 'text-orange-500', level: 90 },
      { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-600', level: 85 },
      { name: 'LangChain', icon: <SiLangchain />, color: 'text-green-500', level: 80 },
      { name: 'OpenAI', icon: <SiOpenai />, color: 'text-emerald-500', level: 88 },
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: 'Python', icon: <FaPython />, color: 'text-blue-500', level: 95 },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600', level: 85 },
      { name: 'JavaScript', icon: <FaNode />, color: 'text-yellow-500', level: 90 },
    ]
  },
  {
    title: "Frontend & Full-Stack",
    skills: [
      { name: 'React', icon: <FaReact />, color: 'text-cyan-500', level: 90 },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-800 dark:text-white', level: 85 },
      { name: 'FastAPI', icon: <SiFastapi />, color: 'text-green-600', level: 88 },
      { name: 'GraphQL', icon: <SiGraphql />, color: 'text-pink-500', level: 75 },
    ]
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400', level: 85 },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-600', level: 75 },
      { name: 'AWS', icon: <FaAws />, color: 'text-orange-400', level: 80 },
      { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500', level: 95 },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700', level: 85 },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600', level: 80 },
      { name: 'Redis', icon: <SiRedis />, color: 'text-red-600', level: 75 },
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
                With a passion for building intelligent systems, I specialize in developing scalable AI applications 
                that bridge the gap between cutting-edge research and real-world solutions. My expertise spans across 
                machine learning, deep learning, and modern web technologies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I thrive on solving complex problems through innovative approaches, whether it's designing neural 
                networks for computer vision, building conversational AI systems, or creating full-stack applications 
                that handle millions of users.
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
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`text-xl ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + 0.1 * skillIndex }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 w-8">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "5+", icon: "🚀" },
            { label: "Projects Completed", value: "50+", icon: "💼" },
            { label: "Technologies Mastered", value: "20+", icon: "⚡" },
            { label: "Lines of Code", value: "100K+", icon: "💻" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 