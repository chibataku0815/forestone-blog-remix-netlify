import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeDecorator = (Story: React.FC) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<div className="bg-background min-h-screen">
				<Story />
			</div>
		</ThemeProvider>
	);
};
