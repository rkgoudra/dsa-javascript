//Print the Fibonacci series up to the required number of terms.
function printFibonacciSeries(n) {
    let series = [];
    let a = 0, b = 1;   
    for (let i = 0; i < n; i++) {
        series.push(a);
        [a, b] = [b, a + b]; // Update a and b to the next two Fibonacci numbers
    }
    return series;
}
// Example usage:
const n = 10;
const result = printFibonacciSeries(n);
console.log(`The first ${n} terms of the Fibonacci series are: ${result}`);