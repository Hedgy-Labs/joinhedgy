import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
      },
      backgroundImage: {
        "splash-dark":
          "url(/splash/grain.png), linear-gradient(#0000ff, #00004f)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
      },
      animation: {
        spin: "spin 500s linear infinite",
        bob: "bob 12s ease-in-out infinite",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -24px, 0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
