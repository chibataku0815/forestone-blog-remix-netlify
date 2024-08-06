/**
 * @fileoverview This file tailwind.config.ts defines the color palette for the application using Radix UI colors.
 * It includes both light and dark mode colors and provides utility functions to define colors.
 * @file tailwind.config.ts
 */

import typography from "@tailwindcss/typography";
import type { Config } from 'tailwindcss'
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
      /**
       * The main color palette for the application.
       * It includes colors for different states like muted, accent, destructive, success, warning, and info.
       * Each state has a default color and an "is-default" color for different contexts.
      */
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
      /**
       * Extended color palette for the application.
       * It includes CSS variable-based colors for background, text, and border.
      */
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
      letterSpacing: {
        wider: '0.2em',
        widest: '0.3em',
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
        'extra-loose': '2.5',
        'super-loose': '3',
      },
      typography: ({theme}: PluginAPI) => ({
        DEFAULT: {
          css: {
            'h1': {
              letterSpacing: theme('letterSpacing.wider'),
              lineHeight: theme('lineHeight.tight'),
              fontSize: '2.25rem', // 36px
              '@screen md': {
                fontSize: '3rem', // 48px
              },
            },
            'h2': {
              letterSpacing: theme('letterSpacing.wide'),
              lineHeight: theme('lineHeight.snug'),
              fontSize: '1.875rem', // 30px
              '@screen md': {
                fontSize: '2.25rem', // 36px
              },
            },
            'h3': {
              letterSpacing: theme('letterSpacing.wide'),
              lineHeight: theme('lineHeight.normal'),
              fontSize: '1.5rem', // 24px
              '@screen md': {
                fontSize: '1.875rem', // 30px
              },
            },
            'h4': {
              letterSpacing: theme('letterSpacing.wide'),
              lineHeight: theme('lineHeight.normal'),
              fontSize: '1.25rem', // 20px
              '@screen md': {
                fontSize: '1.5rem', // 24px
              },
            },
            'h5, h6': {
              letterSpacing: theme('letterSpacing.normal'),
              lineHeight: theme('lineHeight.relaxed'),
              fontSize: '1.125rem', // 18px
              '@screen md': {
                fontSize: '1.25rem', // 20px
              },
            },
            'p': {
              lineHeight: theme('lineHeight.relaxed'),
              fontSize: '1rem', // 16px
            },
          },
        },
        '2xl': {
          css: {
            'h1': {
              lineHeight: theme('lineHeight.snug'),
              fontSize: '3rem', // 48px
              '@screen md': {
                fontSize: '3.75rem', // 60px
              },
            },
            'h2': {
              lineHeight: theme('lineHeight.normal'),
              fontSize: '2.25rem', // 36px
              '@screen md': {
                fontSize: '3rem', // 48px
              },
            },
            'h3': {
              lineHeight: theme('lineHeight.relaxed'),
              fontSize: '1.875rem', // 30px
              '@screen md': {
                fontSize: '2.25rem', // 36px
              },
            },
            'h4': {
              lineHeight: theme('lineHeight.relaxed'),
              fontSize: '1.5rem', // 24px
              '@screen md': {
                fontSize: '1.875rem', // 30px
              },
            },
            'h5, h6': {
              lineHeight: theme('lineHeight.loose'),
              fontSize: '1.25rem', // 20px
              '@screen md': {
                fontSize: '1.5rem', // 24px
              },
            },
            'p': {
              lineHeight: theme('lineHeight.loose'),
              fontSize: '1.125rem', // 18px
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    typography(),
    ({ addBase, theme }: PluginAPI) => {
      addBase({
        ':root': {
          '--destructive-border': theme('colors.destructive.border'),
          '--success-border': theme('colors.success.border'),
          '--warning-border': theme('colors.warning.border'),
          '--info-border': theme('colors.info.border'),
        },
      });
    },
  ],
};

export default config;
