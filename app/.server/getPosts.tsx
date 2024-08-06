/**
 * @fileoverview This file contains a utility function `getPosts` responsible for fetching and processing blog posts from the file system. It reads all markdown files from the designated directory, extracts their frontmatter and content using `gray-matter`, and returns a sorted array of `PostMeta` objects. Each `PostMeta` object contains the post's slug, frontmatter, and raw markdown content. This function is crucial for dynamically generating blog post listings and individual post pages.
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
	// ブログ投稿が格納されているディレクトリのパスを取得
	const postsDirectory = path.join(process.cwd(), "app/routes/blog");
	// ディレクトリ内のすべてのファイル名を取得
	const filenames = fs.readdirSync(postsDirectory);

	// 各ファイルに対して処理を実行
	const posts = filenames.map((filename) => {
		// ファイルの絶対パスを取得
		const filePath = path.join(postsDirectory, filename);
		// ファイルの内容をUTF-8エンコーディングで読み込む
		const fileContents = fs.readFileSync(filePath, "utf8");
		// gray-matterを使用してファイルの内容からfrontmatterとコンテンツを抽出
		const { data } = matter(fileContents);

		// ファイル名からスラッグを生成（.mdx拡張子を除去）
		const slug = filename.replace(/\.mdx$/, "");

		// PostMetaオブジェクトを作成
		return {
			slug,
			frontmatter: data as Frontmatter,
			content: fileContents,
		};
	});

	// 公開日でソートし、新しい投稿が最初に来るように逆順にする
	return sortBy(
		posts,
		(post) => new Date(post.frontmatter.published),
	).reverse();
};
