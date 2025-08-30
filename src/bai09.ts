export function bai09(): Promise<void> {
    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    return new Promise<number[]>((resolve) => {
        setTimeout(() => resolve(numbers), 1000);
    }).then((arr) => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        console.log("Các số chẵn trong mảng:", evenNumbers);
    });
}
