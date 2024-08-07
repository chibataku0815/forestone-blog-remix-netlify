import type { Meta, StoryObj } from "@storybook/react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

const meta: Meta<typeof Sheet> = {
	title: "Components/Sheet",
	component: Sheet,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger>Open Sheet</SheetTrigger>
			<SheetContent>
				<h2>Sheet Content</h2>
				<p>This is the content of the sheet.</p>
			</SheetContent>
		</Sheet>
	),
};
