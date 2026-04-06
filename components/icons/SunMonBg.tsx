import React from "react";

interface IconProps {
  className?: string;
}

const SunMoonBgIcon = ({ className = "w-full h-full" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SunMoonBgIcon;