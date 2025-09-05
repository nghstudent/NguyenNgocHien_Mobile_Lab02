export async function bai22() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
  ];

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Kết quả bài 22:", data);
  }
}
