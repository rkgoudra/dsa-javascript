//Check whether the given number is a prime number.
let num = 29; // You can change this to any number you want
let isPrime = true;
if (num <= 1) {
    isPrime = false;
}   else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}          