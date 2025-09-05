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
exports.fetchUserWithTimeout = fetchUserWithTimeout;
exports.bai20 = bai20;
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => setTimeout(resolve, 3000)); // giả lập chậm 3s
        return { id, name: `Người dùng ${id}` };
    });
}
function fetchUserWithTimeout(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Quá thời gian chờ (2 giây)")), 2000));
        return Promise.race([fetchUser(id), timeout]);
    });
}
function bai20() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield fetchUserWithTimeout(1);
            console.log("Kết quả bài 20:", user);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi bài 20:", error.message);
            }
            else {
                console.error("Lỗi bài 20:", error);
            }
        }
    });
}
