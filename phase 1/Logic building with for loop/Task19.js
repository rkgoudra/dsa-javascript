//Print all numbers between a and b that are divisible by 7.
let a = 1; // You can change this to any number you want
let b = 100;
console.log(`Numbers between ${a} and ${b} that are divisible by 7:`);
for (let i = a; i <= b; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}           