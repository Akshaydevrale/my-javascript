// ----------------------- Truthy & Falsy -----------------------

// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values :
// "0", 'false', " ", [], {}, function(){}


const user1 = "akshay@email.com"
if(user1){
    console.log("User 1: Got user email"); // => "akshay@email.com" is a non-empty string: truthy
} else {
    console.log("User 1: Dont have user email");
}

const user2 = ""
if(user2){
    console.log("User 2: Got user email");
} else {
    console.log("User 2: Dont have user email");  // => "" empty string: falsy
}

const user3 = []
if(user3){
    console.log("User 3: Got user email");  // => [] empty array: truthy (special case in JS)
} else {
    console.log("User 3: Dont have user email");
}

if(user3.length === 0){
    console.log("Array is empty");  // => But to check if array is actually empty, we check length
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    // => Object.keys(emptyObj) [] (no keys inside object)
    // => .length === 0 confirms object is empty
}


// -------------------- Nullish Coalescing Operator (??) ---------------------
// ?? only checks for null or undefined. 
// If value is null/undefined use the fallback on right side.

let val1;
val1 = 5 ?? 10
console.log(val1);  // => 5

let val2;
val2 = null ?? 20
console.log(val2);  // => 20

let val3;
val3 = undefined ?? 30
console.log(val3);  // => 30

let val4;
val4 = null ?? 5 ?? 10
console.log(val4);  // => 5


//----------------------- Terniary Operator --------------------
// condition ? run if true : run if false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");  // => Less than 80 