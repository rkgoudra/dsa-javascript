//Print the Fibonacci pattern row by row, where each row prints the next Fibonacci numbers
function printFibonacciPattern(rows) {
    let a = 0, b = 1;
    for (let i = 1; i <= rows; i++) {
        let fib = [];
        for (let j = 1; j <= i; j++) {
            fib.push(a);
            let temp = a + b;
            a = b;
            b = temp;
        }
        console.log(fib.join(' '));
    }
}

// Example usage:
printFibonacciPattern(5); // This will print the Fibonacci pattern for 5 rows.