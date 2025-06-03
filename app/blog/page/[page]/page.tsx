import HeroBlog from "@/components/hero-blog";
import { blogPosts } from "@/lib/blog-posts";
import Link from "next/link";
import Image from "next/image";

const POSTS_PER_PAGE = 9;

// Static params voor paginatie
export function generateStaticParams() {
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: `${i + 2}`,
  }));
}

// Dynamische metadata voor SEO per pagina
export async function generateMetadata({ params }: { params: { page: string } }) {
  const pageNumber = parseInt(params.page, 10);
  return {
    title: `Blog - Page ${pageNumber} | Learn Dutch Online`,
    description: `Read helpful tips, grammar explanations and updates about learning Dutch online. Page ${pageNumber}.`,
  };
}

export default function BlogPaginated({ params }: { params: { page: string } }) {
  const pageNumber = parseInt(params.page, 10);
  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  const posts = blogPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <HeroBlog />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog - Page {pageNumber}</h1>

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
                  <h2 className="text-lg font-semibold mt-1 mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-between mt-12">
          {pageNumber > 1 ? (
            <Link
              href={`/blog/page/${pageNumber - 1}`}
              className="text-black hover:underline font-medium visited:text-black"
            >
              ← Newer Posts
            </Link>
          ) : (
            <div />
          )}

          {blogPosts.length > pageNumber * POSTS_PER_PAGE && (
            <Link
              href={`/blog/page/${pageNumber + 1}`}
              className="text-black hover:underline font-medium visited:text-black"
            >
              Older Posts →
            </Link>
          )}
        </div>
      </main>
    </>
  );
}
