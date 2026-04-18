import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Dơng Gur Ha Hải
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Trang chủ</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">Giới thiệu</Link>
            <Link href="/skills" className="text-gray-600 hover:text-blue-600 transition-colors">Kỹ năng</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Dự án</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Liên hệ</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
