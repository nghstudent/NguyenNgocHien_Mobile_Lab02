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
exports.bai06 = bai06;
const bai05_1 = require("./bai05");
function bai06() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [(0, bai05_1.simulateTask)(2000), (0, bai05_1.simulateTask)(3000), (0, bai05_1.simulateTask)(1000)];
        return Promise.all(tasks).then((messages) => {
            messages.forEach((message, index) => {
                console.log(`Kết quả Task ${index + 1}: ${message}`);
            });
        });
    });
}
