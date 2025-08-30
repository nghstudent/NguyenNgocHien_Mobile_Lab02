export function bai02 (): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(10);
            resolve();
        }, 1000);
    });
}