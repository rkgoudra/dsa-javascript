//Print all possible pairs (i, j) where both i and j range from 1 to n. used in matrix problems
function printPairs(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(`(${i}, ${j})`);
        }
    }
}

// Example usage:
printPairs(5); // This will print all pairs (i, j) where i and j range from 1 to 5.