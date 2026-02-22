//print even stars 
const n=10

let output=""

for(let i=2;i<=n;i+=2){
  for(let j=0;j<i;j++){
    output+="* "
  }
    output+="\n"
}

console.log(output);