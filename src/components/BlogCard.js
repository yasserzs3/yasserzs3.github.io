import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const { title, slug, date, excerpt } = post;
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {formattedDate}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          <Link 
            to={`/blog/${slug}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
        >
          Read more
          <svg 
            className="ml-1 w-4 h-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard; 