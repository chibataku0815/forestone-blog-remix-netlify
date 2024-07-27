import typography from "@tailwindcss/typography";
import { mauve, violet, blackA, whiteA, mauveDark } from "@radix-ui/colors";

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...blackA,
        ...whiteA,
        background: `light-dark(${mauve.mauve1}, ${mauveDark.mauve1})`,
        foreground: `light-dark(${mauve.mauve11}, ${mauveDark.mauve11})`,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), typography],
};
