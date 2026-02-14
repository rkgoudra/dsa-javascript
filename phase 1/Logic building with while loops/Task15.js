//Check whether the given number is a Perfect number.
/*
A perfect number is a number where:
Sum of its proper divisors = the number itself
number=123
1+2+3=6

6/6=1 perfect number
*/

const userNumber=28;

let sum=0, iteratior=1;


while(iteratior<userNumber){
    //let extractNumber=userNumber%10;
    if(userNumber%iteratior===0){
        sum+=iteratior;
    }
    iteratior++;

}

if(userNumber===sum){
    console.log("The given number is perfect number: "+sum)
}else{
    console.log("The given number is not a perfect number: "+sum)
}
// console.log("The given number is perfect number: "+sum)