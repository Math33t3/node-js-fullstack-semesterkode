//Const Rule 1 Have to assign a value when declaring
//const me;

const me = {
    /* key: value
    === key-value pairs  
*/
    name: "Hans"
};
// Const Rule 2: me={}; kan ikke reassign en const.
me.name = "Johannes";

const hobbies = ["Football", "Swimming"];
hobbies.push("Cooking");
me.hobbies = hobbies;
console.log(me);


const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbyThree =`Cooking skill level: "'${2+2}'"`; //backticks gør det muligt at lave string literals
console.log(hobbyThree)