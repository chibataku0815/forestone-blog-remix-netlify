/**
 * Component that defines the basic layout of the application.
 * It includes navigation, main content, and footer.
 *
 * @param {Object} props - Component properties
 * @param {ReactNode} props.children - Child elements to be displayed within the layout
 * @returns {JSX.Element} The layout of the application
 */

import type { ReactNode } from "react";
import { Navigation } from "./components/ui/navigation";
import { format } from "date-fns";

const Layout = (props: { children: ReactNode }) => (
	<div className="min-h-screen flex flex-col bg-background">
		{/* Display the navigation component */}
		<Navigation />
		{/* Display the main content */}
		<main className="">{props.children}</main>
		{/* Display the footer */}
		<footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
			{/* Display copyright information */}
			Copyright © {format(new Date(), "yyyy")} Forestone Inc.
		</footer>
	</div>
);

export default Layout;
