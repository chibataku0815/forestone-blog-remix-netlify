/**
 * ブログのページ
 *
 * @module Blog
 * @file app/routes/blog.tsx
 */
import { Outlet, json, useLoaderData } from "@remix-run/react";

/**
 * ブログのページ
 *
 * @returns {JSX.Element} ブログのページ
 */
export default function Blog() {
	return (
		<div className="p-10 prose">
			<Outlet />
		</div>
	);
}
