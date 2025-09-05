function simulateTask(ms: number, succeed = true): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeed) {
        resolve(`Hoàn thành tác vụ sau ${ms} ms`);
      } else {
        reject(new Error(`Tác vụ thất bại sau ${ms} ms`));
      }
    }, ms);
  });
}

export async function bai13() {
  try {
    const result = await simulateTask(1000, false);
    console.log("Kết quả bài 13:", result);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Lỗi bài 13:", error.message);
    } else {
      console.error("Lỗi bài 13:", error);
    }
  }
}
