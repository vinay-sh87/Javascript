'use strict'; // prevents us from making common mistakes

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive!");

// const interface = 'Audio'; // reserve word error

//* Functions - piece of code we can use multiple time

function logger() {
    console.log('Code Clean...');
}
logger(); // invoking a function

function fruitProcessor(apples, oranges) { // apples and oranges are parameters
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // return value
}
const output = fruitProcessor(5, 3); // 5 and 3 are arguments
console.log(output);

// function declaration (we can call these type of functions before declaration (hoisting))
function calcAge1(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const age = calcAge1(2006);
console.log(age);

// function expression (functions are values)
const calcAge2 = function (birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const age2 = calcAge2(2010);
console.log(age2);

// Arrow Functions
const sum = (a, b) => a + b;
console.log(sum(34, 6));

const calcAge3 = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const age3 = calcAge3(2000);
console.log(age3);

const minutesToHours = (mins) => mins / 60;
console.log(minutesToHours(500).toFixed(2));

// function calling other functions
const factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
const combination = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
console.log(combination(9, 3));