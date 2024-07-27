import type { ReactNode } from "react";
import { Navigation } from "./components/ui/navigation";

/**
 * アプリケーションの基本レイアウトを定義するコンポーネント。
 * ナビゲーション、メインコンテンツ、フッターを含みます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {ReactNode} props.children - レイアウト内に表示される子要素
 * @returns {JSX.Element} アプリケーションのレイアウト
 */
const Layout = (props: { children: ReactNode }) => (
	<div className="min-h-screen flex flex-col bg-white dark:bg-black">
		<Navigation />
		<main className="w-full max-w-7xl mx-auto flex-1 flex mt-16 md:mt-0 mb-16 md:mb-0">
			{props.children}
		</main>
		<footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
			<span className="text-sm text-gray-500">
				Illustrations by{" "}
				<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
					Icons 8
				</a>{" "}
				from <a href="https://icons8.com/illustrations">Ouch!</a>
			</span>
		</footer>
	</div>
);

export default Layout;
