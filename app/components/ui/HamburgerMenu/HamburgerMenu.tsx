/**
 * @fileoverview HamburgerMenu component
 * @description HamburgerMenu component is a component that renders a hamburger menu
 * @file app/components/ui/HamburgerMenu/HamburgerMenu.tsx
 * @example
 * <HamburgerMenu />
 */

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../Sheet/sheet";
import { NavLink } from "@remix-run/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { ThemeToggle } from "../themeToggle";

export function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<FaBarsStaggered onClick={() => setIsOpen(true)} size={32} />
			</SheetTrigger>
			<SheetContent side="right">
				<nav className="flex flex-col p-4">
					<NavLink to="/" className="p-2">
						Home
					</NavLink>
					<NavLink to="/about" className="p-2">
						About
					</NavLink>
					<NavLink to="/blog" className="p-2">
						Blog
					</NavLink>
					<NavLink to="/contact" className="p-2">
						Contact
					</NavLink>
					<ThemeToggle />
				</nav>
			</SheetContent>
		</Sheet>
	);
}
