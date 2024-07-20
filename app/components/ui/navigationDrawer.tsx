/**
 * ナビゲーションドロワーコンポーネント
 * モバイルデバイス向けのナビゲーションメニューを提供します。
 *
 * @module NavigationDrawer
 * @file app/components/ui/navigationDrawer.tsx
 */
import { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import { Button } from "~/components/ui/button";

/**
 * ナビゲーションドロワーを表示するコンポーネント
 *
 * @returns {JSX.Element} ナビゲーションドロワーコンポーネント
 */

export function NavigationDrawer({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return <Button variant="outline">Open Menu</Button>;
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Menu</Button>
			</DrawerTrigger>
			<DrawerContent>{children}</DrawerContent>
		</Drawer>
	);
}
