import { BrowserRouter } from "react-router-dom";
import type { Decorator } from "@storybook/react";

export const RouterDecorator: Decorator = (Story) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
);
