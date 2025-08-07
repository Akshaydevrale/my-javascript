//------------------------------------- Numbers ----------------------------------------

const score = 400  // => Number (primitive)
console.log(score);

const balance = new Number(100)  // => Object (Number object)
console.log(balance);

console.log(balance.toString().length);  // => Returns length of number as string
console.log(balance.toFixed(2));         // => Formats number with 2 decimal places (returns string)

const ohterNumber = 23.8966;
console.log(ohterNumber.toPrecision(3));  // => Returns number as string with 3 significant digits (rounded as needed)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // => formats a number based on a specific locale (language + region).

//------------------------------------- Maths ------------------------------------------

console.log(Math); // => Object
console.log(Math.abs(-7));  // => Absolute Value(removes the -sign)
console.log(Math.round(4.6));  // => Rounds up 5
console.log(Math.ceil(4.2));  // => Rounds up 5
console.log(Math.floor(4.9));  // => Rounds down 4
console.log(Math.min(4,6,3,8));  // => Return minimun 3
console.log(Math.max(4,6,3,8));  // => Return maximun 8
console.log(Math.random());  // => Returns random decimal between 0 and 1