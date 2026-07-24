import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff5a00",
        ember: "#e04d00",
        cream: "#ede6db",
        paper: "#f7f2e9",
        sand: "#ded3c1",
        ink: "#12100e",
        ink2: "#2b2622",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        headline: "-0.03em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 44s linear infinite",
        drift: "drift 80s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
