// answer  this question 
// console.log("2" == 2); //Non strict 

let userID = "";
let userId = null;

let same = (userID == userId);
console.log(typeof same);
// two category : 
// Primitive Data Types : 
// String, Number, Boolean, null undefined BigInt Symbol

// Non primitive data types :
// Array  
// function 
// object  

let score = 100;
let stringScore = String(score);
// console.log(typeof stringScore);


let userEmail = "abcd@gmail.com"
const userPassword = 1235445
const userAge = 18

let types = console.log([userEmail, userAge, userPassword]);
// console.log(typeof(types));

let veg = ["Potato", "Onion", "PEA"]
console.log(veg.at(0)); //to find items by their index
console.log(veg.indexOf("PEA")); //to find index value
// console.log(typeof(veg));

let func = function myFunction() {
    userInfo = "mandeep"
}
console.log(typeof (func));