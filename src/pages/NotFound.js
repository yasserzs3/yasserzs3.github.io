import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Button 
          as={Link} 
          to="/" 
          className="px-8 py-3 text-lg flex items-center justify-center mx-auto"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound; 