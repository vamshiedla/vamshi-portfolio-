import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Portfolio Inquiry");
    window.location.href = `mailto:evamshi043@gmail.com?subject=${subject}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#101729]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#151c2e] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/40 rounded-full">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <button 
                    onClick={handleEmailClick}
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    evamshi043@gmail.com
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-900/40 rounded-full">
                  <Phone size={20} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href="tel:+919885411928" 
                    className="text-white hover:text-indigo-400 transition-colors duration-300"
                  >
                    +91 9885XXXXXX
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-400 text-sm mb-3">Social Profiles</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/vamshiedla" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-gray-300 hover:text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vamshi-edla-79b980256/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-gray-300 hover:text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/vamshi.7e/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-gray-300 hover:text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#151c2e] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Connect</h3>
            
            <div className="space-y-6">
              <button
                onClick={handleEmailClick}
                className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send me an email
              </button>

              <a
                href="https://www.linkedin.com/in/vamshi-edla-79b980256/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 text-white bg-[#0077B5] rounded-lg hover:bg-[#006396] transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>

              <a
                href="https://www.instagram.com/vamshi.7e/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-lg hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
