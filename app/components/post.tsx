/**
 * Component for displaying a preview of a blog post
 *
 * @module Post
 * @file app/components/post.tsx
 * @param {Object} props - Component properties
 * @param {string} props.slug - The slug of the post (unique identifier for the URL)
 * @param {Object} props.frontmatter - The metadata of the post
 * @param {string} props.frontmatter.title - The title of the post
 * @param {string} props.frontmatter.description - The description of the post
 * @param {string} props.frontmatter.published - The publication date of the post
 * @returns {JSX.Element} The post preview element
 *
 * @example
 * <Post slug="example-slug" frontmatter={{ title: "Example Title", description: "Example Description", published: "2021-01-01" }} />
 */

import { format } from "date-fns";
import { Link } from "@remix-run/react";
import type { PostMeta } from "~/types/post";

/**
 * Component for displaying a preview of a blog post
 * @param {PostMeta} props - Post metadata and slug
 * @returns {JSX.Element} The post preview element
 */
export const Post = ({ slug, frontmatter }: PostMeta) => {
	// Format the publication date
	const formattedDate = format(new Date(frontmatter.published), "yyyy-MM-dd");

	// Display the blog post preview
	return (
		<article className="space-y-2">
			{/* Link to the blog article */}
			<Link to={`/blog/${slug}`}>
				<h3 className="text-3xl font-bold">{frontmatter.title}</h3>
			</Link>
			{/* Description of the blog article */}
			<p className="text-gray-600">{frontmatter.description}</p>
			{/* Publication date of the blog article */}
			<time
				className="block text-sm text-cyan-700"
				dateTime={frontmatter.published}
			>
				{formattedDate}
			</time>
		</article>
	);
};
