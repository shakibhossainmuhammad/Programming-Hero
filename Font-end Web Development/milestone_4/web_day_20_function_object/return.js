function add(number1, number2){
    console.log(number1, number2)
    var sum = number1 + number2;
    // console.log(sum)
    return sum;
}

// add(45, 15);

var total = add(80, 20);
// console.log('total', total)

function bringSingara(money){
    var singaraPrice = 10;
    var quantiry = money / singaraPrice;
    return quantiry;
}
var myTaka = 150;
var singaras  = bringSingara(myTaka)
console.log('Eating singra: ', singaras)