// colors.ts
import {
  mauve, violet, red, green, blue, orange,
  mauveDark, violetDark, redDark, greenDark, blueDark, orangeDark,
  redDarkA,
  greenDarkA,
  orangeDarkA,
  blueDarkA
} from "@radix-ui/colors";

const defineColor = (lightColor: string, darkColor: string) =>
  `light-dark(${lightColor}, ${darkColor})`;

export const colors = {
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
  },
  warning: {
    DEFAULT: defineColor(orange.orange2, orangeDarkA.orangeA2),
    'is-default': defineColor(orange.orange11, orangeDark.orange11),
  },
  info: {
    DEFAULT: defineColor(blue.blue2, blueDarkA.blueA2),
    'is-default': defineColor(blue.blue11, blueDark.blue11),
  },
  border: defineColor(mauve.mauve9, mauveDark.mauve9),
  input: defineColor(mauve.mauve6, mauveDark.mauve6),
  ring: defineColor(violet.violet8, violetDark.violet8),
};


export const variantColors = {
  soft: {
    background: colors.muted.DEFAULT,
    foreground: colors.muted['is-default'],
  },
  solid: {
    background: colors.accent.DEFAULT,
    foreground: colors.accent['is-default'],
  },
  surface: {
    background: colors.muted.DEFAULT,
    foreground: colors.muted['is-default'],
    border: colors.border
  },
  outline: {
    background: 'transparent',
    foreground: colors.muted.DEFAULT,
    border: colors.border
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
    'soft': 'var(--soft-foreground)',
    'solid': 'var(--solid-foreground)',
    'surface': 'var(--surface-foreground)',
    'outline': 'var(--outline-foreground)',
  },
  borderColor: {
    destructive: 'var(--destructive-border)',
    success: 'var(--success-border)',
    warning: 'var(--warning-border)',
    info: 'var(--info-border)',
  },
};

export default colors;
