import React from 'react';
import { GraduationCap } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="bg-[#151c2e] rounded-xl p-6 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-indigo-900/40 rounded-full">
          <GraduationCap size={24} className="text-indigo-400" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
          
          {education.institution && (
            <p className="text-blue-400 mt-1">{education.institution}</p>
          )}
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
            {education.period && (
              <p className="text-gray-400 text-sm">{education.period}</p>
            )}
            
            <p className="text-gray-300 font-medium">{education.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;