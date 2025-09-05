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
const bai03_1 = require("./bai03");
const bai06_1 = require("./bai06");
const bai07_1 = require("./bai07");
const bai08_1 = require("./bai08");
const bai09_1 = require("./bai09");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Chạy bài 1
        console.log("Bài 01:");
        console.log("Chờ 2 giây...");
        yield (0, bai01_1.bai01)();
        // Chạy bài 2
        console.log("\nBài 02:");
        console.log("Chờ 1 giây...");
        yield (0, bai02_1.bai02)();
        // Chạy bài 3
        console.log("\nBài 03:");
        console.log("Chờ 1 giây...");
        yield (0, bai03_1.bai03)();
        // Chạy bài 4
        // console.log("\nBài 04:");
        // bai04();
        // Chạy bài 5
        // console.log("\nBài 05:");
        // bai05();
        // Chạy bài 6
        console.log("\nBài 06:");
        yield (0, bai06_1.bai06)();
        // Chạy bài 07
        console.log("\nBài 07:");
        yield (0, bai07_1.bai07)();
        // Chạy bài 08
        console.log("\nBài 08:");
        yield (0, bai08_1.bai08)();
        // Chạy bài 09
        console.log("\nBài 09:");
        yield (0, bai09_1.bai09)();
        // Chạy bài 10
        console.log("\nBài 10:");
        yield (0, bai10_1.bai10)();
        // Chạy bài 11
        console.log("\nBài 11:");
        yield (0, bai11_1.bai11)();
        // Chạy bài 12
        console.log("\nBài 12:");
        yield (0, bai12_1.bai12)();
        // Chạy bài 13
        console.log("\nBài 13:");
        yield (0, bai13_1.bai13)();
        // Chạy bài 14
        console.log("\nBài 14:");
        yield (0, bai14_1.bai14)();
        // Chạy bài 15
        console.log("\nBài 15:");
        yield (0, bai15_1.bai15)();
        // Chạy bài 16
        console.log("\nBài 16:");
        yield (0, bai16_1.bai16)();
        // Chạy bài 17
        console.log("\nBài 17:");
        yield (0, bai17_1.bai17)();
    });
}
main();
