export function bai04():void {
    const promiseRandom: Promise<number> = new Promise((resolve, reject) => {
        const num = Math.random();
        if (num < 0.5) {
            resolve(num);
        } else {
            reject(new Error("Số quá lớn"));
        }
    });
    promiseRandom.then((num) => {
        console.log("Số ngẫu nhiên:", num);
    }).catch((error) => {
        console.error("Lỗi:", error.message);
    });
}
