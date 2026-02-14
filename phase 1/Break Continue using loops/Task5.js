//Keep taking numbers from the user and print them until a negative number appears, then stop the loop.

const prompt = require("prompt-sync")();

while (true) {
    let num = parseInt(prompt("Enter a number (negative to stop):"));
    if (num < 0) {
        console.log("Negative number entered. Stopping the loop.");
        break; 
    }
    console.log("You entered:", num);
}   
