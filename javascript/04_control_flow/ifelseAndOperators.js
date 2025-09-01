//-------------------- if statements & comparison operators --------------------

// Operators: <, >, <=, >=, ==, !=, ===

const isUserLoggedIn = true
const temperature = 41

if (temperature < 50){
    console.log("less than 50");  // => 41 < 50 true, so this block runs
} else {
    console.log("greater than 50");  // => Will not run in this case
}


const score = 200
if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);  // => prints User power: fly
}
//console.log(`User power: ${power}`);
// => Error: 'power' is block-scoped, cannot be accessed outside


//-------------------- single-line if --------------------

const balance = 1000
if(balance > 500) console.log("test");  // => If only one statement,{} can be skipped prints: test

//-------------------- else if --------------------

if(balance < 500){
    console.log("less than 500");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
    // => 1000 < 1200 is true prints this
}


//-------------------- Logical AND (&&) --------------------

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    // => && means all conditions must be true
    // => true && true prints: Allow to buy course
}


//-------------------- Logical OR (||) --------------------

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    // => || means at least onw condition must be true
    // => false || true prints: User logged in
}
