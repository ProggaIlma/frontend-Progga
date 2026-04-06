import clsx from "clsx";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Badge({ children, pulse = false, className, style }: BadgeProps) {
  return (
    <span
      className={clsx(
        "badge inline-flex items-center justify-center rounded-full border",
        "px-4 py-2 whitespace-nowrap transition-all gap-2",
        className
      )}
      style={{
  ...style,
  borderColor: "transparent",
  background: `
    linear-gradient(var(--surface2), var(--surface2)) padding-box, 
    linear-gradient(160deg, #2466F2 0%, rgba(36,102,242,0) 40%, rgba(36,102,242,0) 50%, #2466F2 100%) border-box
  `,
}}
    >
      
      <span
  className={clsx("w-2 h-2 rounded-full flex-shrink-0 bg-[var(--blue)]", pulse && "animate-pulse")}
  style={{ boxShadow: "0 0 5px 1px rgba(36,102,242,0.7)" }}
/>
      <span style={{ color: "var(--text)", fontSize: "14px" }}>{children}</span>
    </span>
  );
}