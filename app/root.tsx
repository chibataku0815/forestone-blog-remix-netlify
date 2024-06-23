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
import "~/global.css";
import { Navigation } from "~/components/ui/navigation";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
	},
];

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

export const meta: MetaFunction = () => [
	{ title: "Remix 🤝 MDX" },
	{
		name: "description",
		content: "Template showing off Remix's new MDX capabilities",
	},
];

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
				<script
					dangerouslySetInnerHTML={{
						__html: `
						(function() {
							var savedTheme = localStorage.getItem('theme');
							if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
								document.documentElement.classList.add('dark');
							}
						})();
					`,
					}}
				/>
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
