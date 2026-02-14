//Find and print the sum of the Fibonacci series.
let terms = 10; // You can change this to any number of terms you want
let a = 0, b = 1, nextTerm;
let sum = a + b;
for (let i = 3; i <= terms; i++) {
    nextTerm = a + b;
    sum += nextTerm;
    a = b;
    b = nextTerm;
}
console.log(`Sum of the first ${terms} terms of the Fibonacci series is ${sum}.`);       