//Calculate and print the factorial of the given number.
const prompt = require("prompt-sync")();
let factorial=1;
number = Number(prompt("Enter a number: "));
do{
factorial*=number;
number--;
}while(number>0);

console.log("Factorial is "+factorial);


