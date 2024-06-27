/**
 * アプリのルートコンポーネント
 * このファイルはRemixアプリケーションのエントリーポイントとなり、
 * 全体的なレイアウトとメタデータを定義します。
 *
 * @module App
 * @file app/root.tsx
 */

import {
	Links,
	LiveReload,
	Meta,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";
import type { ReactNode } from "react";
import type { LinksFunction } from "@remix-run/node";
import { useEffect } from "react";
import "~/global.css";
import { Navigation } from "~/components/ui/navigation";

/**
 * アプリケーションで使用するリンクを定義します。
 * ここでは、Google Fontsからフォントをロードしています。
 *
 * @type {LinksFunction}
 */
export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
	},
];

/**
 * テーマの初期化を行うコンポーネント
 */
const ThemeInitializer = () => {
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (
			savedTheme === "dark" ||
			(savedTheme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		}
	}, []);

	return null;
};

/**
 * アプリケーションの基本レイアウトを定義するコンポーネント。
 * ナビゲーション、メインコンテンツ、フッターを含みます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {ReactNode} props.children - レイアウト内に表示される子要素
 * @returns {JSX.Element} アプリケーションのレイアウト
 */
const Layout = (props: { children: ReactNode }) => (
	<div className="min-h-screen flex flex-col">
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

/**
 * アプリケーションのメタデータを定義します。
 * タイトルと説明を設定しています。
 *
 * @type {MetaFunction}
 */
export const meta: MetaFunction = () => [
	{ title: "Remix 🤝 MDX" },
	{
		name: "description",
		content: "Template showing off Remix's new MDX capabilities",
	},
];

/**
 * アプリケーションのルートコンポーネント。
 * HTMLの基本構造、メタデータ、スクリプト、スタイルを設定し、
 * アプリケーションの全体的な構造を定義します。
 *
 * @returns {JSX.Element} アプリケーションのルート要素
 */
export default function App() {
	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<ThemeInitializer />
				<Layout>
					<Outlet />
				</Layout>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
