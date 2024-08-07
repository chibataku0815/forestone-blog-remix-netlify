import type { Decorator, Preview } from "@storybook/react";
import "../app/global.css";
import { ThemeDecorator } from "./ThemeDecorator";
import { RouterDecorator } from "./RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'light',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      dark: { appBg: 'black' },
      light: { appBg: 'white' },
    },
  },
  decorators: [ThemeDecorator as Decorator, RouterDecorator as Decorator],
};

export default preview;
