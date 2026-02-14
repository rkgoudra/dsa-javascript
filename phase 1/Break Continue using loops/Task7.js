//Continuously add numbers in a loop and stop the loop when the sum becomes greater than 100
let sum = 0;
for (let i = 1; ; i++) {
    sum += i;   
    if (sum > 100) {
        break; 
    }

}
console.log("Sum exceeded 100 at number:", sum);
