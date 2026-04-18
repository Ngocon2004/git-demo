"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-lg text-xl font-bold transition-colors"
      >
        -
      </button>
      <span className="text-2xl font-bold w-12 text-center">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-lg text-xl font-bold transition-colors"
      >
        +
      </button>
    </div>
  );
}
