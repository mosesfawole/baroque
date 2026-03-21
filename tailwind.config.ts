import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baroque: {
          black: "#0a0a0a",
          deep: "#111111",
          card: "#1a1a1a",
          gold: "#c9a84c",
          "gold-light": "#e8c97a",
          crimson: "#8b1a1a",
          "crimson-light": "#c42b2b",
          cream: "#f5f0e8",
          muted: "#6b6b6b",
          border: "#2a2a2a",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-down": "fadeDown 0.6s ease forwards",
        "scale-in": "scaleIn 0.4s ease forwards",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,76,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.6)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a84c, #e8c97a)",
        "dark-gradient": "linear-gradient(180deg, #0a0a0a 0%, #1a0a0a 100%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(10,10,10,0) 0%, #0a0a0a 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(201,168,76,0.05), rgba(139,26,26,0.05))",
      },
      boxShadow: {
        "gold-sm": "0 0 20px rgba(201,168,76,0.2)",
        "gold-md": "0 0 40px rgba(201,168,76,0.3)",
        "gold-lg": "0 0 60px rgba(201,168,76,0.4)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 48px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
