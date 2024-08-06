/**
 * ブログ投稿のプレビューを表示するコンポーネント
 *
 * @module Post
 * @file app/components/post.tsx
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.slug - 投稿のスラッグ（URL用の一意の識別子）
 * @param {Object} props.frontmatter - 投稿のメタデータ
 * @param {string} props.frontmatter.title - 投稿のタイトル
 * @param {string} props.frontmatter.description - 投稿の説明
 * @param {string} props.frontmatter.published - 投稿の公開日
 * @returns {JSX.Element} 投稿プレビューの要素
 */

import { format } from "date-fns";
import { Link } from "@remix-run/react";
import type { PostMeta } from "~/types/post";

/**
 * ブログ投稿のプレビューを表示するコンポーネント
 * @param {PostMeta} props - 投稿のメタデータとスラッグ
 * @returns {JSX.Element} 投稿プレビューの要素
 */
export const Post = ({ slug, frontmatter }: PostMeta) => {
	// 公開日をフォーマット
	const formattedDate = format(new Date(frontmatter.published), "yyyy-MM-dd");

	// ブログ投稿のプレビューを表示
	return (
		<article className="space-y-2">
			{/* ブログ記事へのリンク */}
			<Link to={`/blog/${slug}`}>
				<h3 className="text-3xl font-bold">{frontmatter.title}</h3>
			</Link>
			{/* ブログ記事の説明 */}
			<p className="text-gray-600">{frontmatter.description}</p>
			{/* ブログ記事の公開日 */}
			<time
				className="block text-sm text-cyan-700"
				dateTime={frontmatter.published}
			>
				{formattedDate}
			</time>
		</article>
	);
};
