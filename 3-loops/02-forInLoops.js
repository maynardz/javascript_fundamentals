// For in loops

// var student = {
//     name: "Peter",
//     awesome: true,
//     degree: "Javascript",
//     week: 1
// };

// for (var item in student) {
//     console.log(student[item])
// }

var studentName = 'zach';
var capSN = '';

for (var n in studentName) {
    if (n == 0) {
        capSN = studentName[n].toUpperCase()
    } else {
        capSN += studentName[n].toLowerCase();
    }
}

console.log(capSN)