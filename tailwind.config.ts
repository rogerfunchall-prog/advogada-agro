import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF6EC",
          light: "#FFFDF9",
          soft: "#F2EDE0",
        },
        // Kept only for the client's own logo mark / tiny brand touches
        forest: {
          DEFAULT: "#1F4A34",
          dark: "#123023",
          deep: "#0B1F16",
          light: "#2E6B49",
        },
        gold: {
          DEFAULT: "#F2BE22",
          light: "#FFD966",
          dark: "#D9A600",
        },
        ink: {
          DEFAULT: "#111111",
          soft: "#1C1C1C",
          light: "#2B2B2B",
        },
        muted: "#666666",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        label: ["var(--font-body)", "sans-serif"],
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
