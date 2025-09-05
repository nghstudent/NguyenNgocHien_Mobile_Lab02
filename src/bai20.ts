async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // giả lập chậm 3s
  return { id, name: `Người dùng ${id}` };
}

export async function fetchUserWithTimeout(id: number): Promise<{ id: number; name: string }> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Quá thời gian chờ (2 giây)")), 2000)
  );

  return Promise.race([fetchUser(id), timeout]);
}

export async function bai20() {
  try {
    const user = await fetchUserWithTimeout(1);
    console.log("Kết quả bài 20:", user);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Lỗi bài 20:", error.message);
    } else {
      console.error("Lỗi bài 20:", error);
    }
  }
}
