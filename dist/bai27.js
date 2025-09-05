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
exports.fetchWithRetry = fetchWithRetry;
exports.bai27 = bai27;
function fetchWithRetry(url, retries) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < retries; i++) {
            try {
                const response = yield fetch(url);
                if (!response.ok)
                    throw new Error("Lỗi mạng");
                return yield response.json();
            }
            catch (error) {
                console.error(`Thử lần ${i + 1} thất bại`);
                if (i === retries - 1)
                    throw error;
            }
        }
    });
}
function bai27() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchWithRetry("https://jsonplaceholder.typicode.com/todos/4", 3);
            console.log("Kết quả bài 27:", data);
        }
        catch (error) {
            console.error("Lỗi bài 27:", error);
        }
    });
}
