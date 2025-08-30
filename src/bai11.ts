export function bai11(numbers: number[]): Promise<void> {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (numbers.some((n) => n < 0)) {
        reject(new Error("Có số âm trong mảng"));
      } else {
        const evenSquares = numbers.filter((n) => n % 2 === 0).map((n) => n ** 2);
        resolve(evenSquares);
      }
    }, 1000);
  })
    .then((result) => {
      console.log("Bình phương các số chẵn =", result);
    })
    .catch((err) => {
      console.error("lỗi:", err.message);
    })
    .finally(() => {
      console.log("Xong");
    });
}