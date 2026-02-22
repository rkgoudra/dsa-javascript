//print an increasing triangle of stars

const n=2;

let output="";

for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        output+="*"
    }
 output+="\n"
}

console.log(output)