//print 0 and 1 number pyramid

const n=5;

let num=1, output="";

for(let i=1;i<=n;i++){

    let digit=(i%2==1)?1:0;
    for(let j=1;j<=i;j++){
        output+=digit+" "
        digit=1-digit;
        num++;
    }
    output+="\n";
}

console.log(output)