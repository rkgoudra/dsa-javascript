/*
Print all numbers between a and b that are divisible by 7.
*/

let startNumber=1

const endNumber=15

const DIVIDEBY=7;

while(startNumber<=endNumber){
   
    if(startNumber%DIVIDEBY===0){
        console.log(startNumber+" is divisible by "+DIVIDEBY)
    }
    startNumber++
}