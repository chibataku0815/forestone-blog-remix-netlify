/**
 * @fileoverview
 * The index page of the blog.
 *
 * @module BlogLists
 * @file app/routes/blog.index.tsx
 * @example
 * <BlogLists />
 */
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/.server/getPosts";
import { Post } from "~/components/post";

/**
 * Loader to fetch the list of blog posts
 *
 * @returns {Promise<Post[]>} List of blog posts
 */
export const loader = async () => await getPosts();

/**
 * Component to display the list of blog posts
 *
 * @returns {JSX.Element} List of blog posts
 */
export default function BlogLists() {
	// Get the list of blog posts from the loader function
	const posts = useLoaderData<typeof loader>();

	// Display the list of blog posts in a ul element
	return (
		<div className="p-10">
			<ul className="space-y-8">
				{/* Display each blog post using the Post component */}
				{posts.map((post) => (
					<li key={post.slug}>
						<Post {...post} />
					</li>
				))}
			</ul>
		</div>
	);
}
