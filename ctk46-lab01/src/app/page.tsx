import Link from "next/link";
import Counter from "@/components/counter";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      {/* Hero section */}
      <div className="text-center mb-24">
        <div className="w-28 h-28 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl shadow-emerald-500/10 ring-4 ring-white dark:ring-zinc-900 overflow-hidden">
          <span className="text-5xl font-bold text-emerald-600 dark:text-emerald-400">H</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Xin chào! Tôi là <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
            Dơng Gur Ha Hải
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt. Đam mê xây dựng các sản phẩm số hiện đại, tối ưu và mang lại giá trị cho người dùng.
        </p>
        
        {/* Counter Component Integration */}
        <div className="max-w-xs mx-auto mb-12">
          <Counter />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="px-8 py-4 bg-emerald-600 dark:bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-600/20"
          >
            Xem dự án của tôi
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 font-bold rounded-xl border border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all"
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-24">
        <h2 className="text-3xl font-black text-center mb-12 tracking-tight">Kỹ năng chuyên môn</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript", "TypeScript", "React", "Next.js",
            "Tailwind CSS", "Node.js", "Git & GitHub", "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl text-center font-bold text-gray-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-900/30 hover:bg-white dark:hover:bg-zinc-900 transition-all hover:shadow-xl hover:shadow-emerald-500/5 group"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-500 dark:to-teal-600 rounded-[2.5rem] p-12 text-center text-white shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black mb-4">Bạn có ý tưởng tuyệt vời?</h2>
          <p className="text-emerald-50 mb-8 max-w-lg mx-auto text-lg opacity-90">
            Hãy ghé thăm Blog của tôi để đọc những chia sẻ về lập trình hoặc liên hệ để cùng nhau xây dựng những sản phẩm thú vị.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 bg-white text-emerald-700 font-black rounded-lg hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Đọc Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
