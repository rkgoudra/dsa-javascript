//Keep taking numbers from the user until a negative number is entered, then count how many positive numbers were entered.

const prompt = require("prompt-sync")();

let input,count=0;
let condition=true;

do{
input = Number(prompt("Enter any number "));
if(input>=0){
    count ++;

}else if(input<0){
condition=false;
}
console.log("Total entered positive number "+count);
}while(condition);