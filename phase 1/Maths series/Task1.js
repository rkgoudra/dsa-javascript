//Find and print the sum of the first n natural numbers.
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// Example usage:
const n = 10;
const result = sumOfNaturalNumbers(n);
console.log(`The sum of the first ${n} natural numbers is: ${result}`);