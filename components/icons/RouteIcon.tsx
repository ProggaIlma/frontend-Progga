import React from "react";

interface RouteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const RouteIcon: React.FC<RouteIconProps> = ({ size = 18, color = "currentColor", className, ...props }) => {
  const width = (size * 15) / 18;

  return (
<svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >      <path d="M12 3.75C12 1.67893 13.6789 0 15.75 0C17.8211 0 19.5 1.67893 19.5 3.75C19.5 5.82107 17.8211 7.5 15.75 7.5C13.6789 7.5 12 5.82107 12 3.75Z" fill="currentColor" />
      <path d="M0 17.75C0 15.6789 1.67893 14 3.75 14C5.82107 14 7.5 15.6789 7.5 17.75C7.5 19.8211 5.82107 21.5 3.75 21.5C1.67893 21.5 0 19.8211 0 17.75Z" fill="currentColor" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.75 7.25C1.75 4.76472 3.76472 2.75 6.25 2.75H9.75C10.3023 2.75 10.75 3.19772 10.75 3.75C10.75 4.30228 10.3023 4.75 9.75 4.75H6.25C4.86929 4.75 3.75 5.86929 3.75 7.25C3.75 8.63071 4.86929 9.75 6.25 9.75H13.25C15.7353 9.75 17.75 11.7647 17.75 14.25C17.75 16.7353 15.7353 18.75 13.25 18.75H9.75C9.1977 18.75 8.75 18.3023 8.75 17.75C8.75 17.1977 9.1977 16.75 9.75 16.75H13.25C14.6307 16.75 15.75 15.6307 15.75 14.25C15.75 12.8693 14.6307 11.75 13.25 11.75H6.25C3.76472 11.75 1.75 9.7353 1.75 7.25Z"
        fill="currentColor"
      />
    </svg>
  );
};
