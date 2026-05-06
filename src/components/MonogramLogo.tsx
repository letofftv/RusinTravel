import React from 'react';

interface MonogramLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const MonogramLogo: React.FC<MonogramLogoProps> = ({ 
  className = "", 
  size = 40, 
  color = "#18B8B5" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="4"/>
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="central" 
        textAnchor="middle" 
        fill={color} 
        fontFamily="serif" 
        fontSize="40" 
        fontWeight="bold"
      >
        НР
      </text>
    </svg>
  );
};
