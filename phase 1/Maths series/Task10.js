//Calculate and print the value of the series 1 + 1/2 + 1/3 + ... + 1/n.
function sumOfHarmonicSeries(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum;
}
// Example usage:
const n = 10;
const result = sumOfHarmonicSeries(n);
console.log(`The sum of the series 1 + 1/2 + ... + 1/${n} is: ${result}`);