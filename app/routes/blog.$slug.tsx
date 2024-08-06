/**
 * @fileoverview ブログの記事を表示するコンポーネント
 * @file app/routes/blog.$slug.tsx
 *
 * このファイルは、指定されたスラッグに基づいてブログ記事を表示するためのコンポーネントを提供します。
 * 記事の内容はMDX形式であり、動的にバンドルされて表示されます。
 */

import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { getPosts } from "~/.server/getPosts";
import { useMemo } from "react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { format } from "date-fns";

/**
 * データローダー関数
 *
 * @param {LoaderFunctionArgs} args - ローダー関数の引数
 * @returns {Promise<Response>} JSON形式のレスポンスを返します
 * @throws {Response} 記事が見つからない場合は404エラーをスローします
 */
export const loader = async ({ params }: LoaderFunctionArgs) => {
	// すべてのブログ投稿を取得
	const posts = await getPosts();
	// パラメータのスラッグと一致するブログ投稿を取得
	const post = posts.find((p) => p.slug === params.slug);

	// ブログ投稿が見つからない場合は404エラーをスロー
	if (!post) {
		throw new Response("Not Found", { status: 404 });
	}

	// MDXファイルをバンドル
	const { code, frontmatter } = await bundleMDX({
		source: post.content,
		mdxOptions(options) {
			// remarkとrehypeプラグインを設定
			options.remarkPlugins = [...(options.remarkPlugins ?? [])];
			options.rehypePlugins = [...(options.rehypePlugins ?? [])];
			return options;
		},
	});

	// バンドルされたコードとfrontmatterをJSON形式で返す
	return json({ code, frontmatter });
};

/**
 * ブログ記事を表示するコンポーネント
 *
 * @returns {JSX.Element} ブログ記事の要素
 */
export default function BlogPost() {
	// loader関数で取得したコードとfrontmatterを取得
	const { code, frontmatter } = useLoaderData<typeof loader>();
	// MDXコンポーネントを取得
	const Component = useMemo(() => getMDXComponent(code), [code]);
	// 公開日をフォーマット
	const formattedDate = format(new Date(frontmatter.published), "yyyy-MM-dd");

	// ブログ記事を表示
	return (
		<article className="prose prose-zinc prose-2xl dark:prose-invert mx-auto py-8 px-4">
			{/* 記事のタイトルを表示 */}
			<h1>{frontmatter.title}</h1>
			{/* 記事の公開日を表示 */}
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
			{/* MDXコンポーネントを表示し、カウンターコンポーネントを埋め込む */}
			<div className="overflow-x-auto">
				<Component />
			</div>
		</article>
	);
}
