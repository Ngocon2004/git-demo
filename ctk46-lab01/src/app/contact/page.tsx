export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="space-y-4 text-gray-700">
        <div className="bg-gray-50 rounded-lg p-6 space-y-3">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:haidgh@sv.dlu.edu.vn" className="text-blue-600 hover:underline">
              haidgh@sv.dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/haidgh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/haidgh
            </a>
          </p>
          <p>
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
          </p>
        </div>
      </div>
    </div>
  );
}
