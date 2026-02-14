//Count and print the number of digits in the given number.

const prompt = require("prompt-sync")();
let counter=0;
number = Number(prompt("Enter a number: "));
do{
number=Math.floor(number/10);
counter++;

}while(number>0);

console.log("The number has "+counter+ " digit")
