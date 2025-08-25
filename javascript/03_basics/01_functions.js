function sayMyName() {
    console.log("Akshay")   // => Prints "Akshay"
    console.log("Devrale")  // => Prints "Devrale"
}
sayMyName()  // => Calls the function and executes the two console logs


function addTwoNumbers(num1, num2){
    console.log(num1 + num2)  // => Adds num1 and num2, then prints the result
}
addTwoNumbers(3, 3)     // => 6 (number + number = addition)
addTwoNumbers(3, "3")   // => "33" (number + string = string concatenation)
addTwoNumbers(3, "a")   // => "3a" (number + string = string concatenation)


function addition(number1, number2){
    let result = number1 + number2   // => Stores the sum in variable 'result'
    return result   // => Returns the result to the caller
    console.log("Akshay")  // => This line will never run (after return statement code is ignored)
}
const result = addition(3, 5)   // => Function returns 8
console.log("Result: ", result)  // => Prints "Result: 8"


function logingUserMessage(username) {
    if(username === undefined){  // => If no username is provided (undefined), this block runs
        console.log("Please enter a username")  // => Prints message
        return   // => Exits the function
    }
    return  `${username} just logged in`  // => If username is given, return a string message
}
console.log(logingUserMessage("Akshay"))  // => Prints "Akshay just logged in"


function calculateCartPrice(...num1){  // => rest operator (...num1 collects all arguments into array)
    return num1  // => Returns the array of arguments
}
console.log(calculateCartPrice(200, 400, 500))  // => Prints [200, 400, 500]


// Object creation
const user = {
    username: "Tony",
    price: 199
}
// Function that accepts an object and prints its properties
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    
}
handleObject(user)  // => Passes existing 'user' object

handleObject({
    username: "Marco",  // => Inline object passed directly
    price: 399
})


const myNewArray = [10, 20, 30, 40]
// Function to return second element of an array
function returnSecondValue(getArray){
    return getArray[1]  // => returns 20
}
console.log(returnSecondValue(myNewArray));  // => Prints 20
