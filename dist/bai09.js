"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai09 = bai09;
function bai09() {
    const numbers = [1, 2, 3, 4, 5, 6];
    return new Promise((resolve) => {
        setTimeout(() => resolve(numbers), 1000);
    }).then((arr) => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        console.log("Các số chẵn trong mảng:", evenNumbers);
    });
}
