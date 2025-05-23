import React from 'react';
import SectionTitle from './common/SectionTitle';
import ExperienceItem from './common/ExperienceItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      position: "Associate Software Engineer Intern",
      company: "Accenture",
      period: "May 2025 – Present",
      description: "Working on innovative technology solutions and gaining hands-on experience in enterprise software development."
    },
    {
      id: 2,
      position: "Intern",
      company: "Hexart.In",
      period: "Feb 2025 – May 2025",
      description: "Contributed to real-world tech projects and gained valuable industry experience in software development."
    },
    {
      id: 3,
      position: "Beta User Trial Member",
      company: "Oplus",
      period: "Nov 2023 – Present",
      description: "Participating in product testing and providing feedback for improving user experience and product features."
    }
  ];
  
  return (
    <section id="experience" className="py-20 bg-[#101729]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={experience.id} 
                experience={experience} 
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;