/**
 * インデックスページのコンポーネント
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
 * メタデータを定義する関数
 *
 * @returns {Array<Object>} ページのメタデータ
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
 * データローダー関数
 *
 * @returns {Promise<Array<Object>>} フィーチャーされた投稿の配列
 */
export const loader = async () => {
	// すべてのブログ投稿を取得
	const posts = await getPosts();
	// featuredがtrueの投稿のみを返す
	return posts.filter((post) => post.frontmatter.featured);
};

/**
 * インデックスページのコンポーネント
 *
 * @module Index
 * @file app/routes/_index.tsx
 * @returns {JSX.Element} インデックスページの要素
 */
export default function Index() {
	// loader関数で取得したフィーチャーされた投稿のリストを取得
	const featuredPosts = useLoaderData<typeof loader>();

	// フィーチャーされた投稿のリストを表示
	return (
		<div className="flex-1 px-3 grid gap-16 sm:place-items-center">
			<div className="space-y-8">
				<section>
					<ul className="grid gap-16">
						{/* 各フィーチャーされた投稿をPostコンポーネントで表示 */}
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
