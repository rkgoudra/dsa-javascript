//For every number from 1 to n, count and print the total number of its factors.
function countFactors(n) {
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                console.log(`Factor of ${i}: ${j}`);
                count++;
            }
        }
        console.log(`Number: ${i}, Total Factors: ${count}`);
    }
}

// Example usage:
countFactors(10); // This will count and print the total number of factors for each number from 1 to 10.       