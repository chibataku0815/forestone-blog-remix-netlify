// colors.ts
import {
  mauve, violet, red, green, blue, orange,
  mauveDark, violetDark, redDark, greenDark, blueDark, orangeDark
} from "@radix-ui/colors";

const defineColor = (lightColor: string, darkColor: string) =>
  `light-dark(${lightColor}, ${darkColor})`;

export const colors = {
  background: {
    DEFAULT: defineColor(mauve.mauve1, mauveDark.mauve1),
    hover: defineColor(mauve.mauve2, mauveDark.mauve2),
    focus: defineColor(mauve.mauve3, mauveDark.mauve3),
    active: defineColor(mauve.mauve3, mauveDark.mauve3),
    disabled: defineColor(mauve.mauve1, mauveDark.mauve1),
  },
  foreground: {
    DEFAULT: defineColor(mauve.mauve12, mauveDark.mauve12),
    hover: defineColor(mauve.mauve11, mauveDark.mauve11),
    focus: defineColor(mauve.mauve10, mauveDark.mauve10),
    active: defineColor(mauve.mauve10, mauveDark.mauve10),
    disabled: defineColor(mauve.mauve9, mauveDark.mauve9),
  },
  muted: {
    DEFAULT: defineColor(mauve.mauve3, mauveDark.mauve3),
    foreground: defineColor(mauve.mauve11, mauveDark.mauve11),
  },
  accent: {
    DEFAULT: defineColor(violet.violet9, violetDark.violet9),
    foreground: defineColor(violet.violet12, violetDark.violet12),
  },
  destructive: {
    DEFAULT: defineColor(red.red9, redDark.red9),
    foreground: defineColor(red.red12, redDark.red12),
  },
  success: {
    DEFAULT: defineColor(green.green9, greenDark.green9),
    foreground: defineColor(green.green12, greenDark.green12),
  },
  warning: {
    DEFAULT: defineColor(orange.orange9, orangeDark.orange9),
    foreground: defineColor(orange.orange12, orangeDark.orange12),
  },
  info: {
    DEFAULT: defineColor(blue.blue9, blueDark.blue9),
    foreground: defineColor(blue.blue12, blueDark.blue12),
  },
  border: defineColor(mauve.mauve6, mauveDark.mauve6),
  input: defineColor(mauve.mauve6, mauveDark.mauve6),
  ring: defineColor(violet.violet8, violetDark.violet8),
};

export const variantColors = {
  soft: {
    background: colors.muted.DEFAULT,
    foreground: colors.muted.foreground,
  },
  solid: {
    background: colors.accent.DEFAULT,
    foreground: colors.accent.foreground,
  },
  surface: {
    background: colors.background.DEFAULT,
    foreground: colors.foreground.DEFAULT,
    border: colors.border,
  },
  outline: {
    background: colors.background.DEFAULT,
    foreground: colors.foreground.DEFAULT,
    border: colors.border,
  },
};

export const extendedColors = {
  backgroundColor: {
    soft: 'var(--soft-background)',
    solid: 'var(--solid-background)',
    surface: 'var(--surface-background)',
    outline: 'var(--outline-background)',
  },
  textColor: {
    'soft-foreground': 'var(--soft-foreground)',
    'solid-foreground': 'var(--solid-foreground)',
    'surface-foreground': 'var(--surface-foreground)',
    'outline-foreground': 'var(--outline-foreground)',
  },
  borderColor: {
    surface: 'var(--surface-border)',
    outline: 'var(--outline-border)',
  },
};

export default colors;
