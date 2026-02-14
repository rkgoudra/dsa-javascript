//Calculate and print the factorial of every number from 1 to n.
let n = 10; // You can change this to any number you want
for (let i = 1; i <= n; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    console.log(`Factorial of ${i} is ${factorial}.`);
}     