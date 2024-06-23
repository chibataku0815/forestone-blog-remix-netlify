import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>("system");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			document.documentElement.classList.toggle("dark", systemTheme === "dark");
		} else {
			document.documentElement.classList.toggle("dark", theme === "dark");
		}
	}, [theme]);

	return { theme, setTheme };
};
