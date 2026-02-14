//Calculate and print the factorial of a given number.

// this can be solved using recursions also.

let i=1;

const n=5;

let fact=1;

while(i<=n){
fact*=i;
i++;
}

console.log(`factorial of ${n} is = `+fact );