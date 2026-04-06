import React from "react";

interface IconProps {
  size?: number;
  className?: string;
  withBorder?: boolean;
  preview?: boolean;
}

const CircleBgIcon = ({ size = 36, className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      <circle cx="18" cy="18" r="18" fill="currentColor" />
    </svg>
  );
};

export default CircleBgIcon;