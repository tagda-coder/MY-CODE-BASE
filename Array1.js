const myArray = [1,2,3,4,5,6]
// console.log(myArray);
const mySuperHero = ["IRON MAN", "THOR", "SPIDER MAN", "BATMAN"]
// ARRAY METHODS
console.log(mySuperHero.length); //you can see the length of the array. 
console.log(mySuperHero[2]); //you can check any item by indexing.
console.log(mySuperHero.indexOf("BATMAN")); // Check the indexing value of any item by indexof method.
console.log(mySuperHero.push("HERON","NEBULA",2023)); //Adding items through push method.
console.log(mySuperHero.pop()); // this will remove the last element of the array.
console.log(mySuperHero.unshift(2024)); // this will add the items at first position of the array.
console.log(mySuperHero.shift()); // this will remove the first items of the array.
console.log(mySuperHero.includes("IRON MAN")); // This will help you to find the items in the array exist or not.

console.log(mySuperHero);
const newArray = mySuperHero.join() //this will join the all elements of "mySuperHero" Array to "newArray"
// and datatype will be changed into string. 
console.log(newArray);
console.log(typeof(newArray));

// slice, splice

// In JavaScript, splice() and slice() are two array methods that serve different purposes when it comes to manipulating arrays:

// 1. splice() Method:

// Purpose: The splice() method is used to change the contents of an array by removing, replacing, or adding elements at a specific index.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array. If set to 0, no elements are removed.
// item1, item2, ...: Elements to add to the array at the start index.
// Modifies the original array.
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'kiwi'); // Removes 'banana' and adds 'kiwi' at index 1
// Resulting array: ['apple', 'kiwi', 'cherry']


console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2);

// 2.slice() Method:

// Purpose: The slice() method is used to create a shallow copy of a portion of an array into a new array. It does not modify the original array.
// Syntax: array.slice(start, end)
// start: The index at which to begin extraction (inclusive).
// end: The index at which to stop extraction (exclusive). If omitted, it extracts to the end of the array.
// Returns a new array containing the selected elements.

const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4); // Extracts elements at indices 1, 2, and 3
// Resulting array: [2, 3, 4]

// In summary, splice() is used for modifying the 
// original array by adding, removing, or
//  replacing elements at specific positions, 

// while slice() is used to create a new array containing
//  a portion of the original array without modifying it. 
// Understanding the differences between these two methods is 
// crucial when working with arrays in JavaScript.