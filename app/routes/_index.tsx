import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/.server/getPosts";
import { Post } from "~/components/post";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{
			name: "description",
			content: "Welcome to Remix on Cloudflare!",
		},
	];
};

export const loader = async () => {
	const posts = await getPosts();
	return posts.filter((post) => post.frontmatter.featured);
};

export default function Index() {
	const featuredPosts = useLoaderData<typeof loader>();

	return (
		<div className="flex-1 p-10 grid sm:grid-cols-2 gap-16 sm:place-items-center">
			<div className="space-y-8">
				<div>
					<h2 className="text-4xl font-bold">Remix 🤝 MDX</h2>
				</div>
				<hr />
				<section>
					<h3 className="text-xl tracking-wide">✨ FEATURED ✨</h3>
					<ul className="mt-4 space-y-8">
						{featuredPosts.map((post) => (
							<li key={post.slug}>
								<Post {...post} />
							</li>
						))}
					</ul>
				</section>
			</div>
			<Button>Click me</Button>
			<div className="hidden sm:block">
				<img
					src="/hero.png"
					alt="Abstract sculpture with different colorful shapes"
				/>
			</div>
		</div>
	);
}
