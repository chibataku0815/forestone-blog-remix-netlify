import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "app/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default: "bg-background text-foreground hover:bg-background-hover",
				destructive:
					"bg-destructive-background text-destructive-foreground hover:bg-destructive-background-hover",
				success:
					"bg-success-background text-success-foreground hover:bg-success-background-hover",
				warning:
					"bg-warning-background text-warning-foreground hover:bg-warning-background-hover",
				info: "bg-info-background text-info-foreground hover:bg-info-background-hover",
				outline:
					"border border-border bg-background text-foreground hover:bg-background-hover",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
