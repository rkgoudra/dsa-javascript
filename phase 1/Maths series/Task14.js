//Calculate and print the value of the series x - x2/2! + x3/3! - x4/4! + ... up to n terms.
function factorial(n) {
    let fact = 1;      
    for (let i = 1; i <= n; i++) {
        fact *= i; // i!
    }
    return fact;
}
function sumOfAlternatingSeries(x, n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const term = Math.pow(x, i) / factorial(i); // x^i / i!
        sum += (i % 2 === 0) ? -term : term; // Alternate signs

    }
    return sum;
}   
// Example usage:
const x = 2;
const n = 10;
const result = sumOfAlternatingSeries(x, n);
console.log(`The sum of the series ${x} - ${x}²/2! + ${x}³/3! - ... up to ${n} terms is: ${result}`);