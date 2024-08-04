import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sortBy } from "lodash-es";

export type Frontmatter = {
	title: string;
	description: string;
	published: string; // YYYY-MM-DD
	featured: boolean;
};

export type PostMeta = {
	slug: string;
	frontmatter: Frontmatter;
	content: string;
};

export const getPosts = async (): Promise<PostMeta[]> => {
	const postsDirectory = path.join(process.cwd(), "app/routes/blog");
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, "utf8");
		const { data } = matter(fileContents);

		const slug = filename.replace(/\.mdx$/, "");

		return {
			slug,
			frontmatter: data as Frontmatter,
			content: fileContents,
		};
	});

	return sortBy(
		posts,
		(post) => new Date(post.frontmatter.published),
	).reverse();
};
