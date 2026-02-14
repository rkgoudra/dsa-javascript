//Check whether the given number is an Armstrong number.
let userNumber=0;

if(userNumber<=0){

   console.log("This is not a armstrong number"); 

}else{

const countNumbers=function(userNumber){
let count=0;
while(userNumber>0){
    count+=1
    userNumber=Math.floor(userNumber/10);

}
return count;
}
const lengthofNumber=countNumbers(userNumber);
console.log(lengthofNumber);
number=userNumber;
let total=0;
do{
let singleNumber=number%10;
total+=singleNumber**lengthofNumber;
number=Math.floor(number/10); 
}while(number>0);

if(total==userNumber){
    console.log("its a armstrong number "+ total);
}else{
    console.log("its not a armstrong number "+total);
}
}
