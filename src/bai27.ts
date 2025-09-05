export async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Lỗi mạng");
      return await response.json();
    } catch (error) {
      console.error(`Thử lần ${i + 1} thất bại`);
      if (i === retries - 1) throw error;
    }
  }
}

export async function bai27() {
  try {
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/4", 3);
    console.log("Kết quả bài 27:", data);
  } catch (error) {
    console.error("Lỗi bài 27:", error);
  }
}
