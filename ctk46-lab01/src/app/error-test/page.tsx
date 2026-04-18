export default function ErrorTestPage() {
  // Cố ý gây lỗi: Gọi hàm trên undefined
  const data: any = undefined;
  return (
    <div className="p-12">
      <h1>Trang này sẽ không bao giờ hiển thị: {data.getName()}</h1>
    </div>
  );
}
