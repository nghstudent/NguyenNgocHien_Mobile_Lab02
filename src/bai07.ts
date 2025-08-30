import { simulateTask } from "./bai05";
export function bai07(): Promise<void> {
    const task1 = simulateTask(2000).then(() => "Task 1");
    const task2 = simulateTask(3000).then(() => "Task 2");
    const task3 = simulateTask(1000).then(() => "Task 3");
    const tasks = [task1, task2, task3];
    return Promise.race(tasks).then((result) => {
        console.log("Task hoàn thành nhanh nhất:", result);
    });
}