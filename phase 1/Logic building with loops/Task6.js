/*
Calculate and print the sum of the first n natural numbers. using while loop.

this can be also calulated using sum=n*n+1/2 formula

*/

let i=1;

const n=4;

let sum=0;

//using the formula
sum=n*(n+1)/2;

console.log("using formula=> "+ sum);

sum=0;

//using the while loops
while(i<=n){
  sum+=i;  
  i++;
}
console.log(sum);
