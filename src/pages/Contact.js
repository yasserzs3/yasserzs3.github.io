import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });
      
      try {
        // Mock API call
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(formState),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        
        if (response.ok) {
          setStatus({
            type: 'success',
            message: 'Your message has been sent! I\'ll get back to you soon.'
          });
          
          // Reset form
          setFormState({
            name: '',
            email: '',
            message: ''
          });
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setStatus({
          type: 'error',
          message: 'There was a problem sending your message. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
              Contact Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a question or want to work together? Feel free to get in touch.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            {status.message && (
              <div className={`mb-6 p-4 rounded-md ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100'
                  : 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100'
              }`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon 
                      icon={status.type === 'success' ? faCheckCircle : faExclamationCircle} 
                      className={status.type === 'success' ? 'text-green-600 dark:text-green-300' : 'text-red-600 dark:text-red-300'}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormInput
                id="name"
                name="name"
                label="Name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              
              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Your email address"
                value={formState.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              
              <FormTextarea
                id="message"
                name="message"
                label="Message"
                placeholder="Your message"
                value={formState.message}
                onChange={handleChange}
                error={errors.message}
                rows={6}
                required
              />
              
              <div className="mt-6">
                <Button
                  type="submit"
                  className="w-full py-3 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Other Ways to Connect
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">john.doe@example.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Follow Me</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find me on{' '}
                  <a href="https://github.com/username" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>,{' '}
                  <a href="https://linkedin.com/in/username" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>,{' '}
                  <a href="https://twitter.com/username" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 