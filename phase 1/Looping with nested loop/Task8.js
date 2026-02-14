//Print all Pythagorean triplets whose values are less than or equal to n.
function printPythagoreanTriplets(n) {
    for (let a = 1; a <= n; a++) {
            
        for (let b = a; b <= n; b++) {
            let c = Math.sqrt(a * a + b * b);   
            if (c <= n && Number.isInteger(c)) {
                console.log(`(${a}, ${b}, ${c})`);
            }
        }
    }   
}

// Example usage:
printPythagoreanTriplets(20); // This will print all Pythagorean triplets with values less than or equal to 20.