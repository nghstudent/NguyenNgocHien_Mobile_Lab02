export async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: `Người dùng ${id}` };
}

export async function bai18() {
  const user = await fetchUser(1);
  console.log("Kết quả bài 18:", user);
}
