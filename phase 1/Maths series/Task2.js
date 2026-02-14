//Find and print the sum of the first n even numbers.
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 2 * i; // The nth even number is 2n
    }   
    return sum;
}

// Example usage:
const n = 10;
const result = sumOfEvenNumbers(n);
console.log(`The sum of the first ${n} even numbers is: ${result}`);