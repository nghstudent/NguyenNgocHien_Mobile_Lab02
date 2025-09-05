export async function bai21() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("Kết quả bài 21:", data);
}
