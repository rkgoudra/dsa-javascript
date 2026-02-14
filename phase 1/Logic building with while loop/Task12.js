//Check whether the given number is a palindrome.

const userNumber=1221;

let reversedNumber=0;


let number=userNumber;
while(number>0){
    let extractedNumber=number%10;
    reversedNumber=reversedNumber*10+extractedNumber;
    number=Math.floor(number/10);
}

if(reversedNumber===userNumber){
    console.log("The number is palindrome "+reversedNumber);
}else{
    console.log("The number is not panlindrome"+reversedNumber);
}
