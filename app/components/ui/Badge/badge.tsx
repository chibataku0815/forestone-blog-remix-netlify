import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "app/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				soft: "bg-muted text-muted-is-default",
				solid: "bg-solid text-solid-is-default",
				surface:
					"bg-surface text-surface-is-default border border-surface-border",
				outline: "border border-outline text-outline-is-default",
			},
			color: {
				default: "",
				destructive: "",
				success: "",
				warning: "",
				info: "",
			},
		},
		compoundVariants: [
			// Soft variants
			{
				variant: "soft",
				color: "destructive",
				class: "bg-destructive text-destructive-is-default",
			},
			{
				variant: "soft",
				color: "success",
				class: "bg-success text-success-is-default",
			},
			{
				variant: "soft",
				color: "warning",
				class: "bg-warning text-warning-is-default",
			},
			{
				variant: "soft",
				color: "info",
				class: "bg-info text-info-is-default",
			},
			// Solid variants
			{
				variant: "solid",
				color: "destructive",
				class:
					"bg-solid-destructive text-destructive-is-default hover:bg-solid-destructive",
			},
			{
				variant: "solid",
				color: "success",
				class: "bg-success-is-default text-success hover:bg-success-is-default",
			},
			{
				variant: "solid",
				color: "warning",
				class: "bg-warning-is-default text-warning hover:bg-warning-is-default",
			},
			{
				variant: "solid",
				color: "info",
				class: "bg-info-is-default text-info hover:bg-info-is-default",
			},
			// Surface variants
			{
				variant: "surface",
				color: "destructive",
				class: "text-destructive-is-default",
			},
			{
				variant: "surface",
				color: "success",
				class: "text-success-is-default",
			},
			{
				variant: "surface",
				color: "warning",
				class: "text-warning-is-default",
			},
			{
				variant: "surface",
				color: "info",
				class: "text-info-is-default",
			},
			// Outline variants
			{
				variant: "outline",
				color: "destructive",
				class:
					"border-destructive text-destructive-is-default hover:bg-destructive",
			},
			{
				variant: "outline",
				color: "success",
				class: "text-success-is-default hover:bg-success",
			},
			{
				variant: "outline",
				color: "warning",
				class: "text-warning-is-default hover:bg-warning",
			},
			{
				variant: "outline",
				color: "info",
				class: "text-info-is-default hover:bg-info",
			},
		],
		defaultVariants: {
			variant: "soft",
			color: "default",
		},
	},
);

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
	variant?: BadgeVariantProps["variant"];
	color?: BadgeVariantProps["color"];
}

function Badge({ className, variant, color, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, color }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
