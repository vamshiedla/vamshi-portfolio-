import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c18] to-[#101729] z-0"></div>
      <div className="absolute inset-0 opacity-30 bg-[url('https://res.cloudinary.com/dm66yspkb/image/upload/v1748012727/WhatsApp_Image_2025-05-23_at_20.33.57_4d155008_q4cezv.jpg')] bg-cover bg-center z-0 blur-sm"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                Vamshi Edla
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-300">
              AI & Data Science Student | Full-Stack Developer
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
              Passionate about building innovative solutions at the intersection of AI and web development.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
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
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/20">
                <img 
                  src="https://res.cloudinary.com/dm66yspkb/image/upload/v1748012726/WhatsApp_Image_2025-05-23_at_20.33.57_df4ce337_krqbwk.jpg" 
                  alt="Vamshi Edla" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 blur opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;