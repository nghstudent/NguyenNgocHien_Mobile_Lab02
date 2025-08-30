import { bai01 } from "./bai01";
import { bai02 } from "./bai02";
async function main() {
    // Chạy bài 1
    console.log("Bài 01:");
    console.log("Chờ 2 giây...");
    await bai01();
    console.log("Kết thúc Bài 01.");

    // Chạy bài 2
    console.log("\nBài 02:");
    console.log("Chờ 1 giây...");
    await bai02();
    console.log("Kết thúc Bài 02.");
}
main();