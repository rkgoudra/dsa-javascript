# Arrays – Complete Overview

## ➊ Basics about Arrays

### What is an Array?
An array is a data structure used to store multiple values in a single variable.

### Why Arrays are Used
- To store collections of data
- To manage ordered data efficiently
- To perform operations like searching, sorting, filtering, etc.

### Creating an Array (JavaScript)
```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
fruits[1] = "Orange";
console.log(fruits.length); // 3
```
### Array Methods
Adding & Removing Elements
- push() – Add to end
- pop() – Remove from end
- shift() – Remove from start
- unshift() – Add to start
- Extracting & Modifying
- slice() – Extract portion
- splice() – Modify content
- Searching
- indexOf() – Find index
- includes() – Check existence
- fruits.push("Grapes");
- fruits.pop();

### ooping through Arrays
1. Traditional for Loop
```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```
2. for...of
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```
3. forEach()
```js
fruits.forEach(fruit => console.log(fruit));
```
4. map() (Returns New Array)
```js
let upper = fruits.map(fruit => fruit.toUpperCase());
```
5. filter()
```js
let longNames = fruits.filter(fruit => fruit.length > 5);
```
6. Array-related Operators
- Spread Operator (...)
```js
let newFruits = [...fruits];
```
- Rest Operator
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

```
- Destructuring
```js
let [first, second] = fruits;
```
- delete Operator (Not Recommended)
```js
delete fruits[1]; // Leaves undefined hole

```
7. Common Array Operations
- Searching
```
fruits.includes("Apple");
```
- sort
```
fruits.sort();
```
- Reversing
```
fruits.reverse();
```
- Merging Arrays
```
let moreFruits = ["Pineapple", "Guava"];
let allFruits = fruits.concat(moreFruits);
```
- Removing Duplicates
```
let unique = [...new Set(fruits)];
```
- flattning
```
let nested = [1, [2, 3], [4, [5]]];
let flat = nested.flat(2);
```
| Concept                 | Difference                                                                |
| ----------------------- | ------------------------------------------------------------------------- |
| `slice()` vs `splice()` | `slice()` does not modify original array, `splice()` modifies it          |
| `map()` vs `forEach()`  | `map()` returns new array, `forEach()` does not                           |
| `push()` vs `unshift()` | `push()` adds at end, `unshift()` adds at beginning                       |
| Array vs Object         | Array stores ordered data, Object stores key-value pairs                  |
| Mutable vs Immutable    | Mutable methods change original array, Immutable methods return new array |

# Basics about Arrays (JavaScript)

---

## ➀ Describe an array from JavaScript perspective.
### What is an array literal?
- An array literal is the simplest way to create an array using square brackets [].
- Example:
```
let numbers = [1, 2, 3, 4];

- It is preferred over:

let numbers = new Array(1, 2, 3, 4);
```
### Explain +ve and -ve indexes in an array
- Positive Indexes
- Start from 0
- Access elements from left to right
```
let arr = ["A", "B", "C"];
console.log(arr[0]); // "A"
```
- Negative Indexes
- JavaScript does NOT directly support negative indexing like Python.
```
console.log(arr[-1]); // undefined
```
- But you can simulate it using:
```
console.log(arr[arr.length - 1]); // Last element

- Or using .at() (modern JS):

console.log(arr.at(-1)); // Last element

```
### What is the data type of an array?
- The data type of an array in JavaScript is: **Object**
```
let arr = [];
console.log(typeof arr); // "object"

Array.isArray(arr); // true

```
### What is an Array-Like object?
- An Array-Like object is:
- An object
- Has indexed elements (0, 1, 2...)
- Has a length property
- BUT does NOT have array methods
```
let obj = {
  0: "A",
  1: "B",
  length: 2
};

```
- Common Array-Like objects:
- arguments
- NodeList
- HTMLCollection
- Strings

### Which array operations can be done on an Array-Like object?
- Directly:
- Access by index
- Read length
- Not directly:
- push()
- pop()
- map()
- filter()
- To use array methods:
```
Array.from(arrayLike).map(x => x);
[].slice.call(arrayLike);

```
### What is a sparse array and a dense array?
- Dense Array
- Every index has a value
- No empty slots
```
let arr = [1, 2, 3];
```
### Sparse Array
- Has empty slots (holes)
- Some indexes are missing

```
let arr = [1, , 3]; // Missing index 1
```
### How to detect a sparse array?
- Method 1:
```
arr.length !== Object.keys(arr).length
```
- Method 2:
```
1 in arr // false if hole
```
### How is a sparse array formed?
- Skipping elements:
```
let arr = [1, , 3];
```
- Assigning large index:
```
let arr = [];
arr[5] = 10;
```
- Using new Array(size):
```
let arr = new Array(5);
```
### Describe the looping behavior of a sparse array.
- Different loops behave differently:
#### for loop
- Iterates over all indexes including empty ones.
#### forEach()
- Skips empty slots
#### map()
- Skips empty slots but keeps holes in result.
#### for...in
- Iterates only existing keys
#### for...of
- Skips holes.
```
let arr = [1, , 3];

arr.forEach(x => console.log(x));
// Prints 1 and 3 only
```
### Convert a sparse array into a dense array.
```
let dense = arr.filter(() => true);
or
let dense = Array.from(arr);
or
let dense = [...arr];
or
let dense = arr.filter(x => x !== undefined);

```







