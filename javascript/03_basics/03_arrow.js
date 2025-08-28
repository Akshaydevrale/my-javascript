const user = {
    username: "Akshay",
    price: 999,

    welcomeMessage: function() {

        // => "this" refers to the current object user
        console.log(`${this.username} , welcome to website`);  // => prints username + message

        console.log(this);  // => prints whole user object
        
    }
}
user.welcomeMessage()  // => prints: Akshay , welcome to website and user object
user.username = "Sam"  // => update username inside user object
user.welcomeMessage()  // => prints: Sam , welcome to website and user object

console.log(this)  // => In Nodejs: prints {} empty object


function one(){
    let username = "Akshay"
    console.log(this.username);
    // => this refers to global object
    // => but here username is a local variable, not property of global object
}
one()  // => undefined


const two = function() {
    let username = "Akshay"
    console.log(this.username);
    // => Same as above
}
two()  // => undefined


const three = () => {
    let username = "Akshay"
    console.log(this.username);
}
three()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }  // => Normal arrow function with return

// const addTwo = (num1, num2) => num1 + num2  // => implicit return

// const addTwo = (num1, num2) => (num1 + num2)  // => implicit return

const addTwo = (num1, num2) => ({username : "Akshay"}) // => Returning an object requires parentheses

console.log(addTwo(3, 4))  // => Output: { username: "Akshay" }