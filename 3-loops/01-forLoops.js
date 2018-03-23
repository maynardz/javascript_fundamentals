// For loops

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 0; i <= 20; i+=2) {
//     console.log(i);
// }

// var name = 'Kenn'

// for (var i = 0; i < name.length; i++) {
//     console.log(name[i])
// }


// Use a for loop to iterate over a name
// BUT in reverse

// var name = 'Zach'

// for (var i = name.length -1; i >= 0; i--) {
//     console.log(name[i]);
// }


// let total = 0;

// for (let i = 1; i <= 50; i++) {
//     total += i;
// }

// console.log(total);


for (var i=1; i <=100; i++) {
    
    if (i % 15 == 0)
    console.log("Fizzbuzz");
    else if (i % 5 == 0)
    console.log("Buzz");
    else if (i % 3 == 0)
    console.log("Fizz");
    else 
    console.log(i);
}


// for (i=0;i<100;) console.log((++i%3?'':'Fizz') + (i%5?'':'Buzz')||i)


// const strawberries = {
//     quantity: 6,
//     price: .89,
//     weight: .45
// }
// const bananas = {
//     quantity: 6,
//     price: 1.45
// }
// const pancakeMix = {
//     quantity: 1,
//     price: 3.25
// }
// const syrup = {
//     quantity: 1,
//     price: 2.89
// }

// function groceryList() {
//     let total = bananas.price + pancakeMix.price + syrup.price;
//     console.log(total);
//     return total;
// }

// groceryList();

// function strawberryWeight() {
//     let strawberryPriceByWeight = strawberries.weight * strawberries.quantity * strawberries.price
//     console.log(strawberryPriceByWeight);
//     return strawberryPriceByWeight
// }

// strawberryWeight();


