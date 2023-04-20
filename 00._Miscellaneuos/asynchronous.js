/*
Why: Because Javascript is single-threaded. 

Examples:
fetching over a network
many / Heavy calculation
Cryptographic functions
Reading / Writing to files
Databases
*/

/* solution 1: Callbacks
Con: Callback Hell, Pyramid of Doom
*/

/* solution 2: Promises

Two states:
-Pending
-Fulfilled
    -Rejected
    -Resolved

*/


/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
            throw Error;
            resolve("Yaaaay!")
        } catch {
            reject("Naaaay!")
        }
    }, 3000);
})
.then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage));*/


function celebrate(name) {
    return new Promise((resolve, reject) => {
        if(name) {
            resolve(`Banzai!  ${name}, Banzai!`);
        } else {
            reject(`Bruuh`)
        }
        
    });
};
celebrate("Hans")
.then(celebrationMessage => console.log(celebrationMessage));

function somethingGoodSomethingBad(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            try {
                resolve("YAW!")
            } catch {
                reject("NAW!")
            }
        })
        }, 3000)
};
somethingGoodSomethingBad()
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));


//IIFE
(async function getGoodOrBadMessage() {
    const somethingGoodSomethingBadMessage =  await somethingGoodSomethingBad();
    console.log(somethingGoodSomethingBadMessage);
})()


