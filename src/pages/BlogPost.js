import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import blogPosts from '../data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

// Note: You need to install react-markdown:
// npm install react-markdown

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  useEffect(() => {
    // If post doesn't exist, redirect to blog page
    if (!post) {
      navigate('/blog');
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Blog
        </Link>
        
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              <span>{formattedDate}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="prose prose-blue dark:prose-dark max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost; 