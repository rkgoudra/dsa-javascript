//Find and print the sum of all odd numbers from 1 up to n.
let n = 10; // You can change this to any number you want
let sumOfOddNumbers = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        sumOfOddNumbers += i;
    }
}
console.log(`Sum of odd numbers from 1 to ${n} is ${sumOfOddNumbers}.`);       