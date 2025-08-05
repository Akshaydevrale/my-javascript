//********************************** Conversion *************************************

let a = "33"  // =>33

//It is use to convert value into number
let valueInNumber1 = Number(a)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

//let a = null  => 0
//let a = undefined  => NaN
//let a = true  => 1
//let a = "Akshay"  => NaN

let isLoggedIn = 1  // =>true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//let isLoggedIn = 0  => false
//let isLoggedIn = ""  => false
//let isLoggedIn = "Akshay"  => true

let number = 45  // => String
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

//Positive into negative
let value = 3
let negValue = -value
console.log(negValue);