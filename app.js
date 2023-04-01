// just some fixing to not round numbers
// when truncating number of digits after decimal point
// thanks to Labeeb Latif @ labeebklatif.medium.com
// Number.prototype.toFixedNoRound = function (precision = 1) {
//     const factor = Math.pow(10, precision);
//     return Math.floor(this * factor) / factor;
// }

// function getPrecision(num, maxPrecision){
//     let decimalsLength = num.toString().split('.')[1].length;

//     if(decimalsLength == 0) return 0;
//     if(decimalsLength <= maxPrecision) return decimalsLength;
//     else return maxPrecision;
// }

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// number of digits after the decimal point
const dPrecision = 3;

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = (valueInEuro) => {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return (valueInDollar).toFixed(2);
}

const fromDollarToYen =  (valueInDollar) => {
    let valueInYen = valueInDollar / oneEuroIs.USD * oneEuroIs.JPY;
    return (valueInYen).toFixed(2);
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen / oneEuroIs.JPY * oneEuroIs.GBP;
    console.log(valueInPound);
    return (valueInPound).toFixed(2);    
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }