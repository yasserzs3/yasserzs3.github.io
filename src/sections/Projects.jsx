import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import { SiPython, SiReact, SiTensorflow, SiKubernetes, SiMongodb, SiDocker } from 'react-icons/si';

const projectCategories = [
  {
    title: "AI & Machine Learning",
    projects: [
      {
        id: 1,
        title: 'End-to-End MLOps Pipeline',
        description: 'Complete MLOps pipeline implementation with automated model training, deployment, and monitoring. Includes CI/CD for machine learning workflows and model versioning.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'MLflow', 'Docker', 'CI/CD', 'Monitoring'],
        techIcons: [<SiPython />, <SiDocker />],
        github: 'https://github.com/yasserzs3/End-to-End-MLOps-Pipeline',
        featured: true,
        stats: { stars: 0, forks: 0 }
      },
      {
        id: 2,
        title: 'U-Net Brain Tumor Segmentation',
        description: 'Deep learning model for brain tumor segmentation using U-Net architecture. Implemented in Jupyter Notebook with comprehensive analysis and visualization.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'U-Net', 'Deep Learning', 'Medical Imaging', 'Jupyter'],
        techIcons: [<SiPython />, <SiTensorflow />],
        github: 'https://github.com/yasserzs3/U-Net-Brain-Tumor-Segmentation',
        featured: false,
        stats: { stars: 0, forks: 0 }
      },
      {
        id: 3,
        title: 'Multi-Model Detection for Person Collecting Waste',
        description: 'Computer vision system using multiple detection models to identify people collecting waste. Practical application of AI for environmental monitoring.',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'Computer Vision', 'Object Detection', 'Multi-Model'],
        techIcons: [<SiPython />, <SiTensorflow />],
        github: 'https://github.com/yasserzs3/Multi-Model-Detection-for-Person-Collecting-Waste',
        featured: false,
        stats: { stars: 0, forks: 0 }
      },
      {
        id: 4,
        title: 'Recommender System IBCF',
        description: 'Fast C++ Recommender System using Item-Based Collaborative Filtering. Optimized for high-performance recommendation engines.',
        image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['C++', 'Collaborative Filtering', 'Algorithms', 'Performance'],
        techIcons: [<FaCode />],
        github: 'https://github.com/yasserzs3/recommender-system-ibcf',
        featured: false,
        stats: { stars: 0, forks: 0 }
      }
    ]
  },
  {
    title: "Data Engineering & Analytics",
    projects: [
      {
        id: 5,
        title: 'ETL Pipeline for Retail Sales Data',
        description: 'Robust Extract, Transform, Load pipeline for retail sales data processing. Built with Python for scalable data transformation and analysis.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'ETL', 'Data Processing', 'Analytics'],
        techIcons: [<SiPython />],
        github: 'https://github.com/yasserzs3/ETL-Pipeline-for-Retail-Sales-Data',
        featured: true,
        stats: { stars: 0, forks: 0 }
      },
      {
        id: 6,
        title: 'Data Science Project (AIN 2002)',
        description: 'Comprehensive data science project covering statistical analysis, machine learning, and data visualization. Academic project with practical implementations.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Jupyter Notebook', 'Data Science', 'Statistics', 'ML'],
        techIcons: [<SiPython />],
        github: 'https://github.com/yasserzs3/Data_Science_Project',
        featured: false,
        stats: { stars: 1, forks: 0 }
      },
      {
        id: 7,
        title: 'Chess Games Analysis',
        description: 'Statistical analysis of chess games from Lichess platform using R statistical tools. Data analysis and visualization of chess game patterns.',
        image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['R', 'Statistics', 'Data Analysis', 'Visualization'],
        techIcons: [<FaCode />],
        github: 'https://github.com/yasserzs3/chess-games-analysis',
        featured: false,
        stats: { stars: 0, forks: 0 }
      }
    ]
  },
  {
    title: "Full-Stack & Web Development",
    projects: [
      {
        id: 8,
        title: 'Portfolio Website',
        description: 'Modern, responsive portfolio website built with React and JavaScript. Features dark mode, smooth animations, and modern design patterns.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['JavaScript', 'React', 'CSS', 'Responsive Design'],
        techIcons: [<SiReact />],
        github: 'https://github.com/yasserzs3/yasserzs3.github.io',
        featured: false,
        stats: { stars: 0, forks: 0 }
      },
      {
        id: 9,
        title: 'Conference Scheduling System',
        description: 'Web-based conference scheduling application built with HTML, CSS, and JavaScript. Manages conference events, speakers, and attendee scheduling.',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
        techIcons: [<FaCode />],
        github: 'https://github.com/yasserzs3/Conference-Scheduling',
        featured: false,
        stats: { stars: 0, forks: 0 }
      }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    projects: [
      {
        id: 10,
        title: 'MongoDB Statefulset with Microsoft Azure',
        description: 'Implementation of MongoDB StatefulSet deployment on Microsoft Azure cloud platform. Includes Kubernetes configuration and cloud infrastructure setup.',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'MongoDB', 'Azure', 'Kubernetes', 'Cloud'],
        techIcons: [<SiPython />, <SiKubernetes />, <SiMongodb />],
        github: 'https://github.com/yasserzs3/Monogodb-Statefulset-With-Microsoft-Azure',
        featured: true,
        stats: { stars: 0, forks: 0 }
      }
    ]
  },
  {
    title: "Fun Projects",
    projects: [
      {
        id: 11,
        title: 'Snake Game',
        description: 'Classic Snake game implemented in Python. A fun project showcasing game development skills and Python programming fundamentals.',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'Game Development', 'Programming'],
        techIcons: [<SiPython />],
        github: 'https://github.com/yasserzs3/Snake',
        featured: false,
        stats: { stars: 0, forks: 0 }
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pb-16 md:pb-24 pt-8 md:pt-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, full-stack development, and cloud infrastructure. 
            Each project represents a unique challenge solved with modern technology.
          </p>
        </motion.div>
        
        {projectCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mr-4"></span>
              {category.title}
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                  className={`group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300 ${
                    project.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <FaStar className="text-xs" />
                        <span>Featured</span>
                      </span>
                    </div>
                  )}
                  
                  <div className={`${project.featured ? 'md:flex' : ''}`}>
                    <div className={`${project.featured ? 'md:w-1/2' : ''} h-64 overflow-hidden relative`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className={`p-6 ${project.featured ? 'md:w-1/2 flex flex-col justify-between' : ''}`}>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                            {project.techIcons.map((icon, iconIndex) => (
                              <span key={iconIndex} className="text-lg">
                                {icon}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map(tech => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 bg-teal-100/70 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                          >
                            <FaGithub className="text-lg" />
                            <span>Code</span>
                          </a>
                          

                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <FaStar className="text-yellow-500" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCode />
                            <span>{project.stats.forks}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a 
            href="https://github.com/yasserzs3" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-medium"
          >
            <FaGithub className="text-lg" />
            <span>View All Projects on GitHub</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 