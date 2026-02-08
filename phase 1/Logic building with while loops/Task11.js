//Reverse the given number and print the reversed value.

let number=1200;

let rev=0;

while(number>0){
    let singleNumber=number%10;
    //reverStr+=singleNumber
    rev = rev * 10 + singleNumber
    number=Math.floor(number/10);
}

console.log(rev)