"use strict";  //treat all JS code as newer version

let name = "Akshay" //string
let age = 21  //number
let adhaarNumber = 123456789000n //bigint
let isStudent = true  //boolean
let address = null  //null
let score  //undefined
let id = Symbol("Id")  //symbol

let person ={name:"Akshay", age:21};  //object
let fruits = ["apple", "banana", "mango"];  //array

function greet(){
    console.log("Hello World...");
}  //function

greet()


//we can use typeof to check variable datatype
console.log(typeof name)
console.log(typeof age)
console.log(typeof adhaarNumber)
console.log(typeof isStudent)
console.log(typeof address)
console.log(typeof score)
console.log(typeof id)

console.log(typeof person)
console.log(typeof fruits)
