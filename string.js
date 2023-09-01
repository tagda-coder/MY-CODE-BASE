
const name = "Harsh "
const repo = 15

// this is bad way to concatenate the string 
console.log("MY NAME IS" + name + ". and the repo is " + repo );
// this is the best way to concate the string.
console.log(`Hello ${name} Your Total Number of Repository is ${repo}.`);
let gameName = "CALL OF DUTY" 
console.log(gameName[2]);
console.log(gameName.charAt(2));
//both upper lines are same 
console.log(gameName.__proto__);
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('D')); 

// Substring and Slice Method
const anotherString = gameName.substring(0,4)
console.log(anotherString);

const newString = gameName.slice(-8,4)
console.log(newString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim from both side first and last gap both.

// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const url = "https://www.github.com/tagda%20coder"
console.log(url.replace('%20', '-')); //replacer
console.log(url.includes("tagda")); //this will tell you that inside of includes parameter exist or not in your original url.
console.log(gameName.split('-'));

// Take input from user:
const readline = require("readline");
// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = "";
rl.question("what is your name\n", function(string){
    userInput = string;
    console.log(`Your Name is ${userInput}`);
    rl.close();
});




