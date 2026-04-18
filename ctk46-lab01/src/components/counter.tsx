"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
      <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Bộ đếm tương tác</p>
      <div className="flex items-center gap-6">
        <button
          onClick={() => setCount(count - 1)}
          className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl font-black text-2xl transition-all active:scale-90"
        >
          -
        </button>
        <span className="text-5xl font-black tabular-nums min-w-[3rem] text-center tracking-tighter">
          {count}
        </span>
        <button
          onClick={() => setCount(count + 1)}
          className="w-12 h-12 flex items-center justify-center bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-xl font-black text-2xl transition-all active:scale-90 shadow-lg shadow-emerald-600/20"
        >
          +
        </button>
      </div>
      <button 
        onClick={() => setCount(0)}
        className="text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors uppercase tracking-widest"
      >
        Đặt lại
      </button>
    </div>
  );
}
