// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar/1.2*127.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen/127.9*0.8;
    return valueInPound;
}


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }