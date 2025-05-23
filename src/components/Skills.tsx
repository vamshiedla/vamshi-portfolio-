import React from 'react';
import SectionTitle from './common/SectionTitle';
import SkillCategory from './common/SkillCategory';
import { Code, Globe, PenTool as Tool, Database, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Languages",
      icon: <Code size={24} className="text-blue-400" />,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" }
      ]
    },
    {
      id: 2,
      title: "Frontend",
      icon: <Globe size={24} className="text-indigo-400" />,
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Bootstrap", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      id: 3,
      title: "Backend",
      icon: <Database size={24} className="text-green-400" />,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "JWT", level: "Intermediate" }
      ]
    },
    {
      id: 4,
      title: "Tools & Technologies",
      icon: <Tool size={24} className="text-purple-400" />,
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Generative AI", level: "Intermediate" }
      ]
    },
    {
      id: 5,
      title: "DevOps & Cloud",
      icon: <Terminal size={24} className="text-yellow-400" />,
      skills: [
        { name: "Docker", level: "Basic" },
        { name: "AWS", level: "Basic" },
        { name: "Netlify", level: "Intermediate" },
        { name: "Vercel", level: "Intermediate" }
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#101729] to-[#0c1220]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map(category => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;