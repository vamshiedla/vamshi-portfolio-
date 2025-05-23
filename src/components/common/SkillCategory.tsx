import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: string;
}

interface SkillCategoryProps {
  category: {
    id: number;
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
  };
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#151c2e] rounded-xl p-6 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        {category.icon}
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
      </div>
      
      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <div 
            key={index}
            className="group relative"
          >
            <div className="flex items-center justify-between">
              <span className="text-indigo-300 text-sm font-medium">{skill.name}</span>
              <span className="text-gray-400 text-xs">{skill.level}</span>
            </div>
            <div className="mt-1 h-1.5 w-full bg-indigo-900/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: skill.level === 'Advanced' ? '90%' :
                         skill.level === 'Intermediate' ? '70%' : '50%'
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;