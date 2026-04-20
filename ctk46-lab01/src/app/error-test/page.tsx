"use client";

import { useEffect, useState } from "react";

export default function ErrorTestPage() {
  const [shouldError, setShouldError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShouldError(true);
  }, []);

  if (shouldError) {
    const data = undefined as unknown as { getName: () => string };
    return <h1>{data.getName()}</h1>;
  }

  return (
    <div className="p-12">
      <h1>Trang này đang chuẩn bị kích hoạt lỗi thử nghiệm...</h1>
    </div>
  );
}
