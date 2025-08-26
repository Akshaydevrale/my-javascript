
let a = 300  // => Global scope variable
if(true){
    let a = 10  // => access only inside this block
    const b = 20
    var c = 30
    console.log("Inner: ", a);   // => prints 10
}
console.log(a);  // => prints 300
//console.log(b);  // => error
console.log(c);  // => prints 30  >>> var is function scope


//--------------------Nested function scope-----------------------

function one(){
    const username = "Akshay" // => Defined inside one()

    function two(){
        const website = "youtube"  // => Defined inside two()
        console.log(username);  // => accessible because two() has access to outer scope
    }
    
    two()  // => calls two() prints Akshay

}
one()


//--------------------Nested if scope-----------------------

if (true){
    const username = "Akshay"
    if(username === "Akshay"){
        const website = " youtube"
        console.log(username + website);  // => prints "Akshay youtube"
        // Inner block has access to outer 'username' 
    }
}


console.log(addOne(5))  // => it works output: 6
function addOne(num){
    return num + 1
}

console.log(addTwo(5))  // => error. this cannot access before initialization
const addTwo = function(num){
    return num + 2
}