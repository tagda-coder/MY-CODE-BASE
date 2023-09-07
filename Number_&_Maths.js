const { log, clear } = require("console")

const score = 400
// console.log(score);

const bankBalance = new Number(20000)
// console.log(bankBalance);
// console.log(bankBalance.toString().length)
// console.log(typeof(bankBalance))
// console.log(bankBalance.toFixed(4)) It means 4 digit afte decimal. 
//toFixed() is used to how many digits you want to keep after decimal.


const otherNumber = 123.8966 //Number type 
let precision = otherNumber.toPrecision(4) //precision always return String. 
console.log(typeof precision); //string type.
console.log(precision);
//toPrecision() property is used to how  many total digit you want to keep . 

const Hundreds = 1000000
console.log(Hundreds.toLocaleString()); // by default indian number system.
console.log(Hundreds.toLocaleString('en-US')); //after using this we get the values in INTERNATIONAL NUMBER SYSTEM.

//+++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

console.log(Math); // Maths is Objects Itself 
console.log(Math.abs(-20)); //this will convert this -ve value to +ve. But Not vice-versa okay

console.log(Math.round(450.6)); // Round off real value.
console.log(Math.ceil(4.1)); //this will take upper value of its round figure. return 5
console.log(Math.floor(4.9)); //This will take lower value of its round figure. return 4

console.log(Math.sqrt(100)); //Square Root of given number.

// This will help you to find Square of any Number.
const userInput = 5;
const square = userInput*userInput
console.log(`The square of ${userInput} is ${square}`);

// finding minimum value of an Array
console.log(Math.min(4,5,45,12,96,2));
// finding minimum value of an Array
console.log(Math.max(12,45,89,2,45,63));

console.log(Math.random()); //This will always give you random number b/w 0 to 1:
let randomNum = (Math.random()*10)+1;
console.log(randomNum.toPrecision(1))

// suppose you need random number b/w 10 and 20 ;
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1) + min))

