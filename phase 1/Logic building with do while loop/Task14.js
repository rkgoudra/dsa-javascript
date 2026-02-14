//Find and print the sum of digits of the given number.

const prompt = require("prompt-sync")();
let sum=0;
number = Number(prompt("Enter a number: ")); 
do{
let singleNumber=number%10; 
sum+=singleNumber;
console.log(sum);
    number=Math.floor(number/10);
}while(number>0);

console.log("The sum of digits is "+sum); 
