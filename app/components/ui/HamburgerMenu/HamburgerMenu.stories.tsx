import type { Meta, StoryObj } from "@storybook/react";
import { HamburgerMenu } from "./HamburgerMenu";

const meta: Meta<typeof HamburgerMenu> = {
	title: "Components/HamburgerMenu",
	component: HamburgerMenu,
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

export const Default: Story = {
	render: () => <HamburgerMenu />,
};
