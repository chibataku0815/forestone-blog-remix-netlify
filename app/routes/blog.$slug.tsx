/**
 * @fileoverview Component for displaying a blog article
 * @file app/routes/blog.$slug.tsx
 *
 * This file provides a component to display a blog article based on the specified slug.
 * The content of the article is in MDX format and is dynamically bundled for display.
 *
 * @example
 * <BlogPost />
 */

import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { getPosts } from "~/.server/getPosts";
import { useMemo } from "react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { format } from "date-fns";

/**
 * Data loader function
 *
 * @param {LoaderFunctionArgs} args - Arguments for the loader function
 * @returns {Promise<Response>} Returns a JSON response
 * @throws {Response} Throws a 404 error if the article is not found
 */
export const loader = async ({ params }: LoaderFunctionArgs) => {
	// Fetch all blog posts
	const posts = await getPosts();
	// Get the blog post that matches the slug parameter
	const post = posts.find((p) => p.slug === params.slug);

	// Throw a 404 error if the blog post is not found
	if (!post) {
		throw new Response("Not Found", { status: 404 });
	}

	// Bundle the MDX file
	const { code, frontmatter } = await bundleMDX({
		source: post.content,
		mdxOptions(options) {
			// Set remark and rehype plugins
			options.remarkPlugins = [...(options.remarkPlugins ?? [])];
			options.rehypePlugins = [...(options.rehypePlugins ?? [])];
			return options;
		},
	});

	return json({ code, frontmatter });
};

/**
 * Component for displaying a blog article
 *
 * @returns {JSX.Element} The blog article element
 */
export default function BlogPost() {
	// Get the code and frontmatter obtained from the loader function
	const { code, frontmatter } = useLoaderData<typeof loader>();
	// Get the MDX component
	const Component = useMemo(() => getMDXComponent(code), [code]);
	// Format the published date
	const formattedDate = format(new Date(frontmatter.published), "yyyy-MM-dd");

	// Display the blog article
	return (
		<article className="prose prose-zinc prose-2xl dark:prose-invert mx-auto py-8 px-4">
			{/* Display the article title */}
			<h1>{frontmatter.title}</h1>
			{/* Display the article published date */}
			<div className="flex flex-row gap-2">
				<p className="">
					<span className="">Date: </span>
					{formattedDate}
				</p>
				<p className="">
					<span className="">Read: </span>
				</p>
				<p className="">
					<span className="">Tags: </span>
				</p>
			</div>
			{/* Display the MDX component */}
			<div className="overflow-x-auto">
				<Component />
			</div>
		</article>
	);
}
