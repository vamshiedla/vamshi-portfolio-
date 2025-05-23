import React from 'react';
import SectionTitle from './common/SectionTitle';
import EducationItem from './common/EducationItem';

const Education: React.FC = () => {
  const educationItems = [
    {
      id: 1,
      degree: "B.Tech in AI & Data Science",
      institution: "Vidya Jyothi Institute of Technology",
      period: "2023–2026",
      score: "CGPA: 7.5"
    },
    {
      id: 2,
      degree: "Diploma in ECE",
      institution: "QQGPT",
      period: "2020–2023",
      score: "CGPA: 7.2"
    },
    {
      id: 3,
      degree: "SSC",
      institution: "",
      period: "",
      score: "GPA: 9.5"
    }
  ];
  
  return (
    <section id="education" className="py-20 bg-[#0c1220]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>
        
        <div className="mt-12 space-y-8">
          {educationItems.map(item => (
            <EducationItem key={item.id} education={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;