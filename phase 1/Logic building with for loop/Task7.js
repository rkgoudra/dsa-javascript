//Calculate and print the factorial of a given number.
let num = 5; // You can change this to any number you want
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}.`);  