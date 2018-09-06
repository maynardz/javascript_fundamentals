//EVEN
var arrEven = [1,2,3,4,5,6,7,8,9,10];

function even(a){
  var ar = [];

  for (var i=0; i<a.length;i++){
    if (a[i] % 2 === 0){
      ar.push(a[i]);
    }
  }
return ar;
}

console.log(even(arrEven));

//ODD
var arrOdd = [1,2,3,4,5,6,7,8,9,10];

function odd(a){
    var ar = [];

    for (var i=0; i<a.length; i++){
        if (a[i] % 2 === 1){
        ar.push(a[i]);
    }
}
return ar
}

console.log(odd(arrOdd));