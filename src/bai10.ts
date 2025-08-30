import { simulateTask } from "./bai05";

export function bai10(): Promise<void> {
    return simulateTask(1500)
        .then((msg) => {
            console.log(msg);
        })
        .catch((err) => {
            console.error("Lỗi trong bài 10:", err);
        })
        .finally(() => {
            console.log("Bài 10 đã hoàn thành.");
        });
}
