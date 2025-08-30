export function bai03(): Promise<void> {
    return new Promise((_, reject) => {
        setTimeout(() =>
            reject(new Error("Đã có lỗi xảy ra")), 1000);
    }).catch((error) => {
        console.error("Lỗi:", error.message);
    }) as Promise<void>;
}