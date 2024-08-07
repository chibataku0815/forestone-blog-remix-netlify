/**
 * Index page component
 *
 * @module Index
 * @file app/routes/_index.tsx
 */

import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/.server/getPosts";
import { Post } from "~/components/post";
import { Badge } from "~/components/ui/Badge/badge";

/**
 * Function to define metadata
 *
 * @returns {Array<Object>} Page metadata
 */
export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{
			name: "description",
			content: "Welcome to Remix on Cloudflare!",
		},
	];
};

/**
 * Data loader function
 *
 * @returns {Promise<Array<Object>>} Array of featured posts
 */
export const loader = async () => {
	// Fetch all blog posts
	const posts = await getPosts();
	// Return only the posts that are featured
	return posts.filter((post) => post.frontmatter.featured);
};

/**
 * Index page component
 *
 * @module Index
 * @file app/routes/_index.tsx
 * @returns {JSX.Element} The index page element
 */
export default function Index() {
	// Get the list of featured posts obtained from the loader function
	const featuredPosts = useLoaderData<typeof loader>();

	// Display the list of featured posts
	return (
		<div className="flex-1 px-3 grid gap-16 sm:place-items-center">
			<div className="space-y-8">
				<section>
					<ul className="grid gap-16">
						{/* Display each featured post using the Post component */}
						{featuredPosts.map((post) => (
							<li
								key={post.slug}
								className="border border-gray-300 border-dashed rounded-xl p-4"
							>
								<Post {...post} />
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}
