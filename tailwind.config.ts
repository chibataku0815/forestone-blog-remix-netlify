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
  },
  plugins: [
    require("tailwindcss-animate"),
    typography,
    ({ addBase }: PluginAPI) => {
      addBase({
        ':root': {
          '--destructive-border': colors.destructive.border,
          '--success-border': colors.success.border,
          '--warning-border': colors.warning.border,
          '--info-border': colors.info.border,
        }
      });
    },
  ],
};

export default config;
