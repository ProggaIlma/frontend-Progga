export const TextureBg = () => (
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
      <pattern
        id="stripes"
        x="0"
        y="0"
        width="1440"
        height="6"
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="1440" height="1" fill="rgb(217,217,217)" />
      </pattern>
    </defs>

    <rect width="1440" height="700" fill="url(#stripes)" opacity="0.15" />
  </svg>
);