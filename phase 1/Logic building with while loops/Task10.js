//Find and print the product of all digits of a given number.

let num=1234;

let product=1;  

while(num>0){
   let rem=num%10;
    product*=rem;
    num=Math.floor(num/10);
}
console.log(product);
