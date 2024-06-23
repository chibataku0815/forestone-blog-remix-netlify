"use client";

import { Button } from "./button";
import { useTheme } from "~/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSun,
	faMoon,
	faLaptop,
	faCircleQuestion,
} from "@fortawesome/pro-solid-svg-icons";

/**
 * テーマ切り替えコンポーネント
 *
 * システム設定、ライトモード、ダークモードを切り替えるボタンを提供します。
 * 現在のテーマに応じたアイコンとテキストを表示します。
 *
 * @returns {JSX.Element} テーマ切り替えボタン
 */
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
				return "システム設定";
			case "light":
				return "ライトモード";
			case "dark":
				return "ダークモード";
			default:
				return "不明";
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
