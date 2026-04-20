"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessage, ContactState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import CopyButton from "@/components/copy-button";

const initialState: ContactState = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const email = "2212363@dlu.edu.vn";

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Liên hệ với tôi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tôi luôn sẵn lòng lắng nghe và hợp tác. Nếu bạn có bất kỳ câu hỏi nào hoặc muốn thảo luận về dự án, đừng ngần ngại liên hệ nhé!
          </p>
          
          <Card>
            <CardHeader>
              <CardDescription className="text-xs uppercase tracking-widest">Email cá nhân</CardDescription>
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-lg font-bold text-emerald-600 dark:text-emerald-400 truncate">
                  {email}
                </CardTitle>
                <CopyButton text={email} />
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription className="text-xs uppercase tracking-widest">Địa chỉ</CardDescription>
              <CardTitle className="text-lg font-bold">
                Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Gửi tin nhắn</CardTitle>
            <CardDescription>Tôi sẽ phản hồi bạn sớm nhất có thể.</CardDescription>
          </CardHeader>
          <CardContent>
            {state.success ? (
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-6 rounded-xl text-center">
                <h3 className="text-emerald-700 dark:text-emerald-400 font-bold mb-2">Gửi thành công!</h3>
                <p className="text-emerald-600 dark:text-emerald-500 text-sm">{state.message}</p>
                <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                  Gửi tin nhắn khác
                </Button>
              </div>
            ) : (
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input id="name" name="name" placeholder="Nguyễn Văn A" required />
                  {state.errors?.name && <p className="text-xs text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                  {state.errors?.email && <p className="text-xs text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Tiêu đề</Label>
                  <Input id="subject" name="subject" placeholder="Chủ đề bạn muốn trao đổi" required />
                  {state.errors?.subject && <p className="text-xs text-destructive">{state.errors.subject[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nội dung</Label>
                  <Textarea id="message" name="message" placeholder="Viết nội dung tin nhắn..." required rows={4} />
                  {state.errors?.message && <p className="text-xs text-destructive">{state.errors.message[0]}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
