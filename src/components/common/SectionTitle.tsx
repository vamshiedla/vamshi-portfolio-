import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="relative text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative z-10">
        {children}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;