//Print the series of powers of two: 1+2+4+8+ ... +2n

function sumOfPowersOfTwo(n) {
    let sum = 0;        
    for (let i = 0; i <= n; i++) {
        sum += Math.pow(2, i); // 2^i
    }
    return sum;
}   
// Example usage:
const n = 10;
const result = sumOfPowersOfTwo(n);
console.log(`The sum of the series 1 + 2 + 4 + ... + 2^${n} is: ${result}`);