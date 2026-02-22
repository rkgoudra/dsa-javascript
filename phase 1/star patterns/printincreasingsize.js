//Print Numbers in an Increasing Sequence (1, 12, 123, 1234, 12345)

const n=5;

let output="";  

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        output+=j;
    }
    output+="\n"
}

console.log(output)   