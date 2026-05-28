import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using Formspree for form handling
      const response = await fetch('https://formspree.io/f/meozpgrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  
  return (
    <section id="contact" className="pb-24 pt-16 relative overflow-hidden bg-black">
      {/* Background Indigo & Blue Mesh Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/25 filter blur-[120px] animate-mesh-1"></div>
        <div className="absolute bottom-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-violet-600/20 to-indigo-500/25 filter blur-[100px] animate-mesh-2"></div>
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
            <span className="gradient-text-indigo drop-shadow-[0_0_30px_rgba(99,102,241,0.15)]">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to bring your AI vision to life? Whether you're looking for a technical partner, want to discuss 
            innovative solutions, or just chat about the latest in machine learning, I'd love to connect.
          </p>
        </motion.div>
        
        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Info Card */}
            <div className="glass-indigo p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center space-x-2 font-heading">
                <span className="text-xl">🤝</span>
                <span>Let's Collaborate</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mr-4 shadow-[0_0_15px_rgba(99,102,241,0.25)]">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">Email</h4>
                    <a href="mailto:yasserzaher03@gmail.com" className="text-slate-300 hover:text-indigo-400 transition-colors text-sm font-semibold">
                      yasserzaher03@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mr-4 shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">Location</h4>
                    <p className="text-slate-300 text-sm font-semibold">
                      Dubai, United Arab Emirates
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Available for remote work globally
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="glass-indigo p-8 shadow-xl">
              <h3 className="text-lg font-bold mb-6 text-white font-heading">
                🌐 Connect with me
              </h3>
              <div className="flex space-x-3.5">
                <a 
                  href="https://linkedin.com/in/yaserzk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-indigo-500/10 rounded-xl flex items-center justify-center text-slate-300 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:text-indigo-400"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a 
                  href="https://github.com/yasserzs3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-indigo-500/10 rounded-xl flex items-center justify-center text-slate-300 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:text-white"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a 
                  href="https://instagram.com/yasser.zs3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-indigo-500/10 rounded-xl flex items-center justify-center text-slate-300 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:text-pink-400"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>

            {/* Quick response banner */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 rounded-2xl p-6 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full filter blur-xl"></div>
              <h3 className="text-lg font-bold mb-2 font-heading flex items-center space-x-2">
                <span>⚡</span>
                <span>Quick Response</span>
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
              </p>
            </div>
          </motion.div>
          
          {/* Form Message Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-indigo p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white font-heading">
                💬 Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-input-indigo text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-input-indigo text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-input-indigo text-sm"
                  >
                    <option value="" className="bg-slate-950 text-slate-400">Select project type</option>
                    <option value="AI/ML Development" className="bg-slate-950 text-slate-200">AI/ML Development</option>
                    <option value="Full-Stack Application" className="bg-slate-950 text-slate-200">Full-Stack Application</option>
                    <option value="Data Engineering" className="bg-slate-950 text-slate-200">Data Engineering</option>
                    <option value="Technical Consultation" className="bg-slate-950 text-slate-200">Technical Consultation</option>
                    <option value="Partnership Opportunity" className="bg-slate-950 text-slate-200">Partnership Opportunity</option>
                    <option value="Other" className="bg-slate-950 text-slate-200">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="glass-input-indigo text-sm resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-indigo w-full px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.01] active:scale-95 disabled:scale-100 disabled:opacity-50 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-400 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl backdrop-blur-sm text-sm"
                  >
                    ✅ Message sent successfully! I'll get back to you within 24 hours.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 p-4 bg-red-500/10 border border-red-500/20 rounded-xl backdrop-blur-sm text-sm"
                  >
                    ❌ Failed to send message. Please try again or contact me directly at yasserzaher03@gmail.com
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;