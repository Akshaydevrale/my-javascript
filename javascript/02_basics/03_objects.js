Object.create  // => We can create object using Object.create

// object literals

const JsUser = {
    name : "akshay",
    age : 21,
    location : "Pune",
    email : "akshay@email.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// Multiple ways to access the values of an object

console.log(JsUser.name);  // => Access using dot notation : akshay
console.log(JsUser["location"]);  // => Access using bracket notation : Pune

const key = "email";  
console.log(JsUser[key]);  // => Access using variable key : akshay@email.com

console.log(JsUser.lastLoginDays[0]);  // => Access array element inside object : Monday

console.log(Object.keys(JsUser));  // = > Access using keys
// Output : ["name", "age", "location", "email", "isLoggedIn", "lastLoginDays"]

console.log(Object.values(JsUser));  // = > Access using values
// Output : ["akshay", 21, "Pune", "akshay@email.com", false, ["Monday", "Saturday"]]

console.log(Object.entries(JsUser));  // = > Access using entries
// Output : [[ 'name', 'akshay' ],[ 'age', 21 ],[ 'location', 'Pune' ],[ 'email', 'akshay@email.com' ],[ 'isLoggedIn', false ],[ 'lastLoginDays', [ 'Monday', 'Saturday' ]]]

JsUser.email = "akshay@microsoft.com"  // => Update property
Object.freeze(JsUser)  // => freeze object (no more changes allowed)
JsUser.email = "akshay@chatgpt.com"  // => This change will be ignored (Because object is freeze)
console.log(JsUser);  // => Output shows email "akshay@microsoft.com"