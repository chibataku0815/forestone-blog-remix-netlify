/**
 * ヘッダーコンポーネント
 * サイト全体のナビゲーションとテーマ切り替えを提供します。
 *
 * @module Header
 * @file app/components/ui/header.tsx
 */

import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./themeToggle";
import { NavigationDrawer } from "./navigationDrawer";

/**
 * ヘッダーを表示するコンポーネント
 *
 * @returns {JSX.Element} ヘッダーコンポーネント
 */

export function Header() {
	return (
		<header className="w-full max-w-7xl mx-auto p-10 border-b flex justify-between items-center">
			<NavigationDrawer />
			<ThemeToggle />
		</header>
	);
}
