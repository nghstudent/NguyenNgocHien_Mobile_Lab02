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
exports.batchProcess = batchProcess;
exports.bai28 = bai28;
function task(n) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        return `Tác vụ ${n} xong`;
    });
}
function batchProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [1, 2, 3, 4, 5].map(n => task(n));
        const results = yield Promise.all(tasks);
        return results;
    });
}
function bai28() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield batchProcess();
        console.log("Kết quả bài 28:", results);
    });
}
