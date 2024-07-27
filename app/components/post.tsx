import { format } from "date-fns";

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

import { Link } from "@remix-run/react";
import type { PostMeta } from "~/.server/getPosts";

export const Post = ({ slug, frontmatter }: PostMeta) => {
	const formattedDate = format(new Date(frontmatter.published), "yyyy-MM-dd");

	return (
		<article className="space-y-2">
			<Link to={`/blog/${slug}`}>
				<h3 className="text-3xl font-bold">{frontmatter.title}</h3>
			</Link>
			<p className="text-gray-600">{frontmatter.description}</p>
			<time
				className="block text-sm text-cyan-700"
				dateTime={frontmatter.published}
			>
				{formattedDate}
			</time>
		</article>
	);
};
