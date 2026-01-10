import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,tsx,jsx,mdx}",
    "./components/**/*.{js,ts,tsx,jsx,mdx}",
    "./app/**/*.{js,ts,tsx,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blue-600
        secondary: "#4b5563", // Gray-600
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
