"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai08 = bai08;
function bai08() {
    return Promise.resolve(2)
        .then((num) => {
        const squared = Math.pow(num, 2);
        console.log("Bình phương số 2=", squared);
        return squared;
    }).then((num) => {
        const doubled = num * 2;
        console.log("Nhân đôi kết quả trên=", doubled);
        return doubled;
    }).then((num) => {
        const result = num + 5;
        console.log("Cộng thêm 5=", result);
    });
}
