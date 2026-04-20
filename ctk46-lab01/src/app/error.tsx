"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Có thể log lỗi ra một dịch vụ tracking lỗi ở đây
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-red-50 p-8 rounded-2xl border border-red-100 max-w-lg">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Hệ thống gặp sự cố!</h2>
        <p className="text-gray-600 mb-8">
          Đã có lỗi xảy ra ngoài ý muốn. Chúng tôi đang nỗ lực khắc phục.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Thử tải lại trang
          </button>
          <Link
            href="/"
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
