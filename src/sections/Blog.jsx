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
    icon: <SiKubernetes className="text-blue-400" />,
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
    icon: <SiReact className="text-cyan-400" />,
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
    icon: <SiTensorflow className="text-orange-400" />,
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
    icon: <SiPython className="text-blue-400" />,
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
    icon: <FaBookmark className="text-purple-400" />,
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
    icon: <SiPython className="text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
    featured: false
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="pb-24 pt-16 relative overflow-hidden bg-black">
      {/* Background Pink & Orange Mesh Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/25 filter blur-[120px] animate-mesh-1"></div>
        <div className="absolute top-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-red-500/20 to-pink-600/25 filter blur-[100px] animate-mesh-2"></div>
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
            <span className="gradient-text-pink drop-shadow-[0_0_30px_rgba(236,72,153,0.15)]">
              Latest Insights
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
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
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="group glass-pink shadow-xl lg:flex overflow-hidden">
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mr-4 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    Featured
                  </span>
                  <div className="flex items-center text-xs font-bold text-pink-400 uppercase tracking-wider">
                    {featuredPost.icon}
                    <span className="ml-2">{featuredPost.category}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors font-heading leading-snug">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-4 items-center justify-between border-t border-white/5 pt-6 mb-6">
                  <div className="flex items-center space-x-5 text-xs text-slate-400">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1.5 text-pink-400" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1.5 text-pink-400" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <FaEye className="mr-1.5 text-pink-400" />
                      <span>{featuredPost.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 bg-pink-500/10 border border-pink-500/15 text-pink-300 rounded-lg text-xs font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="btn-pink px-6 py-3 rounded-xl font-bold flex items-center space-x-2 text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(236,72,153,0.3)] w-fit"
                >
                  <span>Read Full Article</span>
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="group glass-pink shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/55 backdrop-blur-md border border-white/10 p-2.5 rounded-xl shadow-lg text-lg">
                  {post.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-wider text-pink-400">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-3 text-[11px] text-slate-500">
                      <div className="flex items-center">
                        <FaClock className="mr-1 text-slate-600" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <FaEye className="mr-1 text-slate-600" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors font-heading leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 bg-pink-500/5 border border-pink-500/10 text-pink-300 rounded-md text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-6">
                  <div className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <FaCalendarAlt className="mr-1 text-slate-600" />
                    <span>{post.date}</span>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 font-extrabold text-xs group-hover:translate-x-1 transition-all duration-300 uppercase tracking-widest"
                  >
                    <span>Read</span>
                    <FaArrowRight className="ml-1 text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Footer Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 hover:bg-pink-500/10 text-slate-300 hover:text-white border border-white/5 hover:border-pink-500/30 rounded-xl transition-all duration-300 font-bold text-sm tracking-wide transform hover:scale-105 active:scale-95 shadow-md mx-auto w-fit"
          >
            <span>View All Articles</span>
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;