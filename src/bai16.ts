async function multiplyAfterDelay(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

export async function bai16() {
  const results = await Promise.all([
    multiplyAfterDelay(5),
    multiplyAfterDelay(6),
    multiplyAfterDelay(7)
  ]);

  console.log("Kết quả bài 16 (parallel):", results);
}
