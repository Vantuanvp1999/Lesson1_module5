"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let count = 10;
let sum = 0;
for (let index = 0; index < count; index++) {
    let fib = fibonacci(index);
    console.log(fib);
    sum += fib;
}
console.log(`Tổng của ${count} số Fibonacci đầu tiên là: ${sum}`);
//# sourceMappingURL=main.js.map