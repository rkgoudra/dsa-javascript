//Take 5 numbers as input, skip any number that is 0 using continue, and calculate the sum of the remaining numbers.
const prompt = require("prompt-sync")();

let sum = 0;
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Enter number ${i}:`));
    if (num === 0) {
        continue;
    }
    sum += num;
}
console.log("Sum of non-zero numbers:", sum);