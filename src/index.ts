import { bai01 } from "./bai01";
import { bai02 } from "./bai02";
import { bai03 } from "./bai03";
import { bai04 } from "./bai04";
import { bai05 } from "./bai05";
import { bai06 } from "./bai06";
import { bai07 } from "./bai07";
import { bai08 } from "./bai08";
import { bai09 } from "./bai09";
import { bai10 } from "./bai10";
import { bai11 } from "./bai11";
import { bai12 } from "./bai12";
import { bai13 } from "./bai13";

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
    // console.log("\nBài 04:");
    // bai04();

    // Chạy bài 5
    // console.log("\nBài 05:");
    // bai05();

    // Chạy bài 6
    console.log("\nBài 06:");
    await bai06();

    // Chạy bài 07
    console.log("\nBài 07:");
    await bai07();

    // Chạy bài 08
    console.log("\nBài 08:");
    await bai08();

    // Chạy bài 09
    console.log("\nBài 09:");
    await bai09();

    // Chạy bài 10
    console.log("\nBài 10:");
    await bai10();

    // Chạy bài 11
    console.log("\nBài 11:");
    await bai11();

    // Chạy bài 12
    console.log("\nBài 12:");
    await bai12();

    // Chạy bài 13
    console.log("\nBài 13:");
    await bai13();

}
main();