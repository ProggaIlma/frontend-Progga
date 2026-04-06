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
        "badge inline-flex items-center justify-center rounded-full border-[1px] border-transparent",
        "h-[36px]  px-8 py-16 whitespace-nowrap tabular-nums transition-all", 
        className
      )}
      style={{
        ...style,
        boxShadow: "0px 8px 40px 0px var(--EffectDrop-ShadowMD)",

        background: `
          linear-gradient(var(--surface2), var(--surface2)) padding-box, 
          radial-gradient(65.98% 88.05% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%) border-box
        `,
      }}
    >
      <span className={clsx("badge-dot mr-0 flex-shrink-0", pulse && "badge-dot--pulse")} 
      style={{boxShadow: "0px 2px 12px 0px var(--EffectDrop-ShadowSM)"}} />
      {children}
    </span>
  );
}