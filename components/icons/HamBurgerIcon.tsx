

import React from "react";

interface HamburgerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({ 
  width = 28, 
  height = 28, 
  color = "currentColor", 
  className, 
  ...props 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28" // Match the viewBox to the intended size
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Centered Paths for 28x28:
         - Lines are 20px wide (starts at 4, ends at 24)
         - Vertical positions: 8 (top), 14 (center), 20 (bottom)
      */}
      <path 
        d="M4 8H24M4 14H24M4 20H24" 
        stroke={color} 
        strokeWidth="2" // Slightly thicker for a 60px circle
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};