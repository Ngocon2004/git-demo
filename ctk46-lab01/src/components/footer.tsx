export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 — Dơng Gur Ha Hải | CTK46 — ĐH Đà Lạt
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="https://github.com/haidgh" target="_blank" className="hover:text-blue-600">GitHub</a>
            <a href="mailto:haidgh@sv.dlu.edu.vn" className="hover:text-blue-600">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
