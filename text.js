// var string1 = 'string';
// var string2 = "string";
// var string3 = 'Trace\'s hair is awesome';
// var string4 = "Trace's hair is awesome";
// var string5 = `Trace's hair is awesome`;

// console.log(typeof string5);

// var x = 6
// var string6 = 'I bought ' + x + ' bananas!';
// var string7 = `I bought ${x} bananas!`;

// console.log(string7)

// console.log('Line one\n' + 'Line two');
// console.log(`Line one
// Line two`)

// var a = 5
// var b = 10
// console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.')
// console.log(`Fifteen is ${a + b} and
// not ${2*a+b}`)

// var classes = 'header';
// classes += (isLargeScreen() ? '' : item.isCollapsed ? ' icon-expander' : 'icon-collapser')

// const classes = `header ${isLargeScreen() ? '' : (item.isCollapsed ? 'icon-expander' : 'icon-collapser')}`


class cat {
    constructor(name, weight, tail) {
        this.name = name,
        this.weight = weight,
        this.tail = tail
    }
}

var sansa = new cat('sansa', "30 pounds", true)
var timmy = new cat('timmy', "250 pounds", true)
var ricky = new cat('ricky', "8 pounds", true)

console.log(sansa)
console.log(timmy)
console.log(ricky)