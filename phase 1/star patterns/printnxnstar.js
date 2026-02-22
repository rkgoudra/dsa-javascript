//Print Square of Stars (n x n Stars)
const m=3,n=3;
let output="";

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        
         output+="* "
    }
    output+="\n"
}

console.log(output)
