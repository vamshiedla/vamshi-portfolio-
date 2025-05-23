import React from 'react';
import { Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceItemProps {
  experience: Experience;
  isEven: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isEven }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
        <div className="bg-[#151c2e] p-6 rounded-lg shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
          <h4 className="text-blue-400 font-medium mt-1">{experience.company}</h4>
          <p className="text-gray-400 text-sm mt-2">{experience.period}</p>
          <p className="text-gray-300 mt-4">{experience.description}</p>
        </div>
      </div>
      
      <div className="hidden md:flex md:w-0 items-center justify-center relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center z-10">
          <Briefcase size={20} className="text-white" />
        </div>
      </div>
      
      <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:order-last' : 'md:pr-12'}`}></div>
    </div>
  );
};

export default ExperienceItem;