import { useState, useEffect } from "react";
import { Button } from "./button";
import { useTheme } from "~/hooks/useTheme";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		if (theme === "system") {
			setTheme("light");
		} else if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("system");
		}
	};

	return (
		<Button variant="ghost" onClick={toggleTheme}>
			{theme === "system"
				? "システム設定"
				: theme === "light"
					? "ライトモード"
					: "ダークモード"}
		</Button>
	);
};
