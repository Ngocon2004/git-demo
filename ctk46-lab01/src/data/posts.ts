export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string; // Thêm trường author
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt: "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel...`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Dơng Gur Ha Hải",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt: "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework...`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Dơng Gur Ha Hải",
  },
  {
    slug: "typescript-can-ban",
    title: "TypeScript căn bản cho người mới bắt đầu",
    excerpt: "Tại sao bạn nên dùng TypeScript thay vì JavaScript thuần?",
    content: `TypeScript giúp phát hiện lỗi sớm trong quá trình phát triển nhờ cơ chế static typing...`,
    date: "2025-02-10",
    category: "Công nghệ",
    author: "Dơng Gur Ha Hải",
  },
  {
    slug: "bi-quyet-hoc-tap-tot",
    title: "5 bí quyết để học tập hiệu quả tại đại học",
    excerpt: "Làm thế nào để cân bằng giữa việc học và các hoạt động ngoại khóa?",
    content: `1. Quản lý thời gian. 2. Tập trung nghe giảng. 3. Tự học thường xuyên...`,
    date: "2025-03-05",
    category: "Học tập",
    author: "Dơng Gur Ha Hải",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
