//Print all factors of the given number.
let number = 28; // You can change this to any number you want
console.log(`Factors of ${number} are:`);
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    } 
}

