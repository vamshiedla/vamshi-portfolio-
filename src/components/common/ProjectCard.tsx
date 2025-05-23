import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  image: string;
  preview: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#151c2e] rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.preview} 
          alt={`${project.title} Preview`} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Github size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-4 flex gap-4">
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Live Demo <ExternalLink size={16} />
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors duration-300"
          >
            Source Code <Github size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;