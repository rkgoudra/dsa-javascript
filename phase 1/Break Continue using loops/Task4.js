//Search for a specific number in a list of inputs, and terminate the loop immediately when the number is found.
const prompt = require("prompt-sync")();

let target = parseInt(prompt("Enter the number to search for:"));
let found = false;
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Enter number ${i}:`));   
    if (num === target) {
        console.log("Number found!");
        found = true;
        break; 
    }

}
if (!found) {
    console.log("Number not found in the inputs.");
}   