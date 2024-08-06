/**
 * ナビゲーションコンポーネント
 * サイト全体のナビゲーションとテーマ切り替えを提供します。
 *
 * @module Navigation
 * @file app/components/ui/navigation.tsx
 */

import { HamburgerMenu } from "./HamburgerMenu";

/**
 * ナビゲーションを表示するコンポーネント
 *
 * @returns {React.FC} ナビゲーションコンポーネント
 */
export function Navigation() {
	return (
		<nav className="w-full max-w-7xl mx-auto flex justify-end items-center fixed md:top-0 bottom-0 left-0 right-0 md:sticky z-50 p-6 border-b border-gray-800">
			<HamburgerMenu />
		</nav>
	);
}
