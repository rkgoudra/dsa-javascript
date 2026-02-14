//Find the HCF (Highest Common Factor) of the given numbers.
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let hcf=1;
let i=2;

do{
    if(number1%i==0 && number2%i===0){
        hcf=i;
    }
    i++;

}while(i<=number1 && i<=number2);

console.log(hcf)
