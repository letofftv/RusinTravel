import React from 'react';

interface MonogramLogoProps {
  className?: string;
  size?: number;
  variant?: 'color' | 'white';
}

export const MonogramLogo: React.FC<MonogramLogoProps> = ({ 
  className = "", 
  size = 40, 
  variant = 'color' 
}) => {
  const src = variant === 'white' ? '/logos/HP-monogram-white.png' : '/logos/HP-monogram-color.png';
  
  return (
    <img 
      src={src} 
      alt="Николай Русин" 
      width={size} 
      height={size} 
      className={`object-contain ${className}`}
    />
  );
};
