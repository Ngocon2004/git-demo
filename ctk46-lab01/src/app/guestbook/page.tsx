import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function GuestbookPage() {
  const entries = guestbookEntries;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Sổ lưu bút</h1>
      <p className="text-muted-foreground mb-8">
        Hãy để lại lời nhắn cho tôi nhé! Giao diện đã được nâng cấp với shadcn/ui.
      </p>

      <GuestbookForm />

      <Separator className="my-8" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Danh sách lời nhắn</h2>
          <span className="text-sm text-muted-foreground">{entries.length} lời nhắn</span>
        </div>

        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              Chưa có lời nhắn nào. Hãy là người đầu tiên!
            </p>
          ) : (
            entries.map((entry) => (
              <Card key={entry.id} className="group">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">
                          {entry.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-zinc-100 leading-none mb-1">
                          {entry.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(entry.createdAt).toLocaleDateString("vi-VN", {
                            hour: "2-digit",
                            minute: "2-digit",
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <DeleteButton id={entry.id} />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-zinc-400 leading-relaxed pl-[52px]">
                    {entry.message}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
