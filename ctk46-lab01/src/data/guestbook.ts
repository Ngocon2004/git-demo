export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Nguyễn Văn B",
    message: "Website đẹp quá! Chúc bạn thành công nhé!",
    createdAt: new Date("2025-03-01").toISOString(),
  },
  {
    id: "2",
    name: "Trần Thị C",
    message: "Rất ấn tượng với portfolio của bạn. Keep going!",
    createdAt: new Date("2025-03-05").toISOString(),
  },
  {
    id: "3",
    name: "Lê Văn D",
    message: "Mình cũng đang học Next.JS, mong được giao lưu!",
    createdAt: new Date("2025-03-10").toISOString(),
  },
];
