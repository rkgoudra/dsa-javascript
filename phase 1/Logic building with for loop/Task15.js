//Find the HCF (Highest Common Factor) of the given numbers.
let num1 = 48; // You can change this to any number you want
let num2 = 18;  // You can change this to any number you want
let hcf = 1;
let min = Math.min(num1, num2);
for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        hcf = i;
    }
}
console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);                