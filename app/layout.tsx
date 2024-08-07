import type { ReactNode } from "react";
import { Navigation } from "./components/ui/navigation";
import { format } from "date-fns";

/**
 * アプリケーションの基本レイアウトを定義するコンポーネント。
 * ナビゲーション、メインコンテンツ、フッターを含みます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {ReactNode} props.children - レイアウト内に表示される子要素
 * @returns {JSX.Element} アプリケーションのレイアウト
 */
const Layout = (props: { children: ReactNode }) => (
	<div className="min-h-screen flex flex-col bg-background">
		{/* ナビゲーションコンポーネントを表示 */}
		<Navigation />
		{/* メインコンテンツを表示 */}
		<main className="">{props.children}</main>
		{/* フッターを表示 */}
		<footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
			{/* Copyright情報を表示 */}
			Copyright © {format(new Date(), "yyyy")} Forestone Inc.
		</footer>
	</div>
);

export default Layout;
