import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User, Comment } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) notFound();
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Không thể tải thông tin tác giả");
  return res.json();
}

async function getComments(postId: string): Promise<Comment[]> {
  // Bài tập tự làm 1.2: Fetch danh sách comments
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Không thể tải bình luận");
  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  // Bài tập tự làm 1.3: Chạy song song các request bằng Promise.all
  // Lưu ý: Chúng ta lấy post trước vì cần userId cho request getUser
  const post = await getPost(id);
  
  const [author, comments] = await Promise.all([
    getUser(post.userId),
    getComments(id)
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <h1 className="text-4xl font-bold mb-4 capitalize">{post.title}</h1>
        
        <div className="flex items-center gap-3 mb-8 text-sm text-gray-500">
          <span>Tác giả: <strong className="text-gray-900">{author.name}</strong></span>
          <span>•</span>
          <span>{author.email}</span>
        </div>

        <div className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-12">
          {post.body}
        </div>

        {/* Thông tin tác giả */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-12">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-gray-600">
            <strong>{author.name}</strong> (@{author.username}) — {author.company.name}
          </p>
          <p className="text-gray-500 text-sm italic">{author.company.catchPhrase}</p>
        </div>

        {/* Bài tập tự làm 1.2: Hiển thị danh sách bình luận */}
        <div className="border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Bình luận ({comments.length})</h2>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{comment.name}</span>
                  <span className="text-xs text-gray-400">{comment.email}</span>
                </div>
                <p className="text-gray-600 text-sm">{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
