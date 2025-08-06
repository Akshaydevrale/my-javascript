const name = "akshay"
const age = 21
console.log(`Hello my name is ${name} and my Age is ${age}`); // => prefer this syntax for concatenate

const myName = new String('Akshay-Devrale')

console.log(myName.length);  // => Length of String
console.log(myName[0]);  // => character on 0 index
console.log(myName.toUpperCase());  // => Convert in Uppercase
console.log(myName.charAt(2));  // => character on 2 index with charAt
console.log(myName.indexOf('s'));  // => index of character

const newString = myName.substring(0,4)  //it stops printing before index 4
console.log(newString);

const newStringOne = "   akshay   "
console.log(newStringOne.trim());  // => it removes starting and ending spaces

const url = "akshay%20devrale"
console.log(url.replace('%20','_'));  // => its replace characters

const str = "Hello,js"
console.log(str.repeat(3));  // => it repeats string 3 times
console.log(str.split(","));  // => separates the string 
console.log(str.replaceAll("l","*"));  // => it replace all match characters
console.log(url.includes('js'));  // => it is used for searching in a string