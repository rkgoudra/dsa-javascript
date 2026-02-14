//Calculate and print the value of the series 12 + 22 + 32 + ... + n2.
function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}
// Example usage:
const n = 10;
const result = sumOfSquares(n);
console.log(`The sum of the series 1² + 2² + ... + ${n}² is: ${result}`);