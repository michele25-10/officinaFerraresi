import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["cupcake"],
  plugins: [require("daisyui")],
} satisfies Config;
