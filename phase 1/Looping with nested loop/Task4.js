//Print all prime numbers up to n using nested loop checking.
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}   
 
// Example usage:
printPrimes(20); // This will print all prime numbers up to 20.