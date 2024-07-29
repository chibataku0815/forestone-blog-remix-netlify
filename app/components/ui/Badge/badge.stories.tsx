import type { Meta, StoryFn } from "@storybook/react";
import type { BadgeProps } from "./badge";
import { Badge } from "./badge";

export default {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["soft", "solid", "outline"],
			},
		},
		color: {
			control: {
				type: "select",
				options: ["default", "destructive", "success", "warning", "info"],
			},
		},
	},
} as Meta<typeof Badge>;

const Template: StoryFn<BadgeProps> = (args: BadgeProps) => (
	<Badge {...args}>Badge</Badge>
);

export const SoftDefault = Template.bind({});
SoftDefault.args = {
	variant: "soft",
	color: "default",
};

export const SoftDestructive = Template.bind({});
SoftDestructive.args = {
	variant: "soft",
	color: "destructive",
};

export const SoftSuccess = Template.bind({});
SoftSuccess.args = {
	variant: "soft",
	color: "success",
};

export const SoftWarning = Template.bind({});
SoftWarning.args = {
	variant: "soft",
	color: "warning",
};

export const SoftInfo = Template.bind({});
SoftInfo.args = {
	variant: "soft",
	color: "info",
};

export const SolidDefault = Template.bind({});
SolidDefault.args = {
	variant: "solid",
	color: "default",
};

export const SolidDestructive = Template.bind({});
SolidDestructive.args = {
	variant: "solid",
	color: "destructive",
};

export const SolidSuccess = Template.bind({});
SolidSuccess.args = {
	variant: "solid",
	color: "success",
};

export const SolidWarning = Template.bind({});
SolidWarning.args = {
	variant: "solid",
	color: "warning",
};

export const SolidInfo = Template.bind({});
SolidInfo.args = {
	variant: "solid",
	color: "info",
};

export const OutlineDefault = Template.bind({});
OutlineDefault.args = {
	variant: "outline",
	color: "default",
};

export const OutlineDestructive = Template.bind({});
OutlineDestructive.args = {
	variant: "outline",
	color: "destructive",
};

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
	variant: "outline",
	color: "success",
};

export const OutlineWarning = Template.bind({});
OutlineWarning.args = {
	variant: "outline",
	color: "warning",
};

export const OutlineInfo = Template.bind({});
OutlineInfo.args = {
	variant: "outline",
	color: "info",
};
