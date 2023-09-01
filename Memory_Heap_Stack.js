// Stack Memory (Primitive Data Types) 
// Heap Memory (Non-Primitive Data Types)

// 1.Stack
let myYoutubeName = "tagdacoder"
let anotherName = myYoutubeName
anotherName = "HackTheBox"
console.log(anotherName);
console.log(myYoutubeName); 
// primitive types always give you copy of the reference not the real value.

// 2.Heap Memory
let userOne = {
    email : "mathematicalprogram@gmail.com",
    upi : "9199731523@ybl"
}
let userTwo = userOne
userTwo.email = "tagdacoder@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// both emails will be same because Non-Primitive Data Types always give 
// the real value of the reference .

