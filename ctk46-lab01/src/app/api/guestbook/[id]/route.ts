import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// DELETE /api/guestbook/[id] - Xóa lời nhắn theo id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 }
    );
  }

  const deleted = guestbookEntries.splice(index, 1)[0];
  return NextResponse.json(deleted);
}

// Bài tập tự làm 2.1: Thêm API route PUT để chỉnh sửa nội dung
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  const { name, message } = body;

  const entry = guestbookEntries.find((e) => e.id === id);

  if (!entry) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 }
    );
  }

  // Cập nhật thông tin
  if (name) entry.name = name;
  if (message) entry.message = message;

  return NextResponse.json(entry);
}
