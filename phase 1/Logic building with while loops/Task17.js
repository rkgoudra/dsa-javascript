//Check whether the given number is a prime number.
let number = 10;

let iterator = 2;
let isPrime = true;
while (iterator <= Math.sqrt(number)) {
  if (number % iterator === 0) {
    isPrime = false;
  }
  iterator++;
}

if (isPrime) {
  console.log(number + ' is prime number');
} else {
  console.log(number + ' is not a prime number');
}
