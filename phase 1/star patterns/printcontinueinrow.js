//print continue stars in same row

const n=5; 
let output="", num=1;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        output+=num+" "
        num++
    }
    //console.log(count);        
    output+="\n"
}

console.log(output);