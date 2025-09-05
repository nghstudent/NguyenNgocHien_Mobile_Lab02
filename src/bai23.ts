export async function bai23() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: { id: number; title: string; completed: boolean }[] = await response.json();
  const completedTodos = todos.filter(todo => todo.completed);
  console.log("Kết quả bài 23:", completedTodos);
}
