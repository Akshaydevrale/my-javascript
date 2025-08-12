// Create two arrays
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)  // Add dc_heros array as a single element inside marvel_heros
console.log(marvel_heros);  // => ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]

console.log(marvel_heros[3]);  // Access the 4th element which is the entire dc_heros array
//Output =>  ["superman", "flash", "batman"]

console.log(marvel_heros[3][0]);  // Access the first element of dc_heros inside marvel_heros
//Output => superman

const allHeros = marvel_heros.concat(dc_heros)  // Merge marvel_heros and dc_heros using concat() creates a new array
console.log(allHeros); // => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // Merge marvel_heros and dc_heros using spread (...) avoids nesting arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 1]]] // nested array with multiple levels
const real_another_array = another_array.flat(Infinity)  // it merges the elements of nested arrays into a new single array.
console.log(real_another_array);  // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]

console.log(Array.isArray("Akshay"));  // Check if given value is an array
// Output => false

console.log(Array.from("Akshay")); // Convert a string into an array of characters
//Output => [ 'A', 'k', 's', 'h', 'a', 'y' ]

// Create array from given values using Array.of()
let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1, score2, score3));
// Output => [10, 20, 30]
