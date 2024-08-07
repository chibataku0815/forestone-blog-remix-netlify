/**
 * @fileoverview
 * Root component of the application
 * This file serves as the entry point for the Remix application,
 * defining the overall layout and metadata.
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
 * Define the links used in the application.
 * Here, we are loading fonts from Google Fonts.
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
 * Define the metadata for the application.
 * Setting the title and description.
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
 * Root component of the application.
 * Sets up the basic HTML structure, metadata, scripts, styles,
 * and defines the overall structure of the application.
 *
 * @returns {JSX.Element} Root element of the application
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
				{/* Theme provider using next-themes */}
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{/* Application layout */}
					<Layout>
						{/* Display content of child routes */}
						<Outlet />
					</Layout>
					{/* Scroll position restoration */}
					<ScrollRestoration />
					{/* Client-side scripts */}
					<Scripts />
					{/* Live reload in development mode */}
					<LiveReload />
				</ThemeProvider>
			</body>
		</html>
	);
}
