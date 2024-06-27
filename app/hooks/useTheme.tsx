import { useState, useEffect } from "react";

/** テーマの型定義 */
type Theme = "light" | "dark" | "system";

/**
 * テーマを管理するカスタムフック
 *
 * @module useTheme
 * @file app/hooks/useTheme.tsx
 * @returns {Object} テーマの状態と更新関数
 * @returns {Theme} theme - 現在のテーマ
 * @returns {function} setTheme - テーマを更新する関数
 */
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
