//Print Repeated Numbers per Row (Same Number Repeated)

const n=5;

let output="";


for(let i=1;i<=n;i++){

    for(let j=1;j<=i;j++){
        output+=i;
    }

output+="\n";
}

console.log(output)