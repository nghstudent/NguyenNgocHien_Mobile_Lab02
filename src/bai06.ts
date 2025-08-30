import { simulateTask } from "./bai05";
export async function bai06(): Promise<void> {
    const tasks = [simulateTask(2000), simulateTask(3000), simulateTask(1000)];
    return Promise.all(tasks).then((messages) => {
        messages.forEach((message, index) => {
            console.log(`Kết quả Task ${index + 1}: ${message}`);
        });
    });

}