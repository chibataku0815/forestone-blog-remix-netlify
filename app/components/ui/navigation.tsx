/**
 * ナビゲーションコンポーネント
 * サイト全体のナビゲーションとテーマ切り替えを提供します。
 *
 * @module Navigation
 * @file app/components/ui/navigation.tsx
 */

import { NavLink } from "@remix-run/react";
import { ThemeToggle } from "~/components/ui/themeToggle";
import { NavigationDrawer } from "~/components/ui/navigationDrawer";

/**
 * ナビゲーションを表示するコンポーネント
 *
 * @returns {React.FC} ナビゲーションコンポーネント
 */
export function Navigation() {
	return (
		<nav className="w-full max-w-7xl mx-auto p-4 border-b md:border-b-0 flex justify-between items-center bg-background fixed md:top-0 bottom-0 left-0 right-0 md:sticky z-50">
			<NavigationDrawer>
				<div className="hidden md:flex space-x-4">
					<NavLink to="/" className="hover:text-primary">
						Home
					</NavLink>
					<NavLink to="/blog" className="hover:text-primary">
						Blog
					</NavLink>
					<NavLink to="/about" className="hover:text-primary">
						About
					</NavLink>
				</div>
			</NavigationDrawer>
			<ThemeToggle />
		</nav>
	);
}
