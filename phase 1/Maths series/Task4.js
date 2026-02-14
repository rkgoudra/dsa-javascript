//Print the first n terms of an arithmetic progression for the given first term and common difference.
function printArithmeticProgression(firstTerm, commonDifference, n) {
    let terms = [];
    for (let i = 0; i < n; i++) {
        terms.push(firstTerm + i * commonDifference);
    }
    return terms;
}

// Example usage:
const firstTerm = 2;
const commonDifference = 3;
const n = 10;
const result = printArithmeticProgression(firstTerm, commonDifference, n);
console.log(`The first ${n} terms of the arithmetic progression are: ${result}`);