


import React from "react";

interface CaretIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const CaretIcon: React.FC<CaretIconProps> = ({ 
  width = 20, 
  height = 20, 
  color = "currentColor", 
  className, 
  ...props 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M6.2947 0.292861C6.4669 0.120685 6.696 0.0172534 6.93902 0.00197221C7.18205 -0.013309 7.4223 0.06061 7.6147 0.209861L7.7087 0.292861L13.7087 6.29286L13.7917 6.38686L13.8457 6.46386L13.8997 6.55986L13.9167 6.59586L13.9437 6.66286L13.9757 6.77086L13.9857 6.82386L13.9957 6.88386L13.9997 6.94086L14.0017 6.99986L13.9997 7.05886L13.9947 7.11686L13.9857 7.17686L13.9757 7.22886L13.9437 7.33686L13.9167 7.40386L13.8467 7.53586L13.7817 7.62586L13.7087 7.70686L13.6147 7.78986L13.5377 7.84386L13.4417 7.89786L13.4057 7.91486L13.3387 7.94186L13.2307 7.97386L13.1777 7.98386L13.1177 7.99386L13.0607 7.99786L13.0017 7.99986H1.0017C0.149704 7.99986 -0.295296 7.01386 0.218704 6.37686L0.294704 6.29286L6.2947 0.292861Z" fill="currentColor"/>
  </svg>
  );
};