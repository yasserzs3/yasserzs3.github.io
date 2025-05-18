import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Building Explainable AI Systems',
    excerpt: 'How to create AI systems that can explain their decisions in ways humans can understand, enhancing trust and adoption.',
    date: 'May 15, 2023',
    category: 'Explainable AI',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80'
  },
  {
    id: 2,
    title: 'Fine-tuning LLMs for Domain-Specific Applications',
    excerpt: 'A step-by-step guide to fine-tuning large language models for specialized domains with limited computational resources.',
    date: 'August 23, 2023',
    category: 'NLP',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80'
  },
  {
    id: 3,
    title: 'Ethical Considerations in AI Development',
    excerpt: 'Exploring the ethical challenges in AI development and providing a framework for responsible innovation.',
    date: 'October 10, 2023',
    category: 'AI Ethics',
    image: 'https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="pb-16 md:pb-24 pt-8 md:pt-12 bg-purple-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Blog</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing thoughts and insights on AI, machine learning, and software development.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                  <span className="ml-4 px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium text-purple-600 dark:text-purple-400 hover:underline mt-auto"
                >
                  <span>Read more</span>
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="btn btn-secondary inline-flex items-center"
          >
            <span>View All Posts</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 