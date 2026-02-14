//Find and print the sum of all factors of the given number.
let number = 28; // You can change this to any number you want
let sumOfFactors = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        sumOfFactors += i;
    }           
}
console.log(`Sum of factors of ${number} is ${sumOfFactors}.`);