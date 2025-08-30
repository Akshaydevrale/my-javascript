//------------------------Immediately Invoked Function Expressions (IIFE)-----------------------

// sometimes functions pollute the global scope. 
// IIFE is used to execute a function immediately and keep variables private.

(function chai() {
    // named IIFE (function has a name: chai)
    console.log(`DB CONNECTED`)
})();  // => output: DB CONNECTED
// => extra () at the end immediately execute the function


//-------------------- Arrow function IIFE --------------------

( (name) => {
    // => unnamed IIFE using arrow function
    console.log(`DB CONNECTED ${name}`);
})('Akshay')  // => output: DB CONNECTED Akshay
// => Immediately execute with argument Akshay