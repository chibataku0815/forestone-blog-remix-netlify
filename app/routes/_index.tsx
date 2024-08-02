import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/.server/getPosts";
import { Post } from "~/components/post";
import { Badge } from "~/components/ui/Badge/badge";

/**
 * インデックスページのコンポーネント
 *
 * @module Index
 * @file app/routes/_index.tsx
 */

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
	const posts = await getPosts();
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
	const featuredPosts = useLoaderData<typeof loader>();

	return (
		<div className="flex-1 px-3 grid gap-16 sm:place-items-center">
			<div className="space-y-8">
				<section>
					<ul className="grid gap-16">
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
