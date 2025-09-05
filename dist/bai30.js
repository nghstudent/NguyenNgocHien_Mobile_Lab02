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
exports.bai30 = bai30;
function bai30() {
    return __awaiter(this, void 0, void 0, function* () {
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/todos/10000", // lỗi
            "https://jsonplaceholder.typicode.com/todos/3"
        ];
        const promises = urls.map(url => fetch(url));
        const results = yield Promise.allSettled(promises);
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Kết quả bài 30 [${index + 1}]: Thành công`);
            }
            else {
                console.log(`Kết quả bài 30 [${index + 1}]: Thất bại -`, result.reason);
            }
        });
    });
}
