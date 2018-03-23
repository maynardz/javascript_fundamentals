function addTwoNumbers(a, b) {
    console.log(a + b);
    return a + b;
}

addTwoNumbers(10, 5)

////////////////////////////////

var goldBadge = 'golden'

goldBadge = true

console.log(`Did we just complete gold badge? ${goldBadge}.`)

///////////////////////////////

for (var i=1; i<=100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
