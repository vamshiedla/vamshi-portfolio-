import React from 'react';
import SectionTitle from './common/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0c1220]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          <div className="w-full lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm66yspkb/image/upload/v1748012727/WhatsApp_Image_2025-05-23_at_20.34.31_a44a4376_urjbsl.jpg" 
                  alt="Vamshi Edla Portrait" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  AI & Data Science Enthusiast | Full-Stack Developer
                </span>
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                I'm an AI and Data Science student with hands-on experience in full-stack development using React, Node.js, Python, and SQL. I love solving real-world problems, building responsive and user-friendly applications, and integrating AI tools into development workflows.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Currently an ASE Intern at Accenture and previously interned at Hexart.In and contributed to real-world tech solutions.
              </p>
              
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300"><span className="font-medium text-white">Passionate</span> about emerging technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-gray-300"><span className="font-medium text-white">Dedicated</span> to continuous learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300"><span className="font-medium text-white">Focused</span> on creating impactful solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;