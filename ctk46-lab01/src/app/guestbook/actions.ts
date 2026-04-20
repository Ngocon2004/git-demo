"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { guestbookEntries } from "@/data/guestbook";

// Định nghĩa schema validation
const guestbookSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  message: z
    .string()
    .min(1, "Lời nhắn không được để trống")
    .max(500, "Lời nhắn không được quá 500 ký tự"),
});

export interface ActionState {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    message?: string[];
  };
}

// Biến tạm để lưu vết spam (Bài tập tự làm 4.2)
// Lưu ý: Trong thực tế nên dùng Redis hoặc Database
const lastSubmission = new Map<string, number>();

export async function createGuestbookEntry(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  // 1. Validation với Zod
  const result = guestbookSchema.safeParse({ name, message });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // 2. Kiểm tra trùng lặp trong 1 phút (Bài tập tự làm 4.2)
  const spamKey = `${name}-${message}`;
  const now = Date.now();
  const lastTime = lastSubmission.get(spamKey);

  if (lastTime && now - lastTime < 60000) {
    return {
      success: false,
      message: "Bạn vừa gửi lời nhắn này rồi. Vui lòng đợi 1 phút.",
    };
  }

  // 3. Thêm vào data store
  const newEntry = {
    id: Date.now().toString(),
    name: result.data.name,
    message: result.data.message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);
  lastSubmission.set(spamKey, now);

  // 4. Làm mới trang để cập nhật dữ liệu
  revalidatePath("/guestbook");
  
  return { success: true, message: "Gửi lời nhắn thành công!" };
}

export async function deleteGuestbookEntry(id: string): Promise<ActionState> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return { success: false, message: "Không tìm thấy lời nhắn" };
  }

  guestbookEntries.splice(index, 1);
  revalidatePath("/guestbook");

  return { success: true, message: "Xóa thành công" };
}
