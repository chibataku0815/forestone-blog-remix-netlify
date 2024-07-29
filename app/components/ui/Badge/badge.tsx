import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "app/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				soft: "",
				solid: "",
				outline: "bg-background",
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
				color: "default",
				class: "bg-background-muted text-foreground-muted",
			},
			{
				variant: "soft",
				color: "destructive",
				class: "bg-destructive-background text-destructive-foreground",
			},
			{
				variant: "soft",
				color: "success",
				class: "bg-success-background text-success-foreground",
			},
			{
				variant: "soft",
				color: "warning",
				class: "bg-warning-background text-warning-foreground",
			},
			{
				variant: "soft",
				color: "info",
				class: "bg-info-background text-info-foreground",
			},
			// Solid variants
			{
				variant: "solid",
				color: "default",
				class: "bg-foreground text-background hover:bg-foreground/90",
			},
			{
				variant: "solid",
				color: "destructive",
				class:
					"bg-destructive-foreground text-destructive-background hover:bg-destructive-foreground/90",
			},
			{
				variant: "solid",
				color: "success",
				class:
					"bg-success-foreground text-success-background hover:bg-success-foreground/90",
			},
			{
				variant: "solid",
				color: "warning",
				class:
					"bg-warning-foreground text-warning-background hover:bg-warning-foreground/90",
			},
			{
				variant: "solid",
				color: "info",
				class:
					"bg-info-foreground text-info-background hover:bg-info-foreground/90",
			},
			// Outline variants
			{
				variant: "outline",
				color: "default",
				class: "border border-border text-foreground hover:bg-background-hover",
			},
			{
				variant: "outline",
				color: "destructive",
				class:
					"border border-destructive-border text-destructive-foreground hover:bg-destructive-background/10",
			},
			{
				variant: "outline",
				color: "success",
				class:
					"border border-success-border text-success-foreground hover:bg-success-background/10",
			},
			{
				variant: "outline",
				color: "warning",
				class:
					"border border-warning-border text-warning-foreground hover:bg-warning-background/10",
			},
			{
				variant: "outline",
				color: "info",
				class:
					"border border-info-border text-info-foreground hover:bg-info-background/10",
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
