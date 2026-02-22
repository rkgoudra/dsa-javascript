//print odd stars
const n = 10;

let output = "";

for (let i = 1; i <= n; i += 2) {
  for (let j = 0; j < n - i - 1; j++) {
    output += "";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    output += "*";
  }
  output += "\n";
}

console.log(output);
