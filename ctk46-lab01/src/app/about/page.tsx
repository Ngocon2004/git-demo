export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black mb-12 tracking-tight">Giới thiệu bản thân</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-lg text-gray-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Xin chào! Tôi là <strong className="text-emerald-600 dark:text-emerald-400">Dơng Gur Ha Hải</strong>, hiện đang là sinh viên năm cuối chuyên ngành Công nghệ Thông tin tại trường Đại học Đà Lạt.
          </p>
          <p>
            Với niềm đam mê mãnh liệt dành cho lập trình web, tôi luôn cố gắng học hỏi và cập nhật những công nghệ mới nhất như <span className="font-bold underline decoration-emerald-400">Next.js 15</span>, <span className="font-bold underline decoration-emerald-400">React 19</span> và <span className="font-bold underline decoration-emerald-400">Tailwind CSS 4</span>.
          </p>
          <p>
            Mục tiêu của tôi là trở thành một Full-stack Developer chuyên nghiệp, có khả năng xây dựng những hệ thống phức tạp, hiệu năng cao và có trải nghiệm người dùng tuyệt vời.
          </p>
          
          <h2 className="text-2xl font-black mt-12 mb-6 tracking-tight">Học vấn</h2>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
            <p className="font-black text-emerald-700 dark:text-emerald-400">Đại học Đà Lạt</p>
            <p className="text-gray-600 dark:text-zinc-400">Cử nhân Công nghệ Thông tin</p>
            <p className="text-sm text-emerald-600/60 dark:text-emerald-500/60 font-bold mt-1">2022 — 2026</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-black mb-6">Liên hệ nhanh</h2>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">📍</span>
                Đà Lạt, Lâm Đồng
              </li>
              <li className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 underline">
                <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">📧</span>
                2212363@dlu.edu.vn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
