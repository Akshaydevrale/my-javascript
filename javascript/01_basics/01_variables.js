const accountId = 144553
let accountEmail = "akshay@email.com"
var accountPassword = "12345"
accountCity = "Pune"  /=> we can declare variable without datatype
let accountState

//accountId = 2    // => not allowed because accountId is constant

accountCity ="Jalgaon"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

