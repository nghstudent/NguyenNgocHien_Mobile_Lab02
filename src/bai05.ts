export function simulateTask (timeout: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task xong");
        }, timeout);
    });
}
export async function bai05(): Promise<void> {
    const message = await simulateTask(4000);
    console.log(message);
}