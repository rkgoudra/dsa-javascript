//Reverse the given number and print the reversed value.
const prompt = require("prompt-sync")();
let reversedNumber=0;
number = Number(prompt("Enter a number: "));
do{
let singleNumber=number%10; 
reversedNumber=reversedNumber*10+singleNumber;
console.log(reversedNumber);
number=Math.floor(number/10);

}while(number>0);

console.log(reversedNumber);
