export const metadata = {
  title: "Blog - Learn Dutch Online",
  description: "Read tips, explanations and updates about learning Dutch.",
};

import HeroBlog from "@/components/hero-blog";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const posts = blogPosts.slice(0, POSTS_PER_PAGE);

  return (
    <>
      <HeroBlog />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h2 className="text-lg font-semibold mt-1 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-between mt-12">
          <div />
          {blogPosts.length > POSTS_PER_PAGE && (
            <Link
              href="/blog/page/2"
              className="text-purple-600 hover:underline font-medium visited:text-black"
            >
              Older Posts →
            </Link>
          )}
        </div>
      </main>
    </>
  );
}
