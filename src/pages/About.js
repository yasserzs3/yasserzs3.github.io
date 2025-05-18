import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faMobileAlt, faToolbox } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: faCode,
      items: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS", "Redux", "TypeScript"]
    },
    {
      category: "Backend",
      icon: faServer,
      items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Mobile",
      icon: faMobileAlt,
      items: ["React Native", "iOS Basics", "Android Basics", "Flutter"]
    },
    {
      category: "Tools & Deployment",
      icon: faToolbox,
      items: ["Git", "Docker", "AWS", "Firebase", "CI/CD", "Jest", "Webpack"]
    }
  ];

  const experiences = [
    {
      year: "2022 - Present",
      company: "TechCorp Inc.",
      title: "Senior Frontend Developer",
      description: "Leading the frontend development team, implementing new features, and improving performance across web applications."
    },
    {
      year: "2020 - 2022",
      company: "WebSolutions Ltd.",
      title: "Full Stack Developer",
      description: "Developed and maintained multiple web applications using React, Node.js, and MongoDB."
    },
    {
      year: "2018 - 2020",
      company: "CodeLab",
      title: "Junior Developer",
      description: "Started as a junior web developer working on HTML, CSS, JavaScript, and WordPress sites."
    },
    {
      year: "2018",
      company: "University of Technology",
      title: "Computer Science Graduate",
      description: "Graduated with a Bachelor's degree in Computer Science with a focus on web technologies and software engineering."
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            About Me
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Get to know more about me, my experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="https://via.placeholder.com/800x800/3B82F6/FFFFFF?text=Profile+Photo" 
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white text-xl font-bold py-4 px-6 rounded-lg shadow-lg">
                6+ Years Experience
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Profile
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate full-stack developer with over 6 years of experience building web and mobile applications. I specialize in React ecosystem on the frontend and Node.js on the backend.
              </p>
              <p>
                My approach to development focuses on writing clean, maintainable code and creating intuitive user experiences. I'm constantly learning new technologies and best practices to stay at the forefront of the industry.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects. I believe in sharing knowledge and giving back to the developer community.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Experience Timeline
          </h2>
          
          <div className="relative border-l-4 border-blue-600 dark:border-blue-500 ml-6 md:ml-12 pl-8 md:pl-12 pb-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-14 md:-left-16 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md">
                  {index + 1}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
                    {exp.company}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-4 flex items-center space-x-3">
                  <FontAwesomeIcon icon={skill.icon} className="h-5 w-5" />
                  <h3 className="text-lg font-bold">{skill.category}</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                        <svg className="h-4 w-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 