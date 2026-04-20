import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

// GET /api/guestbook - Lấy danh sách lời nhắn
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  let data = [...guestbookEntries];

  // Bài tập tự làm 2.3: Thêm query parameter ?limit=5
  if (limit) {
    const limitNum = parseInt(limit);
    if (!isNaN(limitNum)) {
      data = data.slice(0, limitNum);
    }
  }

  return NextResponse.json(data);
}

// POST /api/guestbook - Thêm lời nhắn mới
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // Bài tập tự làm 2.2: Thêm validation chi tiết
    if (!name || name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { error: "Tên phải từ 2 đến 50 ký tự" },
        { status: 400 }
      );
    }

    if (!message || message.length < 1 || message.length > 500) {
      return NextResponse.json(
        { error: "Lời nhắn phải từ 1 đến 500 ký tự" },
        { status: 400 }
      );
    }

    const newEntry = {
      id: Date.now().toString(),
      name,
      message,
      createdAt: new Date().toISOString(),
    };

    guestbookEntries.unshift(newEntry);
    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Dữ liệu không hợp lệ" },
      { status: 400 }
    );
  }
}
