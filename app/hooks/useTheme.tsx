/**
 * Custom hook to manage the theme (light, dark, system).
 *
 * @module useTheme
 * @file app/hooks/useTheme.tsx
 * @returns {Object} The current theme and a function to update the theme.
 * @returns {Theme} theme - The current theme.
 * @returns {function} setTheme - Function to update the theme.
 */

import { useState, useEffect } from "react";

/** Type definition for the theme */
type Theme = "light" | "dark" | "system";

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>("system");

	// Load the saved theme from localStorage on initial render
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	// Save the theme to localStorage and update the document class
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
