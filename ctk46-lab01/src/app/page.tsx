export default function Home() {
 return (
 <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-zinc-950">
 <div className="text-center max-w-3xl w-full">
 <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
 Xin chào! 👋
 </h1>
 
 <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl mb-8 border border-gray-100 dark:border-zinc-800">
 <p className="text-2xl text-gray-700 dark:text-zinc-300 mb-2">
 Họ và tên: <span className="font-bold text-black dark:text-white">Dơng Gur Ha Hải</span>
 </p>
 <p className="text-2xl text-gray-700 dark:text-zinc-300 mb-2">
 MSSV: <span className="font-bold text-black dark:text-white">2212363</span>
 </p>
 <p className="text-xl text-gray-500 dark:text-zinc-400 mb-6">
 Môn: Các công nghệ mới trong PTPM
 </p>
 
 <div className="max-w-xl mx-auto mb-0 text-lg text-gray-600 dark:text-zinc-400 italic leading-relaxed">
 "Tôi là một sinh viên đam mê lập trình, luôn tìm tòi và học hỏi các công nghệ mới để xây dựng những ứng dụng web hiện đại và hữu ích."
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
 <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
 <h2 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
 🎨 Sở thích
 </h2>
 <ul className="space-y-2 text-gray-700 dark:text-zinc-300">
 <li className="flex items-center gap-2">✨ Lập trình Web & AI</li>
 <li className="flex items-center gap-2">📚 Đọc sách công nghệ</li>
 <li className="flex items-center gap-2">🏸 Chơi cầu lông</li>
 <li className="flex items-center gap-2">🎧 Nghe nhạc Lofi</li>
 </ul>
 </div>

 <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
 <h2 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
 🎯 Mục tiêu học tập
 </h2>
 <ul className="space-y-2 text-gray-700 dark:text-zinc-300">
 <li className="flex items-center gap-2">🚀 Làm chủ Next.js 15</li>
 <li className="flex items-center gap-2">🤖 Ứng dụng AI vào PTPM</li>
 <li className="flex items-center gap-2">💼 Xây dựng Portfolio cá nhân</li>
 <li className="flex items-center gap-2">🏆 Hoàn thành tốt môn học</li>
 </ul>
 </div>
 </div>

 <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-[2px]">
 <div className="bg-white dark:bg-zinc-950 rounded-[10px] p-4">
 <p className="text-lg font-medium bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-transparent">
 🚀 Đây là project Next.JS đầu tiên của tôi!
 </p>
 </div>
 </div>
 </div>
 </main>
 );
}
