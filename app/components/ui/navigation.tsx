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
		<nav className="w-full max-w-7xl mx-auto p-4 border-b md:border-b-0 flex justify-between items-center fixed md:top-0 bottom-0 left-0 right-0 md:sticky z-50 flex items-center justify-between p-4">
			<HamburgerMenu />
			<ThemeToggle />
		</nav>
	);
}
