const marvel_Heros = ["SPIDER MAN", "IRON MAN", "THOR"] //Array1
const DC_HEROS = ["SUPER HERO", "FLASH", "BATMAN"] //Array2

marvel_Heros.push(DC_HEROS) // This will merge the both array but there will be a another array inside parent array.
console.log(marvel_Heros); //this will print the final array.
/*
Output
["SPIDER MAN", "IRON MAN", "THOR" ["SUPER HERO", "FLASH", "BATMAN"]]
but we don't need array inside array.
*/
console.log(marvel_Heros[3][2]); // Accessing array inside array. 
console.log(marvel_Heros[3].indexOf("BATMAN")); // Try to know the index value of Array inside array using ITEM.

// that's why we use concat() method
let allHeros = marvel_Heros.concat(DC_HEROS)
console.log(allHeros);
/* 
OUTPUT: 
[ 'SPIDER MAN', 'IRON MAN', 'THOR', 'SUPER HERO', 'FLASH', 'BATMAN' ] 
*/

// flat() method
const another_array = [1,2,3,4,[5,6,7], [8,9,10,[11,12,13]]]
const real_array = another_array.flat(Infinity) //Infinity means depth of the array you want to combine, place of infinity you can give some number. 
console.log(real_array);
/*
Output : 
[1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13]
*/

// isArray() method
let checkThisStringIsArray = Array.isArray('Mandeep') //this will check whether the given input is Array or not?
console.log(checkThisStringIsArray); 
//Output : false {ye array nahi hai}

let convertStringToArray = Array.from('MANDEEP') //this will convert your given input to Array.
console.log(convertStringToArray);
// Output : ['M','A', 'N', 'D', 'E', 'E', 'P']

let makeArrayFromObject = Array.from({username : "NEXOCY"}) //interesting thing you will have tell it whether you want to make array from "Key" or "Value"
console.log(makeArrayFromObject); //this will return [] empty array because ye confuse hai array kis cheez ka banaye "key" ka ya phir "value" ka.

//Instead of using this you can use Array.of() method
const score1 = 100
const score2 = 200
const score3 = 400

let combinedTheseAllVariableInArray = Array.of(score1, score2, score3)
console.log(combinedTheseAllVariableInArray); //this will give array of all above variables.
//Output : [100, 200, 400]