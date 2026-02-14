//Print the multiplication tables for all numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); // Add an empty line for better readability
}
        