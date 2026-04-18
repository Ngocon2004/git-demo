import Link from "next/link";
import { notFound } from "next/navigation";

// Tạm thời dùng mock data ngay tại đây (tương tự blog)
const projects = [
  { id: "1", title: "Website Portfolio", content: "Chi tiết về quá trình xây dựng website Portfolio bằng Next.js..." },
  { id: "2", title: "Ứng dụng Quản lý Công việc", content: "Phân tích kiến trúc của ứng dụng Todo App..." },
  { id: "3", title: "API RESTful", content: "Hướng dẫn xây dựng API với Node.js và Express..." },
];

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/projects" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
        ← Quay lại danh sách dự án
      </Link>
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="text-gray-700">{project.content}</div>
    </div>
  );
}
