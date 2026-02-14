//Keep taking numbers from the user until 0 is entered, then print the sum of all entered numbers.
const prompt = require("prompt-sync")();

let sum=0;
let number
do{
number = Number(prompt("Enter a number: "));
//console.log(number);
sum+=number;
console.log(sum); 
   
}while(number!==0);
