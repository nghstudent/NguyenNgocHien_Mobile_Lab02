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
exports.bai15 = bai15;
function multiplyAfterDelay(num) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        return num * 3;
    });
}
function bai15() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield multiplyAfterDelay(2);
        console.log(`Kết quả bước 1: 2 × 3 = ${a}`);
        const b = yield multiplyAfterDelay(3);
        console.log(`Kết quả bước 2: 3 × 3 = ${b}`);
        const c = yield multiplyAfterDelay(4);
        console.log(`Kết quả bước 3: 4 × 3 = ${c}`);
        console.log("Kết quả bài 15 (sequential):", a, b, c);
    });
}
