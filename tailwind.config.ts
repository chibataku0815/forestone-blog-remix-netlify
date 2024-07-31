import typography from "@tailwindcss/typography";
import type { Config } from 'tailwindcss'
import colors, { extendedColors }  from "./tailwind/colors";
import type { PluginAPI } from "tailwindcss/types/config";
import {
  mauve, violet, red, green, blue, orange,
  mauveDark, violetDark, redDark, greenDark, blueDark, orangeDark,
  redDarkA, greenDarkA, orangeDarkA, blueDarkA
} from "@radix-ui/colors";

/**
 * Utility function to define a color that switches between light and dark mode.
 *
 * @param {string} lightColor - The color to use in light mode.
 * @param {string} darkColor - The color to use in dark mode.
 * @returns {string} A string representing the light-dark color combination.
 */
const defineColor = (lightColor: string, darkColor: string) =>
  `light-dark(${lightColor}, ${darkColor})`;

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
      colors: {
        muted: {
          DEFAULT: defineColor(mauve.mauve3, mauveDark.mauve3),
          'is-default': defineColor(mauve.mauve11, mauveDark.mauve11),
        },
        accent: {
          DEFAULT: defineColor(violet.violet9, violetDark.violet9),
          'is-default': defineColor(violet.violet12, violetDark.violet12),
        },
        destructive: {
          DEFAULT: defineColor(red.red2, redDarkA.redA2),
          'is-default': defineColor(red.red11, redDark.red11),
          border: defineColor(red.red6, redDark.red6),
        },
        success: {
          DEFAULT: defineColor(green.green2, greenDarkA.greenA2),
          'is-default': defineColor(green.green11, greenDark.green11),
          border: defineColor(green.green6, greenDark.green6),
        },
        warning: {
          DEFAULT: defineColor(orange.orange2, orangeDarkA.orangeA2),
          'is-default': defineColor(orange.orange11, orangeDark.orange11),
          border: defineColor(orange.orange6, orangeDark.orange6),
        },
        info: {
          DEFAULT: defineColor(blue.blue2, blueDarkA.blueA2),
          'is-default': defineColor(blue.blue11, blueDark.blue11),
          border: defineColor(blue.blue6, blueDark.blue6),
        },
        border: defineColor(mauve.mauve9, mauveDark.mauve9),
        input: defineColor(mauve.mauve6, mauveDark.mauve6),
        ring: defineColor(violet.violet8, violetDark.violet8),
      },
      backgroundColor: {
        soft: 'var(--soft-background)',
        solid: 'var(--solid-background)',
        surface: 'var(--surface-background)',
        outline: 'var(--outline-background)',
      },
      textColor: {
        soft: 'var(--soft-foreground)',
        solid: 'var(--solid-foreground)',
        surface: 'var(--surface-foreground)',
        outline: 'var(--outline-foreground)',
      },
      borderColor: {
        destructive: 'var(--destructive-border)',
        success: 'var(--success-border)',
        warning: 'var(--warning-border)',
        info: 'var(--info-border)',
      },
    },
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
