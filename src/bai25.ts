export async function downloadFile() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log("Kết quả bài 25: Tải xuống file hoàn tất sau 3 giây");
}

export async function bai25() {
  await downloadFile();
}
