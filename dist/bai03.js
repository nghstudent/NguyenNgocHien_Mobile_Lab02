"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai03 = bai03;
function bai03() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Đã có lỗi xảy ra")), 1000);
    }).catch((error) => {
        console.error("Lỗi:", error.message);
    });
}
