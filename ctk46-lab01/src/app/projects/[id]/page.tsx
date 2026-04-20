import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Tạm thời dùng mock data ngay tại đây
const projects = [
  { id: "1", title: "Website Portfolio", status: "Đang phát triển", content: "Dự án website cá nhân được xây dựng với mục tiêu giới thiệu bản thân và các kỹ năng đã học. Sử dụng Next.js App Router, Tailwind CSS và shadcn/ui để tối ưu hóa hiệu suất và giao diện." },
  { id: "2", title: "Ứng dụng Quản lý Công việc", status: "Hoàn thành", content: "Một ứng dụng Todo App mạnh mẽ cho phép người dùng quản lý công việc hàng ngày, lưu trữ dữ liệu cục bộ và hỗ trợ chế độ tối. Tập trung vào trải nghiệm người dùng và tính tương tác." },
  { id: "3", title: "API RESTful", status: "Hoàn thành", content: "Hệ thống API backend phục vụ cho quản lý sản phẩm, được viết bằng Node.js và Express. Hỗ trợ đầy đủ các thao tác CRUD, xác thực người dùng và kết nối cơ sở dữ liệu MongoDB." },
];

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/projects" className="mb-8 inline-block">
        <Button variant="ghost" className="p-0 hover:bg-transparent flex items-center gap-2 text-emerald-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại danh sách dự án
        </Button>
      </Link>

      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="p-0 mb-8">
          <Badge className="w-fit mb-4">{project.status}</Badge>
          <CardTitle className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="prose prose-emerald dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground">
              {project.content}
            </p>
            <div className="mt-12 h-64 bg-muted rounded-3xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
              <p className="text-muted-foreground font-medium">Hình ảnh minh họa dự án</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
