//reset number to 0 in pattern printing

//print continue stars in same row

const n=10; 
let output="", num=1;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        output+=num%10+" "
        num++
    }
    //console.log(count);        
    output+="\n"
}

console.log(output);
