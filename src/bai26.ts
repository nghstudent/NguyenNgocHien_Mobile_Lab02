export async function bai26() {
  console.log("Bắt đầu chờ 5 giây...");
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("Kết quả bài 26: Đã chờ 5 giây");
}
