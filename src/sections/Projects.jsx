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
        title: 'Multi-Model Detection for Waste Collection',
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
        title: 'MongoDB Statefulset on Azure',
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
        title: 'Classic Snake Game',
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
    <section id="projects" className="pb-24 pt-16 relative overflow-hidden bg-black">
      {/* Background Purple/Violet Mesh Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/25 filter blur-[120px] animate-mesh-1"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-fuchsia-500/20 to-violet-600/25 filter blur-[100px] animate-mesh-2"></div>
      </div>

      <div className="container">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight font-heading">
            <span className="gradient-text-purple drop-shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning AI/ML, data pipeline engineering, and cloud infrastructure. 
            Each project represents a unique challenge solved with modern technology.
          </p>
        </motion.div>
        
        {/* Categories Check-in */}
        {projectCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: catIdx * 0.05 }}
            className="mb-20"
          >
            {/* Category Header */}
            <h3 className="text-2xl font-black mb-8 text-white flex items-center font-heading">
              <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mr-4 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
              <span>{category.title}</span>
            </h3>
            
            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {category.projects.map((project, projIdx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: projIdx * 0.05 }}
                  className={`group glass-purple shadow-xl overflow-hidden flex flex-col justify-between ${
                    project.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center space-x-1.5 shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                        <FaStar className="text-amber-300 animate-spin-slow" />
                        <span>Featured Project</span>
                      </span>
                    </div>
                  )}
                  
                  <div className={`flex flex-col h-full ${project.featured ? 'md:flex-row' : ''}`}>
                    {/* Image Block */}
                    <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2 h-72 md:h-auto min-h-[250px]' : 'h-60'}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Content Block */}
                    <div className={`p-8 flex flex-col justify-between flex-grow ${project.featured ? 'md:w-1/2' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors font-heading">
                            {project.title}
                          </h4>
                          <div className="flex items-center space-x-2.5 text-slate-400">
                            {project.techIcons.map((icon, i) => (
                              <span key={i} className="text-lg hover:text-white transition-colors">
                                {icon}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map(tech => (
                            <span 
                              key={tech} 
                              className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/15 text-purple-300 rounded-lg text-xs font-semibold tracking-wide"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Links & Stats */}
                      <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6">
                        <div className="flex gap-4">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors text-sm font-bold tracking-wide"
                          >
                            <FaGithub className="text-lg" />
                            <span>Code</span>
                          </a>
                        </div>
                        
                        {/* Project Stars / Forks */}
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <div className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
                            <FaStar className="text-amber-500" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1 hover:text-purple-400 transition-colors">
                            <FaCode className="text-purple-500" />
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
        
        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <a 
            href="https://github.com/yasserzs3" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple px-8 py-4 rounded-xl font-bold flex items-center space-x-2 text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.3)] mx-auto w-fit"
          >
            <FaGithub className="text-lg" />
            <span>View All Projects on GitHub</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;