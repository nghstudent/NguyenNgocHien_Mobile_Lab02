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
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Chạy bài 1
        console.log("Bài 01:");
        console.log("Chờ 2 giây...");
        yield (0, bai01_1.bai01)();
        console.log("Kết thúc Bài 01.");
        // Chạy bài 2
        console.log("\nBài 02:");
        console.log("Chờ 1 giây...");
        yield (0, bai02_1.bai02)();
        console.log("Kết thúc Bài 02.");
    });
}
main();
