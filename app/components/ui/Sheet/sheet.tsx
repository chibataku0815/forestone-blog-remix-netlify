/**
 * @fileoverview
 * Sheet component
 * This file provides the implementation of the Sheet component, including its variants and subcomponents.
 *
 * @file app/components/ui/Sheet/sheet.tsx
 * @example
 * <Sheet open={isOpen} onOpenChange={setIsOpen}>
 *   <SheetTrigger>Open Sheet</SheetTrigger>
 *   <SheetContent side="right">
 *     <h2>Sheet Content</h2>
 *     <p>This is the content of the sheet.</p>
 *   </SheetContent>
 * </Sheet>
 */

"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "app/lib/utils";

/**
 * Root component for the sheet
 * @module Sheet
 */
const Sheet = SheetPrimitive.Root;

/**
 * Trigger component for opening the sheet
 * @module SheetTrigger
 */
const SheetTrigger = SheetPrimitive.Trigger;

/**
 * Close button component for the sheet
 * @module SheetClose
 */
const SheetClose = SheetPrimitive.Close;

/**
 * Portal component for rendering the sheet in a different part of the DOM
 * @module SheetPortal
 */
const SheetPortal = SheetPrimitive.Portal;

/**
 * Overlay component for the sheet background
 * @module SheetOverlay
 * @param {Object} props - Component properties
 * @param {string} props.className - Additional class names
 * @param {React.Ref} ref - Reference to the overlay element
 * @returns {JSX.Element} The overlay element
 */
const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

/**
 * Variants for the sheet component
 * @module sheetVariants
 */
const sheetVariants = cva(
	"fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

/**
 * Props for the SheetContent component
 * @typedef {Object} SheetContentProps
 * @property {string} side - The side from which the sheet appears
 * @property {string} className - Additional class names
 * @property {React.ReactNode} children - Child elements
 */
interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

/**
 * Content component for the sheet
 * @module SheetContent
 * @param {SheetContentProps} props - Component properties
 * @param {React.Ref} ref - Reference to the content element
 * @returns {JSX.Element} The content element
 */
const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Content>,
	SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={cn(
				sheetVariants({ side }),
				"bg-white dark:bg-black",
				className,
			)}
			{...props}
		>
			{children}
			<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
				<X className="h-4 w-4" />
				<span className="sr-only">Close</span>
			</SheetPrimitive.Close>
		</SheetPrimitive.Content>
	</SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

/**
 * Header component for the sheet
 * @module SheetHeader
 * @param {Object} props - Component properties
 * @param {string} props.className - Additional class names
 * @returns {JSX.Element} The header element
 */
const SheetHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col space-y-2 text-center sm:text-left",
			className,
		)}
		{...props}
	/>
);
SheetHeader.displayName = "SheetHeader";

/**
 * Footer component for the sheet
 * @module SheetFooter
 * @param {Object} props - Component properties
 * @param {string} props.className - Additional class names
 * @returns {JSX.Element} The footer element
 */
const SheetFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className,
		)}
		{...props}
	/>
);
SheetFooter.displayName = "SheetFooter";

/**
 * Title component for the sheet
 * @module SheetTitle
 * @param {Object} props - Component properties
 * @param {string} props.className - Additional class names
 * @param {React.Ref} ref - Reference to the title element
 * @returns {JSX.Element} The title element
 */
const SheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn("text-lg font-semibold text-foreground", className)}
		{...props}
	/>
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

/**
 * Description component for the sheet
 * @module SheetDescription
 * @param {Object} props - Component properties
 * @param {string} props.className - Additional class names
 * @param {React.Ref} ref - Reference to the description element
 * @returns {JSX.Element} The description element
 */
const SheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
};
