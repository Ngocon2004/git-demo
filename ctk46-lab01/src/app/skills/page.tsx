export default function SkillsPage() {
  const skills = [
    { category: "Ngôn ngữ", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"] },
    { category: "Frameworks/Libs", items: ["React", "Next.js", "Express", "Tailwind CSS", "Bootstrap"] },
    { category: "Công cụ & DB", items: ["Git & GitHub", "Docker", "PostgreSQL", "MongoDB", "VS Code"] },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Kỹ năng chuyên môn</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-blue-600 mb-4">{group.category}</h2>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
