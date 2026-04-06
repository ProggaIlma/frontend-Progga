


import React from "react";

interface RightArrowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const RightArrowIcon: React.FC<RightArrowIconProps> = ({ 
  size = 20, 
  color = "currentColor", 
  className, 
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Centered Path:
          Total width of arrow is 14px (from 3 to 17).
          Center is exactly at 10.
      */}
      <path 
        d="M3 10H17M17 10L11 4M17 10L11 16" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};