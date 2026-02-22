//Print continuous Numbers per Row (continue Number Repeated)

const n=10;
let output=""
let num=1;
for(let i=1;i<=n;i++){
   num=i;
    for(let j=1;j<=i;j++){
        output+=num+" "
        
    }
    output+="\n"
    
}

console.log(output);