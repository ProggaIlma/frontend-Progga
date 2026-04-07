import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '520px',   // adds a new xs breakpoint
        'sm': '680px',
        'md': '980px',
        'lg': '1920px',  // overrides default lg (was 1024px)
      },
      fontFamily: {
        display: ["var(--font-sf-display)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h1": ["52px", { lineHeight: "115%", fontWeight: "500" }],
        "h2": ["40px", { lineHeight: "115%", fontWeight: "500" }],
        "h3": ["28px", { lineHeight: "115%", fontWeight: "500" }],
        "h4": ["24px", { lineHeight: "135%", fontWeight: "400" }],
        "h5": ["20px", { lineHeight: "135%", fontWeight: "400" }],
        "body-normal": ["17px", { lineHeight: "135%", fontWeight: "400" }],
        "body-sm": ["15px", { lineHeight: "135%", fontWeight: "400" }],
      },
      colors: {
        "text-slate-800": "#171B21",
        blue: {
          50: "hsl(220, 91%, 100%)",
          100: "hsl(220, 21%, 100%)",
          200: "hsl(220, 34%, 100%)",
          300: "hsl(220, 51%, 100%)",
          400: "hsl(220, 68%, 100%)",
          500: "hsl(220, 88%, 100%)",
          600: "#2563EB",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      backgroundImage: {
        "blue-glow": "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)",
        "glow-line": "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.6) 50%, transparent 100%)",
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.85)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
