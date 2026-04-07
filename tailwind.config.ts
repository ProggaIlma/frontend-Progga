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
  'xs': '412px',    // 520-412 range minimum
  'sm': '520px',    // 680-521 range minimum
  'md': '680px',    // 980-681 range minimum
  'lg': '980px',    // 1920-981 range minimum 
},

      fontSize: {
        "h3": ["28px", { lineHeight: "115%", fontWeight: "500" }],
        "body-normal": ["17px", { lineHeight: "135%", fontWeight: "400" }],
        "body-sm": ["15px", { lineHeight: "135%", fontWeight: "400" }],
      },
      colors: {
        slate: {
          800: "#171B21",
        },
       
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
