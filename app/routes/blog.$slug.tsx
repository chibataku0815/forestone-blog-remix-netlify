import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { getPosts } from "~/.server/getPosts";
import { useMemo } from "react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { Counter } from "~/components/counter";

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

export default function BlogPost() {
	const { code, frontmatter } = useLoaderData<typeof loader>();
	const Component = useMemo(() => getMDXComponent(code), [code]);

	return (
		<article className="prose lg:prose-xl dark:prose-invert mx-auto py-8 px-4">
			<h1>{frontmatter.title}</h1>
			<p className="text-sm text-gray-500">{frontmatter.published}</p>
			<Component components={{ Counter }} />
		</article>
	);
}
