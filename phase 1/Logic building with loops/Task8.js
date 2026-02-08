//Calculate the sum of all odd numbers from 1 up to n.

let i=1;

const n=10;

let sum=0;

let numsArr=[];

while(i<=n){

    if(i%2!==0){
        numsArr.push(i);
        sum+=i;
    }
i++;
}

console.log(` the sum of even numbers is ${numsArr.join('+')}= `+sum);