export async function postData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Xin chào", body: "Nội dung test", userId: 1 })
  });

  const data = await response.json();
  console.log("Kết quả bài 24:", data);
}

export async function bai24() {
  await postData();
}
