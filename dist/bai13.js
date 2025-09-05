"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai13 = bai13;
function simulateTask(ms, succeed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (succeed) {
                resolve(`Hoàn thành tác vụ sau ${ms} ms`);
            }
            else {
                reject(new Error(`Tác vụ thất bại sau ${ms} ms`));
            }
        }, ms);
    });
}
function bai13() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield simulateTask(1000, false);
            console.log("Kết quả bài 13:", result);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi bài 13:", error.message);
            }
            else {
                console.error("Lỗi bài 13:", error);
            }
        }
    });
}
