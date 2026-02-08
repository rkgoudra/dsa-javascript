//Check whether the given number is a Perfect number.
/*
A perfect number is a number where:
Sum of its proper divisors = the number itself
number=123
1+2+3=6

6/6=1 perfect number
*/

const userNumber=123;

let sum=1;


while(sum<=userNumber/2){
    let extractNumber=userNumber%10;
    if(userNumber%sum===0){
        sum+=extractNumber;
    }
    sum++;

}

console.log("The given number is perfect number: "+sum)