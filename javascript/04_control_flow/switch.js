//-------------------------------- switch---------------------------------------


// The switch takes the value of month and checks it against each case using strict equality (===).
// If it finds a match, that code runs.
// break stops it from running further cases.
// Without break, it keeps running the next ones (fall-through).
// If nothing matches, the default block runs.


const month = 3
switch (month) {  // => Switch will check the value of 'month'
    case 1:
        console.log("January");  // => If month === 1 print : January
        break; 
    case 2:
        console.log("February");  // => If month === 2 print : February
        break; 
    case 3:
        console.log("March");  // => If month === 3 print "March"
        break;   // => Exit the switch (so no fall-through to case 4)
    case 4:
        console.log("April");
        break;

    default:  // => If no cases above matched
        console.log("default case match");  // => Print default message
        break;
}

// => month = 3 Matches case 3. : It prints "March"

// Because of break, the switch stops right there.