//Calculate and print the value of the series 13 + 23 + 33 + ... + n3.
function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i * i; // i³
    }   
    return sum;
}
// Example usage:
const n = 10;
const result = sumOfCubes(n);
console.log(`The sum of the series 1³ + 2³ + ... + ${n}³ is: ${result}`);