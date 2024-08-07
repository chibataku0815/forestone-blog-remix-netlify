/**
 * Type definitions for blog post data
 * @module Post
 */

/**
 * Frontmatter type definition
 */
export type Frontmatter = {
  /** The title of the post */
  title: string;
  /** The description of the post */
  description: string;
  /** The publication date of the post (YYYY-MM-DD) */
  published: string;
  /** Whether the post is featured */
  featured: boolean;
};

/**
 * Post metadata type definition
 */
export type PostMeta = {
  /** The slug of the post */
  slug: string;
  /** The frontmatter of the post */
  frontmatter: Frontmatter;
  /** The content of the post */
  content: string;
};
