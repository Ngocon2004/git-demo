import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User, Comment } from "@/types/post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Không thể tải bình luận");
  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  
  const [author, comments] = await Promise.all([
    getUser(post.userId),
    getComments(id)
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog" className="mb-8 inline-block">
        <Button variant="ghost" className="p-0 hover:bg-transparent flex items-center gap-2 text-emerald-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại danh sách
        </Button>
      </Link>

      <article className="space-y-8">
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Bài viết #{post.id}</Badge>
            <span className="text-sm text-muted-foreground">
              Tác giả: <strong className="text-foreground">{author.name}</strong>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight capitalize leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-emerald dark:prose-invert max-w-none text-xl leading-relaxed text-muted-foreground">
          {post.body.repeat(5)} {/* Giả lập nội dung dài hơn cho đẹp layout */}
        </div>

        <Card className="bg-muted/50 border-none shadow-none mt-12">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-emerald-600 text-white font-bold">
                {author.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{author.name}</CardTitle>
              <p className="text-sm text-muted-foreground">@{author.username} • {author.company.name}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm italic text-muted-foreground">&quot;{author.company.catchPhrase}&quot;</p>
            <div className="mt-4 flex gap-4 text-xs font-medium">
              <span className="text-emerald-600">{author.email}</span>
              <span className="text-muted-foreground">{author.website}</span>
            </div>
          </CardContent>
        </Card>

        <section className="pt-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">Bình luận</h2>
            <Badge variant="outline">{comments.length}</Badge>
          </div>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="text-[10px]">
                    {comment.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{comment.name}</span>
                    <span className="text-[10px] text-muted-foreground uppercase">{comment.email}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{comment.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
