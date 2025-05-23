import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0c1220] py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="text-white font-bold text-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                Vamshi Edla
              </span>
            </a>
            <p className="text-gray-400 mt-2">AI & Data Science Student | Full-Stack Developer</p>
          </div>
          
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
              href="mailto:vamshiedla06@gmail.com" 
              className="p-3 text-gray-300 hover:text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} Vamshi Edla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;