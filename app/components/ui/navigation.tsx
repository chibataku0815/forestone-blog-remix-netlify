/**
 * ナビゲーションコンポーネント
 * サイト全体のナビゲーションとテーマ切り替えを提供します。
 *
 * @module Navigation
 * @file app/components/ui/navigation.tsx
 */

import { ThemeToggle } from "~/components/ui/themeToggle";
import { HamburgerMenu } from "./HamburgerMenu";

/**
 * ナビゲーションを表示するコンポーネント
 *
 * @returns {React.FC} ナビゲーションコンポーネント
 */
export function Navigation() {
	return (
		<nav className="flex items-center justify-between p-4">
			<HamburgerMenu />
			<ThemeToggle />
		</nav>
	);
}
