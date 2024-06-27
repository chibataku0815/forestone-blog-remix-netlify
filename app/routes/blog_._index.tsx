/**
 * ブログのリストを表示するページ
 *
 * @module BlogLists
 * @file app/routes/blog.index.tsx
 */
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/.server/getPosts";
import { Post } from "~/components/post";

/**
 * ブログのリストを取得するローダー
 *
 * @returns {Promise<Post[]>} ブログのリスト
 */
export const loader = async () => await getPosts();

/**
 * ブログのリストを表示するコンポーネント
 *
 * @returns {JSX.Element} ブログのリスト
 */
export default function BlogLists() {
	const posts = useLoaderData<typeof loader>();
	return (
		<div className="p-10">
			<ul className="space-y-8">
				{posts.map((post) => (
					<li key={post.slug}>
						<Post {...post} />
					</li>
				))}
			</ul>
		</div>
	);
}
