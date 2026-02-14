//Calculate the sum of all even numbers from 1 up to n.

let i=1;

const n=10;

let sum=0;

while(i<=n){

    if(i%2===0){
        console.log(i);
        sum+=i;
    }
i++;
}

console.log(" the sum of even numbers is==> "+sum);