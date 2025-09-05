async function task(n: number): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `Tác vụ ${n} xong`;
}

export async function batchProcess() {
  const tasks = [1, 2, 3, 4, 5].map(n => task(n));
  const results = await Promise.all(tasks);
  return results;
}

export async function bai28() {
  const results = await batchProcess();
  console.log("Kết quả bài 28:", results);
}
