/*
Print the Fibonacci series up to n terms.

the sum of two prescribing numbers

first=0
second=1
next= first+second
first=second
second=next


0+1+1+2
*/

const userNumber=5;

let first=0;
let second=1;

let start=0;
let next=0;

while(start<userNumber){
   console.log(first); 
   next=first+second;
   first=second;    
   second=next;
   
   start++  
}