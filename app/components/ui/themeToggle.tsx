/**
 * ライトモードとダークモードを切り替えるボタンコンポーネント
 * @file app/components/ThemeToggle.tsx
 */

import { useState, useEffect } from "react";

import { Button } from "./button";

/**
 * ライトモードとダークモードを切り替えるボタンコンポーネント
 * @returns {JSX.Element} ライトモードとダークモードを切り替えるボタン
 */
export const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// ブラウザのテーマ設定を初期値として設定
		const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		setIsDarkMode(isDark);

		// テーマ設定の変更を監視
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsDarkMode(event.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	/**
	 * ダークモードとライトモードを切り替える
	 */
	const toggleTheme = () => {
		setIsDarkMode((prevState) => {
			document.documentElement.classList.toggle("dark", !prevState);
			return !prevState;
		});
	};

	return (
		<Button variant="ghost" onClick={toggleTheme}>
			{isDarkMode ? <p>ダークモード</p> : <p>ライトモード</p>}
		</Button>
	);
};
