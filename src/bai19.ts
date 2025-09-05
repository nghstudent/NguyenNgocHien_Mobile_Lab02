async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: `Người dùng ${id}` };
}

export async function fetchUsers(ids: number[]): Promise<{ id: number; name: string }[]> {
  const users = [];
  for (const id of ids) {
    const user = await fetchUser(id);
    users.push(user);
  }
  return users;
}

export async function bai19() {
  const users = await fetchUsers([1, 2, 3]);
  console.log("Kết quả bài 19:", users);
}
