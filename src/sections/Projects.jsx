import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaStar, FaCode } from 'react-icons/fa';
import { SiPython, SiReact, SiTensorflow, SiKubernetes, SiMongodb, SiDocker } from 'react-icons/si';

const projectCategories = [
  {
    title: "AI & Machine Learning",
    projects: [
      {
        id: 1,
        title: 'Intelligent Document Processing System',
        description: 'Advanced AI system for document analysis and information extraction using computer vision and NLP. Processes 10K+ documents daily with 95% accuracy.',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
        techIcons: [<SiPython />, <SiTensorflow />, <SiDocker />],
        github: 'https://github.com/yasserzs3/intelligent-document-processing',
        demo: 'https://doc-processor-demo.vercel.app',
        featured: true,
        stats: { stars: 127, forks: 23 }
      },
      {
        id: 2,
        title: 'Real-time Sentiment Analysis API',
        description: 'Scalable sentiment analysis microservice with real-time processing capabilities. Handles social media data streams and provides instant insights.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'Transformers', 'Redis', 'PostgreSQL', 'Kubernetes'],
        techIcons: [<SiPython />, <SiKubernetes />],
        github: 'https://github.com/yasserzs3/sentiment-analysis-api',
        demo: null,
        featured: false,
        stats: { stars: 89, forks: 15 }
      },
      {
        id: 3,
        title: 'Recommender System IBCF',
        description: 'High-performance C++ recommender system using Item-Based Collaborative Filtering. Optimized for large-scale e-commerce platforms.',
        image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['C++', 'Collaborative Filtering', 'Machine Learning', 'Performance Optimization'],
        techIcons: [<FaCode />],
        github: 'https://github.com/yasserzs3/recommender-system-ibcf',
        demo: null,
        featured: false,
        stats: { stars: 45, forks: 12 }
      }
    ]
  },
  {
    title: "Full-Stack Applications",
    projects: [
      {
        id: 4,
        title: 'AI-Powered Task Management Platform',
        description: 'Modern productivity app with AI-driven task prioritization, smart scheduling, and team collaboration features. Built with Next.js and integrated ML models.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
        techIcons: [<SiReact />, <SiMongodb />],
        github: 'https://github.com/yasserzs3/ai-task-manager',
        demo: 'https://ai-taskmanager.vercel.app',
        featured: true,
        stats: { stars: 156, forks: 34 }
      },
      {
        id: 5,
        title: 'Real-time Analytics Dashboard',
        description: 'Interactive dashboard for business intelligence with real-time data visualization, custom metrics, and automated reporting capabilities.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Socket.io'],
        techIcons: [<SiReact />, <SiMongodb />],
        github: 'https://github.com/yasserzs3/analytics-dashboard',
        demo: 'https://analytics-dash.netlify.app',
        featured: false,
        stats: { stars: 73, forks: 19 }
      }
    ]
  },
  {
    title: "DevOps & Infrastructure",
    projects: [
      {
        id: 6,
        title: 'Kubernetes ML Pipeline',
        description: 'Scalable machine learning pipeline on Kubernetes with automated model training, deployment, and monitoring. Supports A/B testing and model versioning.',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Kubernetes', 'Docker', 'MLflow', 'Prometheus', 'Azure'],
        techIcons: [<SiKubernetes />, <SiDocker />],
        github: 'https://github.com/yasserzs3/kubernetes-ml-pipeline',
        demo: null,
        featured: true,
        stats: { stars: 92, forks: 28 }
      },
      {
        id: 7,
        title: 'ETL Pipeline for Retail Analytics',
        description: 'Robust data pipeline processing millions of retail transactions daily. Includes data validation, transformation, and real-time monitoring.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
        technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Redis', 'Grafana'],
        techIcons: [<SiPython />, <SiMongodb />],
        github: 'https://github.com/yasserzs3/retail-etl-pipeline',
        demo: null,
        featured: false,
        stats: { stars: 67, forks: 21 }
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
                          
                          {project.demo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                            >
                              <FaPlay className="text-sm" />
                              <span>Demo</span>
                            </a>
                          )}
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