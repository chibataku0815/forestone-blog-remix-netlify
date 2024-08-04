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

/**
 * データローダー関数
 *
 * @param {LoaderFunctionArgs} args - ローダー関数の引数
 * @returns {Promise<Response>} JSON形式のレスポンスを返します
 * @throws {Response} 記事が見つからない場合は404エラーをスローします
 */
export const loader = async ({ params }: LoaderFunctionArgs) => {
	const posts = await getPosts();
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw new Response("Not Found", { status: 404 });
	}

	const { code, frontmatter } = await bundleMDX({
		source: post.content,
		mdxOptions(options) {
			options.remarkPlugins = [...(options.remarkPlugins ?? [])];
			options.rehypePlugins = [...(options.rehypePlugins ?? [])];
			return options;
		},
	});

	return json({ code, frontmatter });
};

/**
 * ブログ記事を表示するコンポーネント
 *
 * @returns {JSX.Element} ブログ記事の要素
 */
export default function BlogPost() {
	const { code, frontmatter } = useLoaderData<typeof loader>();
	const Component = useMemo(() => getMDXComponent(code), [code]);

	return (
		<article className="prose lg:prose-xl dark:prose-invert mx-auto py-8 px-4">
			{/* 記事のタイトルを表示 */}
			<h1>{frontmatter.title}</h1>
			{/* 記事の公開日を表示 */}
			<p className="text-sm text-gray-500">{frontmatter.published}</p>
			{/* MDXコンポーネントを表示し、カウンターコンポーネントを埋め込む */}
			<Component />
		</article>
	);
}
