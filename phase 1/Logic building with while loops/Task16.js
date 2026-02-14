/*

Print all prime numbers between 1 and 100.
A prime number is a number that has only two divisors:

1
Itself

*/



const maxNumber = 100;
let iterator = 2;
while (iterator <= maxNumber) {
  let i = 2;
  let isPrime = true;
  while (i <= Math.sqrt(iterator)) {
    if (iterator % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  if (isPrime) {
    console.log(iterator + ' is prime number');
  }
  iterator++;
}
