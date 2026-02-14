//Print the Fibonacci series up to the required number of terms.
let terms = 10; // You can change this to any number of terms you want
let a = 0, b = 1, nextTerm;
console.log("Fibonacci Series:");
for (let i = 1; i <= terms; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}          