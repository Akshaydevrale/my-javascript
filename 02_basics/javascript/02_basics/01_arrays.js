// array

const myArr = [10, 20, 30, 40, 50, 60]  
console.log(myArr[0]);  // => prints 0 element : 10

const myHeros = ["shakitman", "spiderman", "batman"]  
console.log(myHeros[0]);  // => prints 0 element : shaktiman

const myArr2 = new Array(1,2,3,4)  // => Another way to create an array is using the new Array()

// Array methods

myArr.push(70)  // => Adds 70 to the end [10, 20, 30, 40, 50, 60, 70]

myArr.pop()  // => Removes the last element [10, 20, 30, 40, 50, 60]

myArr.unshift(9)  // => Add 9 to the start [9,10, 20, 30, 40, 50, 60]

myArr.shift(9)  // => Removes 9 from the start [10, 20, 30, 40, 50, 60]

console.log(myArr.includes(50));  // => true (checks if 50 is present)

console.log(myArr.indexOf(50));  // => index of 50 are 4
console.log(myArr.indexOf(2));  // => if number is not in array it always gives -1

const newArr = myArr.join()  // => Joins array elements into a single string "10,20,30,40,50,60"

console.log(typeof newArr);  // => string (join() always returns string)

// slice, splice

// const myArr = [10, 20, 30, 40, 50, 60]  

console.log("A ", myArr);  // => Original array [10, 20, 30, 40, 50, 60]
const myn1 = myArr.slice(1, 3)  // => Returns elements from index 1 to 2 (3 is excluded) : [20, 30]
console.log(myn1);

console.log("B ", myArr);  // => Original array is NOT changed [10, 20, 30, 40, 50, 60]
const myn2 = myArr.splice(1, 3)  // => Returns 3 elements starting from index 1 : [20, 30, 40]
console.log(myn2);
