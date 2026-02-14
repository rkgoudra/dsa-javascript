//Calculate and print the sum of even digits and the sum of odd digits of the given number separately.

const prompt = require("prompt-sync")();
let sumEven=0;
let sumOdd=0;
number = Number(prompt("Enter a number: "));
do{
let singleNumber=number%10;
if(singleNumber%2===0){
    sumEven+=singleNumber;
}else{
    sumOdd+=singleNumber;
}

number=Math.floor(number/10);
}while(number>0); 

console.log("Sum of even digits is "+sumEven);
console.log("Sum of odd digits is "+sumOdd);