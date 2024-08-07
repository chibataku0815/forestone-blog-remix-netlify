/**
 * @fileoverview
 * Storybook stories for the Sheet component
 * This file provides the default story and configurations for the Sheet component.
 *
 * @file app/components/ui/Sheet/sheet.stories.tsx
 * @example
 * <Sheet open={isOpen} onOpenChange={setIsOpen}>
 *   <SheetTrigger>Open Sheet</SheetTrigger>
 *   <SheetContent side="right">
 *     <h2>Sheet Content</h2>
 *     <p>This is the content of the sheet.</p>
 *   </SheetContent>
 * </Sheet>
 */

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

/**
 * Extended properties for the Sheet component
 * @typedef {Object} ExtendedSheetProps
 * @property {string} side - The side from which the sheet appears
 */
type ExtendedSheetProps = React.ComponentProps<typeof Sheet> & {
	side?: "top" | "bottom" | "left" | "right";
};

/**
 * Meta configuration for the Sheet component stories
 * @type {Meta<ExtendedSheetProps>}
 */
const meta: Meta<ExtendedSheetProps> = {
	title: "Components/Sheet",
	component: Sheet,
	argTypes: {
		open: {
			control: "boolean",
			description: "Controls whether the sheet is open or closed",
		},
		side: {
			control: "select",
			options: ["top", "bottom", "left", "right"],
			description: "Controls the side from which the sheet appears",
		},
	},
};

export default meta;

type Story = StoryObj<ExtendedSheetProps>;

/**
 * Default story for the Sheet component
 * @type {Story}
 */
export const Default: Story = {
	args: {
		open: false,
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(args.open);

		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger>Open Sheet</SheetTrigger>
				<SheetContent side={args.side}>
					<h2>Sheet Content</h2>
					<p>This is the content of the sheet.</p>
				</SheetContent>
			</Sheet>
		);
	},
};
