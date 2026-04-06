import React from "react";

interface IconProps {
  size?: number;
  className?: string;
  withBorder?: boolean;
  preview?: boolean;
}

const SunMoonBgIcon = ({ size = 36, className, withBorder = false,preview = false }: IconProps) => {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,  display: "flex",         // add this
        alignItems: "center",    // add this  
        justifyContent: "center",

       ...preview && { border: "2px solid rgba(255, 255, 255, 0.5)" },
               ...(withBorder ? {
          padding: "0.5px",
          background: `
            radial-gradient(ellipse 60% 50% at top left,     var(--blue) 0%, transparent 100%),
            radial-gradient(ellipse 60% 40% at top right,    var(--blue) 0%, transparent 100%),
            radial-gradient(ellipse 50% 25% at bottom left,  var(--blue) 0%, transparent 100%),
            radial-gradient(ellipse 50% 25% at bottom right, var(--blue) 0%, transparent 100%)
          `,
        } : {}),
      }}
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <path
          d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default SunMoonBgIcon;