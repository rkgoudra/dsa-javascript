//Print the first n terms of a geometric progression for the given first term and common ratio.
function printGeometricProgression(firstTerm, commonRatio, n) {
    let terms = [];
    for (let i = 0; i < n; i++) {
        terms.push(firstTerm * Math.pow(commonRatio, i));
    }
    return terms;
}

// Example usage:
const firstTerm = 2;
const commonRatio = 3;
const n = 10;
const result = printGeometricProgression(firstTerm, commonRatio, n);
console.log(`The first ${n} terms of the geometric progression are: ${result}`);