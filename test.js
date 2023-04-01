// import the function sum from the app.js file
const { sum, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("1 euro should be 1.206 Dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (3.5 * 1.2).toFixed(2); 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1 Dollar should be 106,583 Yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromDollarToYen(2)

    // if 1 dollars are 106,583 yens, then 2 dollars should be (2 * 106,583)
    const expected = (2 * 106.583).toFixed(2); 
    
    // this is the comparison for the unit test
     expect(yen).toBe(expected); //if 1 dollars are 106,583 yens, then 2 dollars should be (2 * 106,583)
})

test("1 Yen should be 0.0062548866301798 Pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const pounds = fromYenToPound(1)

    // if 1 Yen 0.005 Pounds, then 5.25 Yens should be (5.25 * 0.005)
    const expected = (1 * 0.0062548866301798).toFixed(2); 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); //if 1 Yen is 0.8 Pounds, then 5.25 Yens should be (5.25 * 0.005)
})
