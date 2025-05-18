import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm John Doe</span>
            <span className="block mt-2 text-blue-600 dark:text-blue-400">Full Stack Developer</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
            I build modern web applications with React, Node.js, and more. Passionate about clean code, user experience, and solving real-world problems through technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              as={Link} 
              to="/projects" 
              className="px-8 py-3 text-lg flex items-center justify-center"
            >
              View Projects 
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
            
            <Button 
              as={Link} 
              to="/contact" 
              variant="outline"
              className="px-8 py-3 text-lg"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="mt-20 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Tech Stack
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {['React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                <div 
                  key={tech}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 