// Dates

let myDate = new Date()
console.log(myDate.toString()); // => Mon Aug 11 2025 14:12:36 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // => Mon Aug 11 2025
console.log(myDate.toLocaleDateString());  // => 8/11/2025
console.log(myDate.toLocaleString());  // => 8/11/2025, 2:15:51 PM
console.log(myDate.toISOString());  // => 2025-08-11T08:44:20.996Z
console.log(typeof myDate);  // => object

let myCreatedDate = new Date(2025, 7, 11)
console.log(myCreatedDate.toDateString());  // => Mon Aug 11 2025

let myCreatedDateTime = new Date(2025, 7, 11, 2, 22)
console.log(myCreatedDateTime.toLocaleString());  // => 8/11/2025, 2:22:00 AM

let newDate = new Date()
console.log(newDate);  // => 2025-08-11T08:58:55.888Z
console.log(newDate.getMonth());  // => 7 : current month
console.log(newDate.getDay());  // =>  1 : current Day >> Monday <<
console.log(newDate.getDate());  // => 11 : current date