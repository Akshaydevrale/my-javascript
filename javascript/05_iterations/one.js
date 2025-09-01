// ------------------------- for loop ----------------------------

//basic for loop
for (let index = 0; index <= 10; index++) {
    // index starts from 0 runs until index <= 10 increases by 1 each time
    const element = index;
    console.log(element);  // => print current value of index

    if(element == 5){
        console.log("5 is best number");  // special message when index = 5
    }
    console.log(element);  // prints index again
}


// ------------------- Nested for loops -------------------

// Used when we need loops inside loops
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);  // prints outer loop count

    for (let j = 1; j <= 10; j++) {
        // here j runs fully for each i so (i*j) builds multiplication table
        console.log(i + '*' + j + ' = ' + i*j );  
    }
}


// ------------------- Looping through arrays -------------------

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);  // array length = 3

for (let index = 0; index < myArray.length; index++) {
    // loop goes from 0 to 2 (3 elements)
    const element = myArray[index]; // access each element using index
    console.log(element); // prints flash, batman, superman
}


// ---------------------- break and continue ---------------------

// break = stop the loop completely when condition matches
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        break   // loop ends here no further numbers checked
    }
    console.log(`Value of index is ${index}`);
}


// continue = skip the current iteration, but keep looping
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue  // skip printing 5 but loop continues with 6,7,8
    }
    console.log(`Value of index is ${index}`);
}
