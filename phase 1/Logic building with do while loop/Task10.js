//Print the Fibonacci series up to the required number of terms.

const prompt = require("prompt-sync")();
let first=0;
let second=1;
let terms = Number(prompt("Enter the number of terms: "));
let count = 0;

do {
    if (count === 0) {
        console.log(first);
    } else if (count === 1) {
        console.log(second);
    } else {
        let next = first + second;
        console.log(next);
        first = second;
        second = next;
    }
    count++;
} while (count < terms);