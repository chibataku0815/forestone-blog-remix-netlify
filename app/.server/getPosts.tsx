/**
 * @fileoverview ブログ投稿を取得するためのユーティリティ関数
 * @file app/.server/getPosts.tsx
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sortBy } from "lodash-es";
import type { PostMeta, Frontmatter } from "~/types/post";

/**
 * フロントマターの型定義
 * @typedef {Object} Frontmatter
 * @property {string} title - 投稿のタイトル
 * @property {string} description - 投稿の説明
 * @property {string} published - 投稿の公開日 (YYYY-MM-DD)
 * @property {boolean} featured - フィーチャーされた投稿かどうか
 */

/**
 * 投稿メタデータの型定義
 * @typedef {Object} PostMeta
 * @property {string} slug - 投稿のスラッグ
 * @property {Frontmatter} frontmatter - 投稿のフロントマター
 * @property {string} content - 投稿の内容
 */

/**
 * ブログ投稿を取得する関数
 * @returns {Promise<PostMeta[]>} 投稿メタデータの配列
 */

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
