import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF6EC",
          light: "#FFFDF9",
          soft: "#F3ECDA",
        },
        forest: {
          DEFAULT: "#1F4A34",
          dark: "#123023",
          deep: "#0B1F16",
          light: "#2E6B49",
        },
        lime: {
          DEFAULT: "#8DC63F",
          light: "#B6E06B",
          dark: "#6BA22C",
        },
        gold: {
          DEFAULT: "#C6A15B",
          light: "#DDC08A",
        },
        ink: "#16221A",
        muted: "#5B6B60",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        label: ["var(--font-label)", "sans-serif"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 55% 48% 52% 45%",
        pill: "200px",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.12) translate(-1%,-1%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(14px) rotate(-4deg)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        spinSlow: "spinSlow 24s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
