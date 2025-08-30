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
exports.simulateTask = simulateTask;
exports.bai05 = bai05;
function simulateTask(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task xong");
        }, timeout);
    });
}
function bai05() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = yield simulateTask(4000);
        console.log(message);
    });
}
