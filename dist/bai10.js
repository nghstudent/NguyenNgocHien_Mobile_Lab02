"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai10 = bai10;
const bai05_1 = require("./bai05");
function bai10() {
    return (0, bai05_1.simulateTask)(1500)
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
