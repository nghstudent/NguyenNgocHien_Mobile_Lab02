function simulateTask(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hoàn thành tác vụ sau ${ms} ms`);
    }, ms);
  });
}

export async function bai12() {
  const result = await simulateTask(2000);
  console.log("Kết quả bài 12:", result);
}
