import typography from "@tailwindcss/typography";
import type { Config } from 'tailwindcss'
import colors, { extendedColors }  from "./tailwind/colors";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: colors,
      backgroundColor: extendedColors.backgroundColor,
      textColor: extendedColors.textColor,
      borderColor: extendedColors.borderColor,
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    typography,
    ({ addBase }: PluginAPI) => {
      addBase({
        ':root': {
        }
      });
    },
  ],
};

export default config;
