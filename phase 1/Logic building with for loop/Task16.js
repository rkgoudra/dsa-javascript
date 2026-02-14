//Find the LCM (Least Common Multiple) of the given numbers using for loop.
let num1 = 12; // You can change this to any number you want
let num2 = 15;
let lcm = (num1 > num2) ? num1 : num2;
let min = num1 * num2;
for (let i = 1; i <= min; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
        lcm = i;
        break;
    }
}
console.log(`LCM of ${num1} and ${num2} is ${lcm}.`);