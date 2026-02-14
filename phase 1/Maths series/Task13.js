//Calculate and print the value of the series 1 + x + x2 + x3 + ... + xn.

function sumOfGeometricSeries(x, n) {
    let sum = 0;    
    for (let i = 0; i <= n; i++) {
        sum += Math.pow(x, i); // x^i
    }
    return sum;
}
// Example usage:
const x = 2;
const n = 10;

const result = sumOfGeometricSeries(x, n);
console.log(`The sum of the series 1 + ${x} + ${x}² + ... + ${x}^${n} is: ${result}`);