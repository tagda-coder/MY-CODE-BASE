const { log } = require("console");

const marvel_Heros = ["SPIDER MAN", "IRON MAN", "THOR"] //Array1
const DC_HEROS = ["SUPER HERO", "FLASH", "BATMAN"] //Array2

marvel_Heros.push(DC_HEROS) // This will merge the both array.
console.log(marvel_Heros); //this will print the final array.
console.log(marvel_Heros[3][2]); // Accessing array inside array. 
console.log(marvel_Heros[3].indexOf("BATMAN")); // Try to know the index value of Array inside array using ITEM.
