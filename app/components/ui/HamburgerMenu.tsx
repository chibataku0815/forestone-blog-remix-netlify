import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { NavLink } from "@remix-run/react";

export function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" onClick={() => setIsOpen(true)}>
					☰
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<nav className="flex flex-col p-4">
					<SheetClose asChild>
						<Button variant="ghost" onClick={() => setIsOpen(false)}>
							Close
						</Button>
					</SheetClose>
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
				</nav>
			</SheetContent>
		</Sheet>
	);
}
