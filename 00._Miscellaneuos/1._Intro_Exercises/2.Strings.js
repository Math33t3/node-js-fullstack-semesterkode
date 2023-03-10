// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const numberThree = Number(numberOne) + Number(numberTwo);
console.log(numberThree);
// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberThree = Number(anotherNumberOne) + Number(anotherNumberTwo);
const anotherResult = anotherNumberThree.toFixed(2)
console.log(anotherResult);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const averageNumber = (one + two + three) / 3;
console.log(averageNumber.toFixed(5));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
const charC = letters[2];
console.log(charC);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

const replacement = fact.replace(fact.charAt(17),"J");
console.log(replacement);

const replacement2 = fact.replace("j","J");
console.log(replacement2);


// capitalize the J in Javascript


// --------------------------------------



