async function task(n: number): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `Tác vụ ${n} xong`;
}

export async function queueProcess() {
  const results = [];
  for (let i = 1; i <= 5; i++) {
    const result = await task(i);
    results.push(result);
  }
  return results;
}

export async function bai29() {
  const results = await queueProcess();
  console.log("Kết quả bài 29:", results);
}
