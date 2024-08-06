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
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "~/global.css";
import { ThemeProvider } from "next-themes";
import Layout from "./layout";

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
		<html lang="ja" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{/* next-themesによるテーマプロバイダー */}
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{/* アプリケーションのレイアウト */}
					<Layout>
						{/* 子ルートのコンテンツを表示 */}
						<Outlet />
					</Layout>
					{/* スクロール位置の復元 */}
					<ScrollRestoration />
					{/* クライアントサイドスクリプト */}
					<Scripts />
					{/* 開発モードでのライブリロード */}
					<LiveReload />
				</ThemeProvider>
			</body>
		</html>
	);
}
