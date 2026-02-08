//Check whether the given number is an Armstrong number.

/*what is armstrong number==>
  Sum of each digit raised to the power of total digits = the original number

ex. 153 power of total digit is 3
1^3+5^3+3^3= 153
    */
let userNumber=123;

const countNumbers=function(userNumber){
let count=0;
while(userNumber>0){
    let extractNumber=userNumber%10;
    count+=1
    userNumber=Math.floor(userNumber/10);

}
return count;
}
const lengthofNumber=countNumbers(userNumber);




let armNumber=0;

let number=userNumber;

while(number>0){
    let extractNumber=number%10;
    armNumber+=extractNumber**lengthofNumber
    number=Math.floor(number/10);
}

if(userNumber===armNumber){
    console.log("The given number is armstrong Number: "+armNumber)
}else{
    console.log("The given number isn\'t armstrong Number: "+armNumber)
}




