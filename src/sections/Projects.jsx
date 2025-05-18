import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Chess Games Analysis',
    description: 'Statistical analysis of chess games from Lichess platform using R statistical tools. Forked from FerasOo/chess-games-analysis.',
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['R', 'Statistics', 'Data Analysis'],
    github: 'https://github.com/yasserzs3/chess-games-analysis',
    demo: null
  },
  {
    id: 2,
    title: 'Conference Scheduling',
    description: 'A conference scheduling system built with HTML and other web technologies.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/yasserzs3/Conference-Scheduling',
    demo: null
  },
  {
    id: 3,
    title: 'Data Science Project',
    description: 'AIN 2002 Project - Data science and analytics implementation using Jupyter Notebook.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['Python', 'Jupyter Notebook', 'Data Science'],
    github: 'https://github.com/yasserzs3/Data_Science_Project',
    demo: null
  },
  {
    id: 4,
    title: 'ETL Pipeline for Retail Sales Data',
    description: 'Extract, Transform, Load pipeline developed for retail sales data processing using Python.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['Python', 'ETL', 'Data Processing'],
    github: 'https://github.com/yasserzs3/ETL-Pipeline-for-Retail-Sales-Data',
    demo: null
  },
  {
    id: 5,
    title: 'MongoDB Statefulset With Microsoft Azure',
    description: 'Implementation of MongoDB Statefulset with Microsoft Azure cloud infrastructure.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['Python', 'MongoDB', 'Microsoft Azure', 'Kubernetes'],
    github: 'https://github.com/yasserzs3/Monogodb-Statefulset-With-Microsoft-Azure',
    demo: null
  },
  {
    id: 6,
    title: 'Recommender System IBCF',
    description: 'Fast C++ Recommender System using Item-Based Collaborative Filtering. Forked from FerasOo/recommender-system-ibcf.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    technologies: ['C++', 'Collaborative Filtering', 'Recommender Systems'],
    github: 'https://github.com/yasserzs3/recommender-system-ibcf',
    demo: null
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
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
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full"
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
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
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