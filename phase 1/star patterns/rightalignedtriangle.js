// print right aligned triangle
const n=4,m=4
let output=""; 
for(let i=0;i<n;i++){
  for(let j=0;j<n-i-1;j++){
   output+=" ";
  }

  for(let k=0;k<i+1;k++){
    output+="*";
  }

  output+="\n"
}

console.log(output);