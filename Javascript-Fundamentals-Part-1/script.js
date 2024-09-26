const key = prompt('Enter the key???');
const str = document.getElementById('heading');
if (key == 3) {
    console.log("Welcome!");
    str.innerHTML = 'Welcome!';
} else {
    str.innerHTML = "Key isn't correct";
}

console.log("Ordinary" + "Person");
let firstName = "Vinay"; // camelCase is convention for writing variable names
let lastName = "Sharma";
console.log(firstName);
console.log("Hello, " + firstName);
firstName = "Ashok"; // reassignment 
console.log(firstName);

// **Data types**

// 1. Primitive 
const number = 234;
console.log(typeof number);
const text = "Things move on with or without you!";
console.log(typeof text);
const isAvailable = true;
console.log(typeof isAvailable);
let value;
console.log(typeof value);
const emptyVal = null;
console.log(typeof emptyVal); // object type (issue with js)
const identity = Symbol('#');
console.log(typeof identity);
const biggerValue = 34395445988593275938n;
console.log(typeof biggerValue);

// 2. Non-Primitive
// objects
const superhero = {
    name: "Batman",
    age: 50,
    salary: Infinity,
    job: 'Saving city from bad peoples...',
    'famous quote': 'Men are Brave!'
}
console.log(superhero);
console.log(superhero.name);
superhero.age = 45;
console.log(superhero.age)
console.log(superhero.salary);
console.log(superhero['famous quote']);
superhero['favorite color'] = 'black'; // adding properties
console.log(superhero['favorite color']);

// functions
function greet(name) {
    console.log("Hello " + name + ", Welcome! ");
}
greet('Ben'); // calling function

// arrays
const fruits = ['Apple', 'Banana', 'Mango', 'Watermelon', 'Orange'];
console.log(fruits[0]); // accessing a single element
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // looping through every element
}
fruits.push('Pear');
console.log(fruits);
fruits.pop();
console.log(fruits);

//* String and Template Literals

const name1 = 'John';
const name2 = 'Doe';
const age = 25;
const job = 'Programmer';
const fullName = name1 + ' ' + name2; // string concatenation
const intro = `Hey, my name is ${name1} ${name2}, I'm ${age} years old ${job}.`; // template literal
console.log(intro);

console.log(`We can 
write string 
in multiple lines using 
template literals...`);

//* Conditional Statements

const newAge = 10;
const isOldEnough = newAge >= 18;
if (isOldEnough) {
    console.log('You are old enough to get a driving license 🚗.');
} else {
    const yearsLeft = 18 - newAge;
    console.log('You are not old enough to get a driving license yet ☹️.');
    console.log(`Please, wait for ${yearsLeft} more years...`);
}

//* Type Conversion (what we do) and Coercion (what js does by default)

const inputYear = '1900';
const birthYear = Number(inputYear); // type conversion
console.log(typeof birthYear);
console.log(typeof String(birthYear));

console.log('I am ' + 19 + 'Years ld...'); // type coercion
console.log('23' + '10' + 3);
console.log('23' - '10' - 3); // minus triggers opposite conversion
console.log('25' * '3');
console.log('25' / '3');

let n = '1' + 1; // 11
n = n - 1; // 11 - 1
console.log(n); // 10

//* Truthy and Falsy
// 5 falsy values: 0, '', undefined, null, NaN (these will be converted to false
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('England'));
console.log(Boolean({}));

const money = 0;
if (money) { // js tries to convert it into truthy or falsy value (type coercion)
    console.log("Don't spend it all...");
} else {
    console.log("Go and earn!");
}

let height;
if (height) {
    console.log('Height is defined!');
} else {
    console.log('Height is undefined!');
}

//* Equality Operators
const val1 = 12;
const val2 = '12';
console.log(val1 == val2); // equality (does coercion)
console.log(val1 === val2); // strict equality (doesn't coercion)

const favNumber = Number(prompt("Enter your favorite number?"));
if (favNumber == 45) {
    console.log('45 is an amazing number if you are cricket fan!');
} else if (favNumber === 18) {
    console.log('18 is also an amazing number!');
} else if (favNumber === 10) {
    console.log('10 is also an goated number!');
} else {
    console.log('You have a different taste in numbers!');
}

//* Switch Statement
const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan coding project!');
        break;
    case 'tuesday':
        console.log('Start Designing!');
        break;
    case 'wednesday':
        console.log('Start Coding!');
        break;
    case 'thursday':
        console.log('Last Day of Code!');
        break;
    case 'friday':
        console.log('Host the Project!');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the Weekends!');
        break;
    default:
        console.log('Invalid Day!');
}

//* Ternary Expressions
const hasDrivingLicense = true;
hasDrivingLicense ? console.log('Allowed to Drive a Car...') : console.log('Not allowed');
const val3 = 34;
const val4 = 89;
const largest = val3 >= val4 ? val3 : val4;
console.log(`Largest value from both numbers is ${largest}`);