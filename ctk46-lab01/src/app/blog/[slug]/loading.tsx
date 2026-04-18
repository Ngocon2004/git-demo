export default function PostLoading() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Nút quay lại */}
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-8" />
      
      <article>
        {/* Category & Date */}
        <div className="flex gap-3 mb-6">
          <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
        
        {/* Tiêu đề */}
        <div className="h-10 w-full bg-gray-200 rounded animate-pulse mb-8" />
        
        {/* Nội dung bài viết (nhiều dòng) */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>
      </article>
    </div>
  );
}
