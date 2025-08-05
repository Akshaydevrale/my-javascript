console.log(2 > 1);  //  => true
console.log(2 >= 1);  //  => true
console.log(2 < 1);  //  => false
console.log(2 <= 1);  //  => false
console.log(2 == 1);  //  => false
console.log(2 != 1);  //  => true

console.log("1" > 1);  //  => false
console.log("2" > 1);  //  => true
console.log(1 > 1);  // => false
console.log(2 > 1);  // => true

console.log(null > 0);  //here null is considered as 0 => false
console.log(null == 0);  //here null is only loosely equal to undefined => false
console.log(undefined == 0); //every time we compare undifined value => false
console.log(null >= 0);  //here null is considered as 0 => true

