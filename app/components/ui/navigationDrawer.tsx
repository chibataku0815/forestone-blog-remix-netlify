/**
 * ナビゲーションドロワーコンポーネント
 * モバイルデバイス向けのナビゲーションメニューを提供します。
 *
 * @module NavigationDrawer
 * @file app/components/ui/navigationDrawer.tsx
 */
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import { Button } from "~/components/ui/button";
import { NavLink } from "@remix-run/react";

/**
 * ナビゲーションドロワーを表示するコンポーネント
 *
 * @returns {JSX.Element} ナビゲーションドロワーコンポーネント
 */

export function NavigationDrawer() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Menu</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="p-4">
					<nav>
						<ul className="space-y-2">
							<li>
								<NavLink to="/" className="block p-2 hover:bg-gray-100">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/blog" className="block p-2 hover:bg-gray-100">
									Blog
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" className="block p-2 hover:bg-gray-100">
									About
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
