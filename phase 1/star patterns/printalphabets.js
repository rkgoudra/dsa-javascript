//print alphabets patterns

const n=10;

let chNum=65;
let output="";
let letter= String.fromCharCode(chNum);
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      output+=letter+"";
     
    }
    output+="\n";
    letter=String.fromCharCode(chNum+i)
}

console.log(output)