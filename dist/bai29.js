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
exports.queueProcess = queueProcess;
exports.bai29 = bai29;
function task(n) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        return `Tác vụ ${n} xong`;
    });
}
function queueProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (let i = 1; i <= 5; i++) {
            const result = yield task(i);
            results.push(result);
        }
        return results;
    });
}
function bai29() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield queueProcess();
        console.log("Kết quả bài 29:", results);
    });
}
