import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaClock, FaEye, FaBookmark } from 'react-icons/fa';
import { SiPython, SiReact, SiTensorflow, SiKubernetes } from 'react-icons/si';

const blogPosts = [
  {
    id: 1,
    title: 'Building Production-Ready ML Pipelines with MLOps',
    excerpt: 'A comprehensive guide to implementing MLOps practices for reliable, scalable machine learning systems in production environments.',
    date: 'January 15, 2024',
    readTime: '8 min read',
    views: 2340,
    category: 'MLOps',
    tags: ['MLOps', 'DevOps', 'Machine Learning'],
    icon: <SiKubernetes className="text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'Advanced React Patterns for Large-Scale Applications',
    excerpt: 'Exploring compound components, render props, and custom hooks to build maintainable React applications that scale.',
    date: 'December 8, 2023',
    readTime: '12 min read',
    views: 1890,
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'Architecture'],
    icon: <SiReact className="text-cyan-500" />,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    featured: false
  },
  {
    id: 3,
    title: 'Optimizing Deep Learning Models for Edge Deployment',
    excerpt: 'Techniques for model compression, quantization, and pruning to deploy neural networks on resource-constrained devices.',
    date: 'November 22, 2023',
    readTime: '10 min read',
    views: 3120,
    category: 'Deep Learning',
    tags: ['PyTorch', 'TensorFlow', 'Edge AI'],
    icon: <SiTensorflow className="text-orange-500" />,
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    featured: false
  },
  {
    id: 4,
    title: 'Implementing Microservices with Python FastAPI',
    excerpt: 'Building scalable microservice architectures using FastAPI, with practical examples of authentication, caching, and monitoring.',
    date: 'October 30, 2023',
    readTime: '15 min read',
    views: 2760,
    category: 'Backend',
    tags: ['Python', 'FastAPI', 'Microservices'],
    icon: <SiPython className="text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    featured: false
  },
  {
    id: 5,
    title: 'Responsible AI: Building Ethical Machine Learning Systems',
    excerpt: 'A framework for developing AI systems that are fair, transparent, and accountable, with real-world case studies.',
    date: 'September 18, 2023',
    readTime: '11 min read',
    views: 1650,
    category: 'AI Ethics',
    tags: ['AI Ethics', 'Responsible AI', 'Fairness'],
    icon: <FaBookmark className="text-purple-500" />,
    image: 'https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    featured: false
  },
  {
    id: 6,
    title: 'Real-time Data Processing with Apache Kafka and Python',
    excerpt: 'Setting up event-driven architectures for real-time data streaming and processing at scale using Kafka ecosystem.',
    date: 'August 14, 2023',
    readTime: '13 min read',
    views: 2180,
    category: 'Data Engineering',
    tags: ['Kafka', 'Python', 'Streaming'],
    icon: <SiPython className="text-green-600" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    featured: false
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="pb-16 md:pb-24 pt-8 md:pt-12 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
            Latest Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Exploring the intersection of AI, software engineering, and technology innovation. 
            Practical insights from real-world projects and cutting-edge research.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-700/20 lg:flex">
              <div className="lg:w-1/2 h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                    Featured
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {featuredPost.icon}
                    <span className="ml-2">{featuredPost.category}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <FaEye className="mr-1" />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-teal-100/70 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-medium"
                >
                  <span>Read Full Article</span>
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 text-white">
                    {post.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <FaClock className="mr-1 text-xs" />
                      <span className="text-xs">{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <FaEye className="mr-1 text-xs" />
                      <span className="text-xs">{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-teal-100/50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>Read</span>
                    <FaArrowRight className="ml-1 text-xs" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300"
          >
            <span>View All Articles</span>
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 