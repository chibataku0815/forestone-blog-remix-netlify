/**
 * @fileoverview
 * Theme toggle component
 *
 * Provides a button to switch between system, light, and dark modes.
 * Displays an icon and text based on the current theme.
 *
 * @module ThemeToggle
 * @file app/components/ui/themeToggle.tsx
 * @returns {JSX.Element} Theme toggle button
 * @example
 * <ThemeToggle />
 */

"use client";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSun,
	faMoon,
	faLaptop,
	faCircleQuestion,
} from "@fortawesome/pro-solid-svg-icons";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const toggleTheme = () => {
		if (theme === "system") {
			setTheme("light");
		} else if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("system");
		}
	};

	const getThemeIcon = () => {
		switch (theme) {
			case "system":
				return faLaptop;
			case "light":
				return faSun;
			case "dark":
				return faMoon;
			default:
				return faCircleQuestion;
		}
	};

	const getThemeText = () => {
		switch (theme) {
			case "system":
				return "System";
			case "light":
				return "Light Mode";
			case "dark":
				return "Dark Mode";
			default:
				return "Unknown";
		}
	};

	return (
		<Button
			variant="ghost"
			onClick={toggleTheme}
			className="flex items-center gap-2"
		>
			<FontAwesomeIcon icon={getThemeIcon()} className="h-4 w-4" />
			<span>{getThemeText()}</span>
		</Button>
	);
};
