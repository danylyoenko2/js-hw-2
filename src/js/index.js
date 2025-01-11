// 1 task

const celsius = 25;
const fahrenheit = celsius * 1.8 + 32;

console.log("Fahrenheit: " + fahrenheit);

// 2 task

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = daysInMonth * (hoursInMonth * 60);

console.log("Days per month: " + daysInMonth + " days");
console.log("Hours per month: " + hoursInMonth + "h");
console.log("Minutes per month: " + minutesInMonth + "min");

// 3 task

let health = 100;
let energy = 100;

console.log("Your hp was reduce to: " + (health - 10) + " hp");
console.log("Your energy was reduce to: " + (energy - 15) + " energy");

// 4 task

const totalPrice = 34550;
const discount = 15;

const discountedPrice = totalPrice - (totalPrice * discount) / 100;

console.log("Final price: " + discountedPrice + " crd");

// 5 task

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);

console.log("Your rounded number: " + roundedDown);

// 6 task

const floatString = "45.67";
const parsedFloat = Number.parseFloat(floatString);

console.log(
  "Parsed string to float: " + parsedFloat + ", type: " + typeof parsedFloat
);

// 7 task

const intString = "123";
const parsedInt = Number.parseInt(intString);

console.log(
  "Parsed string to int: " + parsedInt + ", type: " + typeof parsedInt
);

// 8 task

const number = 49;
const sqrtNumber = Math.sqrt(number);

console.log("Sqrt number: " + sqrtNumber);

// 9 task

const integer = 42;
const stringNumber = "256";

const convertedString = integer.toString();
const convertedInt = Number.parseInt(stringNumber);

console.log(
  "String to integer: " + convertedInt + ", type: " + typeof convertedInt
);

console.log(
  "Integer to string: " + convertedString + ", type: " + typeof convertedString
);
