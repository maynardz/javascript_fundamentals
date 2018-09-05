var weather = 75;

if (weather <= 70) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary!');
}

var name = 'zach'

if (name[0] == name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log(name[0].toUpperCase() + name.slice(1));
}

// Else if statements

var age = 19

if (age <= 17) {
    console.log('Sorry, you are too young to do anything.');
} else if (age >= 18 && age < 21) {
    console.log('Yay! You can vote!');
} else if (age >= 21 && age < 25) {
    console.log('Yay! You can drink!');
} else if (age >= 25) {
    console.log('Yay! You can rent a car!');
}

//Start old, work young to minimize typing

var x = false;

if (typeof x === 'string') {
    console.log('String cheese');
} else if (typeof x === 'number') {
    console.log('Numbers are cool');
} else if (typeof x === 'boolean') {
    console.log('Truthiness');
}