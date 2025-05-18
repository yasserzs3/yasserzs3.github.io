import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'NLP-Powered Chat Assistant',
    description: 'A conversational AI assistant using transformer models and LangChain for context-aware responses and knowledge retrieval.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813070c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['PyTorch', 'Transformers', 'LangChain', 'FastAPI'],
    github: 'https://github.com/',
    demo: 'https://demo.example.com/'
  },
  {
    id: 2,
    title: 'Computer Vision Object Detector',
    description: 'Real-time object detection system trained on custom datasets with YOLOv5 architecture. Deployed with TensorRT for optimized inference.',
    image: 'https://images.unsplash.com/photo-1686920740746-5cfaf457df67?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV', 'TensorRT'],
    github: 'https://github.com/',
    demo: null
  },
  {
    id: 3,
    title: 'AI Stock Trading Strategy',
    description: 'Reinforcement learning model for automated trading strategies, using historical market data and sentiment analysis.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['TensorFlow', 'Reinforcement Learning', 'Pandas', 'FastAPI'],
    github: 'https://github.com/',
    demo: 'https://demo.example.com/'
  },
  {
    id: 4,
    title: 'ML Health Monitoring Platform',
    description: 'End-to-end platform for health data collection, analysis and personalized recommendations using machine learning.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['React', 'TensorFlow.js', 'Python', 'Flask', 'MongoDB'],
    github: 'https://github.com/',
    demo: 'https://demo.example.com/'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of AI and machine learning projects I've built. Each project demonstrates different aspects of my technical skills.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden h-full flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 