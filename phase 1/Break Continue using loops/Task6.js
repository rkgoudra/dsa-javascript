//Skip all odd numbers and print only the even numbers.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue; 
    }
    console.log(i);
}
