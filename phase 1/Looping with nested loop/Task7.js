//Print a matrix, then calculate and display the sum of each row and the sum of each column.
function printMatrixAndSums(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Print the matrix
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }

    // Calculate and display row sums
    console.log("Row sums:");
    for (let i = 0; i < rows; i++) {
        let sum = 0;
        for (let j = 0; j < cols; j++) {
            sum += matrix[i][j];
        }
        console.log(`Row ${i + 1}: ${sum}`);
    }

    // Calculate and display column sums
    console.log("Column sums:");
    for (let j = 0; j < cols; j++) {
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            sum += matrix[i][j];
        }
        console.log(`Column ${j + 1}: ${sum}`);
    }
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
printMatrixAndSums(matrix);