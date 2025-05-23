import React from 'react';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Violence Detection",
      description: "ML-based system to detect violence through a webcam using Teachable Machine.",
      demoLink: "https://ai-powered-realtime-violencedetection.netlify.app/",
      githubLink: "https://github.com/vamshiedla/real-time-violence-detection",
      image: "https://images.pexels.com/photos/7516578/pexels-photo-7516578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      preview: "https://res.cloudinary.com/dm66yspkb/image/upload/v1748012727/project-1-preview_urjbsl.jpg",
      tags: ["Machine Learning", "Teachable Machine", "Web Cam API", "TensorFlow.js"]
    },
    {
      id: 2,
      title: "Face Authenticator",
      description: "Browser-based face authentication system using React.js, BlazeFace, Tensor.js (UIDAI SIH 2024 Project).",
      demoLink: "https://sihprojectve.ccbp.tech/",
      githubLink: "https://github.com/vamshiedla/face-authenticator",
      image: "https://images.pexels.com/photos/7354752/pexels-photo-7354752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      preview: "https://res.cloudinary.com/dm66yspkb/image/upload/v1748012727/project-2-preview_q4cezv.jpg",
      tags: ["React.js", "BlazeFace", "Tensor.js", "Authentication"]
    },
    {
      id: 3,
      title: "Food Munch Web App",
      description: "A responsive food ordering platform with menu browsing and secure payments.",
      demoLink: "https://foodmunchve.netlify.app/",
      githubLink: "https://github.com/vamshiedla/food-munch",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      preview: "https://res.cloudinary.com/dm66yspkb/image/upload/v1748012727/project-3-preview_krqbwk.jpg",
      tags: ["React", "Node.js", "Stripe", "Responsive Design"]
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0c1220] to-[#101729]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/vamshiedla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;