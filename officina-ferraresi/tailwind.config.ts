import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  themes: [],
  plugins: [require("daisyui")],
} satisfies Config;
