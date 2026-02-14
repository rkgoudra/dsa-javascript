//Find and print the sum of the Fibonacci series up to the required number of terms.
function sumOfFibonacciSeries(n) {
    let sum = 0;
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sum += a;
        [a, b] = [b, a + b]; // Update a and b to the next two Fibonacci numbers
    }
    return sum;
}   
// Example usage:
const n = 10;
const result = sumOfFibonacciSeries(n);
console.log(`The sum of the first ${n} terms of the Fibonacci series is: ${result}`);