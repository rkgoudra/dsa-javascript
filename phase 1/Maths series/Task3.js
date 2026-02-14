//Find and print the sum of the first n odd numbers.
function sumOfOddNumbers(n) {
    let sum = 0;    
    for (let i = 1; i <= n; i++) {
        sum += 2 * i - 1; // The nth odd number is 2n - 1
    }
    return sum;
}   
// Example usage:
const n = 10;
const result = sumOfOddNumbers(n);
console.log(`The sum of the first ${n} odd numbers is: ${result}`);