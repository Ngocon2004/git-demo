import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    status: "Đang phát triển",
  },
  {
    id: "2",
    title: "Ứng dụng Quản lý Công việc",
    description: "Ứng dụng Todo App với React và Local Storage",
    tech: ["React", "CSS Modules", "JavaScript"],
    status: "Hoàn thành",
  },
  {
    id: "3",
    title: "API RESTful",
    description: "API quản lý sản phẩm với Node.js và Express",
    tech: ["Node.js", "Express", "MongoDB"],
    status: "Hoàn thành",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <Link href={`/projects/${project.id}`}>
                <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors">{project.title}</h2>
              </Link>
              <span className={`text-xs px-2 py-1 rounded-full ${project.status === "Hoàn thành" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <Link href={`/projects/${project.id}`} className="mt-4 text-blue-600 text-sm hover:underline">
              Xem chi tiết →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
