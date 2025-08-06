// Primitive:
// => String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null  //Output : object
let userEmail; // => undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // => false

const bigNumber = 3423523522347476n

// Reference (Non primitive):
//Array, Objects, Functions

// Array
const heros = ["shaktiman", "superman", "spiderman"]  

// Object
let myObj = {
    name: "Akshay",
    age: 21,
}

//function
const myFunction = function(){
    console.log("Hello World");
}
