import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubLink, demoLink } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <Button 
            as="a" 
            href={githubLink} 
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="flex-1 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Code
          </Button>
          
          <Button 
            as="a" 
            href={demoLink} 
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="flex-1 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 