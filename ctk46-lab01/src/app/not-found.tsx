import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-black text-gray-100 leading-none">404</h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-gray-800">Ối! Lạc đường rồi</p>
        </div>
      </div>
      
      <p className="text-gray-500 max-w-md mb-10">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển sang một địa chỉ khác.
      </p>
      
      <Link
        href="/"
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
      >
        Về trang chủ ngay
      </Link>
    </div>
  );
}
