//Calculate and print the value of the series 1! + 2! + 3! + ... + n !.
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i; // i!
    }
    return fact;
}
function sumOfFactorials(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += factorial(i); // Add i! to the sum
    }   
    return sum;
}
// Example usage:
const n = 10;
const result = sumOfFactorials(n);
console.log(`The sum of the series 1! + 2! + ... + ${n}! is: ${result}`);