interface TextureBgProps {
  theme?: "dark" | "light";
}

export const TextureBg = ({ theme = "dark" }: TextureBgProps) => {
  const base = theme === "dark" ? "#08080f" : "transparent";
  const glowColor = theme === "dark" ? "#1a4fd6" : "#1245B3";
  const glowOpacity1 = theme === "dark" ? "0.75" : "0.3";
  const glowOpacity2 = theme === "dark" ? "0.25" : "0.1";
const lineColor = theme === "dark" ? "rgb(160,180,255)" : "rgb(80,100,180)";
const lineOpacity = theme === "dark" ? "0.1" : "0.18";

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <pattern id="stripes" x="0" y="0" width="1440" height="7" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="1440" height="1" fill={lineColor} />
        </pattern>

        <radialGradient id="glowLeft" cx="0%" cy="70%" r="60%">
          <stop offset="0%"   stopColor={glowColor} stopOpacity={glowOpacity1} />
          <stop offset="60%"  stopColor="#1245B3"   stopOpacity={glowOpacity2} />
          <stop offset="100%" stopColor={base}       stopOpacity="0" />
        </radialGradient>

        <radialGradient id="glowRight" cx="100%" cy="70%" r="60%">
          <stop offset="0%"   stopColor={glowColor} stopOpacity={glowOpacity1} />
          <stop offset="60%"  stopColor="#1245B3"   stopOpacity={glowOpacity2} />
          <stop offset="100%" stopColor={base}       stopOpacity="0" />
        </radialGradient>
{/* <radialGradient id="glowLeft" cx="0%" cy="60%" r="70%">
  <stop offset="0%"   stopColor={glowColor} stopOpacity={glowOpacity1} />
  <stop offset="60%"  stopColor="#1245B3"   stopOpacity={glowOpacity2} />
  <stop offset="100%" stopColor={base}      stopOpacity="0" />
</radialGradient>

<radialGradient id="glowRight" cx="100%" cy="60%" r="70%">
  <stop offset="0%"   stopColor={glowColor} stopOpacity={glowOpacity1} />
  <stop offset="60%"  stopColor="#1245B3"   stopOpacity={glowOpacity2} />
  <stop offset="100%" stopColor={base}      stopOpacity="0" />
</radialGradient> */}
        <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Base — black in dark, transparent in light (lets CSS gradient show through) */}
      {theme === "dark" && (
        <rect width="1440" height="700" fill={base} />
      )}

      <rect width="1440" height="700" fill="url(#glowLeft)"  filter="url(#soft)" />
      <rect width="1440" height="700" fill="url(#glowRight)" filter="url(#soft)" />
      <rect width="1440" height="700" fill="url(#stripes)"   opacity={lineOpacity} />
    </svg>
  );
};