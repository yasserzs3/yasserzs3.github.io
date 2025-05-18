import { motion } from 'framer-motion';
import { FaPython, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiFastapi, SiLangchain } from 'react-icons/si';

const skills = [
  { name: 'PyTorch', icon: <SiPytorch />, color: 'text-orange-500' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-blue-500' },
  { name: 'Python', icon: <FaPython />, color: 'text-green-500' },
  { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-500' },
  { name: 'LangChain', icon: <SiLangchain />, color: 'text-purple-500' },
  { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
  { name: 'Docker', icon: <FaDocker />, color: 'text-blue-600' }
];

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">AI Developer & ML Engineer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With over 5 years of experience in machine learning and artificial intelligence, I specialize in developing
              intelligent systems that solve real-world problems. My expertise lies in natural language processing, 
              computer vision, and reinforcement learning.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I've worked on a variety of projects ranging from developing conversational AI assistants to implementing
              computer vision systems for automated quality control. My approach combines strong theoretical foundations
              with practical engineering skills to deliver robust and scalable AI solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Beyond technical expertise, I'm passionate about making AI more accessible and ethical. I regularly 
              contribute to open-source projects and participate in knowledge-sharing initiatives within the AI community.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700"
                >
                  <div className={`text-3xl mb-2 ${skill.color}`}>{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 