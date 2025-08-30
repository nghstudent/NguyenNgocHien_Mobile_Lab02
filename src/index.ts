import { bai01 } from "./bai01";
import { bai02 } from "./bai02";
import { bai03 } from "./bai03";
import { bai04 } from "./bai04";
async function main() {
    // Chạy bài 1
    console.log("Bài 01:");
    console.log("Chờ 2 giây...");
    await bai01();

    // Chạy bài 2
    console.log("\nBài 02:");
    console.log("Chờ 1 giây...");
    await bai02();

    // Chạy bài 3
    console.log("\nBài 03:");
    console.log("Chờ 1 giây...");
    await bai03();

    // Chạy bài 4
    console.log("\nBài 04:");
    bai04();
}
main();