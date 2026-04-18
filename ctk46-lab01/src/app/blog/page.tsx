import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                {post.category}
              </span>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              Đọc thêm →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
