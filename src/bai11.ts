function simulateTask(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task hoàn thành trong ${ms} ms`);
    }, ms);
  });
}

export async function bai11() {
  try {
    const result = await simulateTask(1000);
    console.log("Kết quả bài 11:", result);
  } catch (error) {
    console.error("Lỗi bài 11:", error);
  }
}
