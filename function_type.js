// 1> Named Function.
function iAmNamedFunction(){
    let finalName = "MANDEEP";
    console.log(finalName);
    return finalName;
}
iAmNamedFunction();

// 2> Named function with parameter.
function argumentsFunction(name, age){
    let Name = name;
    let Age = age;
    const finalDetails = `Name : ${name}\nAge  : ${age}`;
    console.log(finalDetails);
    return finalDetails;
}
argumentsFunction("Mandeep", 20);

// 3> Anonymous Function
const anonymousFunction = function(){
    console.log("I'm Anonymous Function");
    return;
}
anonymousFunction();

// 4> Anonymous Function with parameter
const anonyFunctionWithArguments = function(num1, num2){
    const Addition = num1 + num2;
    console.log(Addition);
    return;
}
anonyFunctionWithArguments(5, 10);

// 5> Arrow Function.
const arrowFunction = () => {
    console.log("I'm Arrow Function with no Parameters");
}
arrowFunction();

// 6> Arrow Function with Single Parameter 
//  Single Parameter Function cannot be covered with braces as parameter just like (number) is number simply. 
const singleParameterArrowFunct = number => {
    let squareOfGivenNumber = number * number;
    console.log(squareOfGivenNumber);
}
singleParameterArrowFunct(10);

// 7> Arrow Function with Multiple Paramaters.
const arrowFunctionWithMultipleParameter = (fname, lname) => {
    let firstName = fname;
    let lastName = lname;
    let finalName = `This is me "${fname} ${lname}"`
    console.log(finalName);
}
arrowFunctionWithMultipleParameter("Hello", "Hacker");

// 8> function with unlimitedArgument.
function addAllNumber(...userNumber){
    let Addition = 0;
    for(let number of userNumber){
        Addition = Addition + number;
        console.log(Addition);
    }
    return Addition;
}

addAllNumber(20, 40);

// ------------------------------------------------
// Summary 
// Function Type in JS

/*
1.Named Function
2.Named Function with paramaters
3.Anonymous Function.
4.Anonymous Function with Arguments.
5.Arrow Function. 
6.Arrow Function with single arguments.
7.Arrow Function with multiple Arguments.
8.Function with Unlimited Arguments using Spread Operator(...)
*/
// --------------------------------------------------