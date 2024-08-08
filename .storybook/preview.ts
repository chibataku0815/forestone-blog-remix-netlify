/**
 * @fileoverview
 * The `Preview` object is used to configure the layout of the Storybook Preview UI.
 * @see https://storybook.js.org/docs/react/writing-stories/parameters
 * @type {import("@storybook/react").Preview}
 *
 * @see https://storybook.js.org/docs/react/writing-stories/decorators
 * @type {import("@storybook/react").Decorator}
*/
import type { Decorator, Preview } from "@storybook/react";
import "../app/global.css";
import { ThemeDecorator } from "./ThemeDecorator";
import { RouterDecorator } from "./RouterDecorator";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.normal,
    }
  },
  decorators: [ThemeDecorator as Decorator, RouterDecorator as Decorator],
};

export default preview;
