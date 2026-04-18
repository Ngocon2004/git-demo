import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h2>
      <p className="text-gray-600 mb-6">
        Bài viết bạn đang tìm kiếm không có trong hệ thống.
      </p>
      <Link
        href="/blog"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
      >
        Quay lại Blog
      </Link>
    </div>
  );
}
