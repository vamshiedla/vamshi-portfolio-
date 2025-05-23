import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    "OnePlus globally recognized trial member",
    "Nxtwave NSDC Fellowship",
    "Smart India Hackathon (Internal pitch clearance)"
  ];
  
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-[#0c1220] to-[#101729]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Achievements</SectionTitle>
        
        <div className="mt-12">
          <div className="bg-[#151c2e] rounded-xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <ul className="space-y-6">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-900/40 rounded-full mt-0.5">
                      <Award size={18} className="text-yellow-400" />
                    </div>
                    <p className="text-lg text-gray-300">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;