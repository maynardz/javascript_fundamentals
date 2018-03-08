// Hoisting

// JS puts variables and functions at the top of your code, it stores the vars and funcs before it runs them. 
// Left side - right side. Pulls left side before variables and functions are declared and stores them away, 'hoisting' them to the top of your code.

// x = 5;

// console.log(x);

// var x; 

// x = 5;
// y = 10;

// console.log(x + y);

console.log(first());

var second = function() {
    return 'Did not get hoisted';
}
function first() {
    return 'Just got hoisted!'
}
console.log(second());

//var second did not get hoisted because of the assigment operator. "Return: did not get hoisted" is to the right of the assignment operator, 
// so it did not get hoisted with the left side. 