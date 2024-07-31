import type { Meta, StoryObj } from "@storybook/react";
import type { BadgeProps } from "./badge";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		variant: {
			control: "select",
			options: ["soft", "outline", "solid", "surface"],
		},
		color: {
			control: "select",
			options: ["default", "destructive", "success", "warning", "info"],
		},
		children: {
			control: "text",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		children: "Badge",
		variant: "outline",
		color: "destructive",
	},
	render: (args) => <Badge {...args} />,
};

export const AllVariants: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2 bg-surface">
			{["soft", "solid", "outline"].map((variant) =>
				["default", "destructive", "success", "warning", "info"].map(
					(color) => (
						<Badge
							key={`${variant}-${color}`}
							variant={variant as BadgeProps["variant"]}
							color={color as BadgeProps["color"]}
						>
							{`${variant} ${color}`}
						</Badge>
					),
				),
			)}
		</div>
	),
};
