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
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black mb-12 tracking-tight">Các dự án của tôi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all hover:-translate-y-2 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                project.status === "Hoàn thành" 
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" 
                : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              }`}>
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl font-black mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{project.title}</h2>
            <p className="text-gray-600 dark:text-zinc-400 mb-8 flex-1 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-gray-50 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 text-xs font-bold rounded-lg border border-gray-100 dark:border-zinc-700">{t}</span>
              ))}
            </div>
            <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 font-black text-emerald-600 dark:text-emerald-400 hover:underline">
              Xem chi tiết dự án
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
