/**
 * @fileoverview This file contains a utility function `getPosts` responsible for fetching and processing blog posts from the file system.
 * It reads all markdown files from the designated directory, extracts their frontmatter and content using `gray-matter`,
 * and returns a sorted array of `PostMeta` objects. Each `PostMeta` object contains the post's slug, frontmatter, and raw markdown content.
 * This function is crucial for dynamically generating blog post listings and individual post pages.
 * @file app/.server/getPosts.tsx
 * @example
 * const posts = await getPosts();
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sortBy } from "lodash-es";
import type { PostMeta, Frontmatter } from "~/types/post";

/**
 * Frontmatter type definition
 * @typedef {Object} Frontmatter
 * @property {string} title - The title of the post
 * @property {string} description - The description of the post
 * @property {string} published - The publication date of the post (YYYY-MM-DD)
 * @property {boolean} featured - Whether the post is featured
 */

/**
 * Post metadata type definition
 * @typedef {Object} PostMeta
 * @property {string} slug - The slug of the post
 * @property {Frontmatter} frontmatter - The frontmatter of the post
 * @property {string} content - The content of the post
 */

/**
 * Function to fetch blog posts
 * @returns {Promise<PostMeta[]>} Array of post metadata
 */
export const getPosts = async (): Promise<PostMeta[]> => {
	// Get the path to the directory where blog posts are stored
	const postsDirectory = path.join(process.cwd(), "app/routes/blog");
	// Get all file names in the directory
	const filenames = fs.readdirSync(postsDirectory);

	// Process each file
	const posts = filenames.map((filename) => {
		// Get the absolute path of the file
		const filePath = path.join(postsDirectory, filename);
		// Read the file content with UTF-8 encoding
		const fileContents = fs.readFileSync(filePath, "utf8");
		// Use gray-matter to extract frontmatter and content from the file
		const { data } = matter(fileContents);

		// Generate a slug from the filename (removing the .mdx extension)
		const slug = filename.replace(/\.mdx$/, "");

		// Create a PostMeta object
		return {
			slug,
			frontmatter: data as Frontmatter,
			content: fileContents,
		};
	});

	// Sort by publication date, with the newest posts first
	return sortBy(
		posts,
		(post) => new Date(post.frontmatter.published),
	).reverse();
};
