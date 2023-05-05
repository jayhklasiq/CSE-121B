/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add (number1, number2){
// Step 2: In the function, return the sum of the parameters number1 and number2
    return (number1) + (number2);
}

// S Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    const addend1 = parseInt(document.getElementById("addend1").value);
    const addend2 = parseInt(document.getElementById("addend2").value);
    let sum = subtract(minuend, subtrahend);
    return sum
}
// Step 4: Assign the return value to an HTML form element with an ID of sum
document.getElementById("sum").innerHTML = addNumbers().value;
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
addEventListener ("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return number1 - number2;
}
function subtractNumbers(){
    const minuend = parseInt(document.getElementById("minuend").value);
    const subtrahend = parseInt(document.getElementById("subtrahend").value);
    let minus = subtract(minuend, subtrahend);
    return minus;
}
document.getElementById("difference").innerHTML = subtractNumbers().value;
addEventListener ("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2;


const multiplyNumbers = () => {
    const factor1 = parseInt(document.getElementById("factor1").value);
    const factor2 = parseInt(document.getElementById("factor2").value);
    let solution = multiply(factor1, factor2)
    return solution
}
document.getElementById("product").innerHTML = multiplyNumbers();
addEventListener ("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number1, number2) => number1 / number2;


const divideNumbers = () => {
    const factor1 = parseInt(document.getElementById("dividend").value);
    const factor2 = parseInt(document.getElementById("divisor").value);
    let solution = multiply(factor1, factor2)
    return solution
}
document.getElementById("quotient").innerHTML = divideNumbers();
addEventListener ("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let year = 0;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerText = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numberTray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numberTray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNumbers = numberTray.filter(function(number){
    return number % 2 !== 0;
})
document.getElementById("odds").innerHTML = oddNumbers;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const even = numberTray.filter(function(number){
    return number % 2 === 0;
})
document.getElementById("evens").innerHTML = even;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numberTray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfArray").innerText = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiplied = numberTray.map(num => num * 2);
document.getElementById("multiplied").innerText = multiplied;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = numberTray.map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfMultiplied").innerText = sumOfMultiplied;