async function multiplyAfterDelay(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

export async function bai15() {
  const a = await multiplyAfterDelay(2);
  console.log(`Kết quả bước 1: 2 × 3 = ${a}`);

  const b = await multiplyAfterDelay(3);
  console.log(`Kết quả bước 2: 3 × 3 = ${b}`);

  const c = await multiplyAfterDelay(4);
  console.log(`Kết quả bước 3: 4 × 3 = ${c}`);

  console.log("Kết quả bài 15 (sequential):", a, b, c);
}
