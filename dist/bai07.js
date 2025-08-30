"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai07 = bai07;
const bai05_1 = require("./bai05");
function bai07() {
    const task1 = (0, bai05_1.simulateTask)(2000).then(() => "Task 1");
    const task2 = (0, bai05_1.simulateTask)(3000).then(() => "Task 2");
    const task3 = (0, bai05_1.simulateTask)(1000).then(() => "Task 3");
    const tasks = [task1, task2, task3];
    return Promise.race(tasks).then((result) => {
        console.log("Task hoàn thành nhanh nhất:", result);
    });
}
