"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai02 = bai02;
function bai02() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(10);
            resolve();
        }, 1000);
    });
}
