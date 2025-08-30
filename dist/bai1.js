"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai1 = bai1;
function bai1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello Async");
            resolve();
        }, 2000);
    });
}
