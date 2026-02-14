//Find and print the sum of all even numbers from 1 up to n.
let n = 10; // You can change this to any number you want
let sumOfEvenNumbers = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        sumOfEvenNumbers += i;
    }
}
console.log(`Sum of even numbers from 1 to ${n} is ${sumOfEvenNumbers}.`);   