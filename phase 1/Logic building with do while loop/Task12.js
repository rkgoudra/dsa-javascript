//Create a menu-driven program that allows the user to choose and perform different operations.
const prompt = require("prompt-sync")();

let choice;

do{
choice = Number(prompt("Enter your choice:\n1:Addition\n2.Subtraction\n3.Exit\n"));

console.log(choice); 
if(choice==1){
  let number1 = Number(prompt("\nEnter your value of a "));
  let number2 = Number(prompt("Enter your value of b "));
  console.log("Addition of two numebrs is "+(number1+number2));    

}else if(choice==2){
  let number1 = Number(prompt("\nEnter your value of a"));
  let number2 = Number(prompt("Enter your value of b"));
  console.log("Subtraction of two numebrs is "+(number1-number2));    

}else if(choice==3){
    choice=0
    console.log("Programming is exiting");
}     

}while(choice!=0);
