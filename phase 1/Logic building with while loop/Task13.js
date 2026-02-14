//Find and print the sum of digits of the given number.

let number=1233;

let sum=0;

while(number>0){
    let extractNumber=number%10;
    sum+=extractNumber;
    number=Math.floor(number/10);
}

console.log("the sum of digits of the given number: "+sum)