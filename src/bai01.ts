export function bai1(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello Async");
            resolve();
        }, 2000);
    });
}
