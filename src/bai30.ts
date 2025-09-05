export async function bai30() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/10000", // lỗi
    "https://jsonplaceholder.typicode.com/todos/3"
  ];

  const promises = urls.map(url => fetch(url));
  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Kết quả bài 30 [${index + 1}]: Thành công`);
    } else {
      console.log(`Kết quả bài 30 [${index + 1}]: Thất bại -`, result.reason);
    }
  });
}
