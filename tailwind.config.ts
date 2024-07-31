import typography from "@tailwindcss/typography";
import type { Config } from 'tailwindcss'
import colors, { variantColors, extendedColors }  from "./tailwind/colors";
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
    ({ addBase, theme }: PluginAPI) => {
      addBase({
        ':root': {
          '--background': colors.background.DEFAULT,
          '--foreground': colors.foreground.DEFAULT,
          '--muted': colors.muted.DEFAULT,
          '--muted-foreground': colors.muted.foreground,
          '--accent': colors.accent.DEFAULT,
          '--accent-foreground': colors.accent.foreground,
          '--destructive': colors.destructive.DEFAULT,
          '--destructive-foreground': colors.destructive.foreground,
          '--border': colors.border,
          '--input': colors.input,
          '--ring': colors.ring,
          '--soft-background': variantColors.soft.background,
          '--soft-foreground': variantColors.soft.foreground,
          '--solid-background': variantColors.solid.background,
          '--solid-foreground': variantColors.solid.foreground,
          '--surface-background': variantColors.surface.background,
          '--surface-foreground': variantColors.surface.foreground,
          '--surface-border': variantColors.surface.border,
          '--outline-background': variantColors.outline.background,
          '--outline-foreground': variantColors.outline.foreground,
          '--outline-border': variantColors.outline.border,
        }
      });
    },
  ],
};

export default config;
