"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai01 = bai01;
function bai01() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello Async");
            resolve();
        }, 2000);
    });
}
