// //Ternaries

// var x = 6;


// if (x > 0) {
//     console.log('yay');
// } else {
//     console.log('nay');
// }

// //Ternary operators
// var x = 2

// var yay = (x == 0) ? "hello" : (x < 0) ? "hi" : "goodbye";
// console.log(yay);


// var age = 22
// var ternAge = (age >= 25) ? "Yay, you can rent a car!" : (age >= 21) ? "Yay! You can drink!" : (age >= 18) ? "Yay! You can vote!" : "Sorry, you're too young to do anything fun.";
// console.log(ternAge)

var x = 5
var y = typeof x
var ternVar = (y === 'string') ? "String cheese" : (y === "boolean") ? "Truthiness" : (y === "number") ? "Numbers are cool" : "Other data type"
console.log(ternVar);