import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  elevated = false
}) => {
  return (
    <div className={`
      bg-white rounded-lg p-6 
      ${elevated ? 'shadow-lg' : 'shadow'} 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card; 