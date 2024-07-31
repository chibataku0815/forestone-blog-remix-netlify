import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "app/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				soft: "bg-muted text-muted-foreground",
				solid: "bg-solid text-solid",
				surface: "bg-surface text-surface-foreground",
				outline: "bg-background border border-border text-foreground",
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
				class: "bg-destructive text-destructive-foreground",
			},
			{
				variant: "soft",
				color: "success",
				class: "bg-success text-success-foreground",
			},
			{
				variant: "soft",
				color: "warning",
				class: "bg-warning text-warning-foreground",
			},
			{
				variant: "soft",
				color: "info",
				class: "bg-info text-info-foreground",
			},
			// Solid variants
			{
				variant: "solid",
				color: "destructive",
				class: "bg-solid-destructive text-solid-destructive",
			},
			{
				variant: "solid",
				color: "success",
				class:
					"bg-success-foreground text-success hover:bg-success-foreground/90",
			},
			{
				variant: "solid",
				color: "warning",
				class:
					"bg-warning-foreground text-warning hover:bg-warning-foreground/90",
			},
			{
				variant: "solid",
				color: "info",
				class: "bg-info-foreground text-info hover:bg-info-foreground/90",
			},
			// Surface variants
			{
				variant: "surface",
				color: "destructive",
				class: "text-destructive-foreground",
			},
			{
				variant: "surface",
				color: "success",
				class: "text-success-foreground",
			},
			{
				variant: "surface",
				color: "warning",
				class: "text-warning-foreground",
			},
			{
				variant: "surface",
				color: "info",
				class: "text-info-foreground",
			},
			// Outline variants
			{
				variant: "outline",
				color: "destructive",
				class:
					"border-destructive text-destructive-foreground hover:bg-destructive/10",
			},
			{
				variant: "outline",
				color: "success",
				class: "border-success text-success-foreground hover:bg-success/10",
			},
			{
				variant: "outline",
				color: "warning",
				class: "border-warning text-warning-foreground hover:bg-warning/10",
			},
			{
				variant: "outline",
				color: "info",
				class: "border-info text-info-foreground hover:bg-info/10",
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
