export async function bai14(num: number = 5) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = num * 3;
  console.log(`Kết quả bài 14: ${num} × 3 = ${result}`);
  return result;
}
