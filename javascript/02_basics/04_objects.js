// Object Singleton

const User= new Object()  // => singleton object

const tinderUser = {}  // => non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser); // => { id: '123abc', name: 'Sam', isLoggedIn: false }


//nested objects
const regularUser = {
    email: "akshay@gmail.com",
    fullname: {
        firstname: "Akshay",
        lastname: "Devrale"
    }
}
console.log(regularUser.fullname);  // => { firstname: 'Akshay', lastname: 'Devrale' }
console.log(regularUser.fullname.firstname);  // => Akshay


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2}  // => Nested objects
const obj4 = Object.assign({}, obj1,obj2)  // => Merge : explicitly pass {} as the first argument if you want a new object
const obj5 = {...obj1, ...obj2}  // => Spread operator merge : Shorter & more modern syntax.

console.log(obj3);  // => { obj1: {1:"a",2:"b"}, obj2: {3:"a",4:"b"} }
console.log(obj4);  // => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5);  // => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Array of objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    }
]

console.log(users[0].id);  // => 1