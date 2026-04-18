export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex gap-8">
        {/* Nội dung chính */}
        <div className="flex-1">{children}</div>
        
        {/* Sidebar */}
        <aside className="w-64 shrink-0">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Danh mục</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Công nghệ</li>
              <li className="hover:text-blue-600 cursor-pointer">Học tập</li>
              <li className="hover:text-blue-600 cursor-pointer">Dự án cá nhân</li>
              <li className="hover:text-blue-600 cursor-pointer">Cuộc sống</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
