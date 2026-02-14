//Check whether the given number is a palindrome.
const prompt = require("prompt-sync")();
let reversedNumber=0;
number = Number(prompt("Enter a number: "));
const originalNumber=number;
if(number<0){
console.log(`${number} is not a palindrome`);
return
}

do{
let singleNumber=number%10; 
reversedNumber=reversedNumber*10+singleNumber;
number=Math.floor(number/10);

}while(number>0);

if(originalNumber==reversedNumber){
console.log(`The given number is ${reversedNumber} is palindrome`);
}else{
console.log(`The given number ${reversedNumber} is not palindrome`);
}

