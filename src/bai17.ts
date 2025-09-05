async function multiplyAfterDelay(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

export async function bai17() {
  const promises = [1, 2, 3].map((n) => multiplyAfterDelay(n));

  for await (const result of promises) {
    console.log("Kết quả bài 17:", result);
  }
}
