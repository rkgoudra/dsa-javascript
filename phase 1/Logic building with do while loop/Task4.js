//Keep taking numbers from the user until 0 is entered, then print the largest number among all inputs.

const prompt = require("prompt-sync")();

let number
let largest=0;
do{
number = Number(prompt("Enter a number: "));
console.log("Entered number is "+number);
if(number>largest){
   largest=number
}
console.log("Largest number among all "+largest); 
   
}while(number!==0);