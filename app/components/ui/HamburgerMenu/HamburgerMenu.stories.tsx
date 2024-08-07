import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { HamburgerMenu } from "./HamburgerMenu";

const meta: Meta<typeof HamburgerMenu> = {
	title: "Components/HamburgerMenu",
	component: HamburgerMenu,
	argTypes: {
		isOpen: {
			control: "boolean",
			description: "Controls whether the sheet is open or closed",
		},
	},
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;
export const Default: Story = {
	render: (args) => <HamburgerMenu />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggerButton = await canvas.findByRole("button");
		await userEvent.click(triggerButton);
	},
};
