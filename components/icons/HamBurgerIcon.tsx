

import React from "react";

interface LightbulbIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const LightbulbIcon: React.FC<LightbulbIconProps> = ({ 
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
<path d="M0.75 0.75H16.75M0.75 6.75H16.75M0.75 12.75H16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>  </svg>
  );
};