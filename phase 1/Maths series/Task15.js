//Check whether the given number is a Strong number, where the number equals the sum of factorials of its digits.
//Sum of the factorial of each digit = The number itself
//Example: 145 is a Strong number because 1! + 4! + 5! = 145
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i; // num!
    }

    return fact;
}
function isStrongNumber(number) {
    const digits = number.toString().split('').map(Number);
    const sumOfFactorials = digits.reduce((sum, digit) => sum + factorial(digit), 0);
    return sumOfFactorials === number;
}
// Example usage:
const number = 145;
if (isStrongNumber(number)) {
    console.log(`${number} is a Strong number.`);
} else {    console.log(`${number} is not a Strong number.`);
}