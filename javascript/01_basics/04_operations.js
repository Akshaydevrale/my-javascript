//********************************** Operations *************************************

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**3);

//it is concatenate the string into Hello World
let str1 = "Hello"
let str2 = " World"
let res = str1 + str2
console.log(res);

//Once JS encounters a string during addition (+),
//it converts the rest of the values to strings and performs concatenation instead of arithmetic.
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//increment
let gameCounter = 100
gameCounter++;
console.log(gameCounter);

//Pre-increment
let a = 3;
const b = ++a;
console.log(a,b);  // => 4,4

//Post-increment
let x = 3;
const y = x++;
console.log(x,y);  // => 4,3