/* task 

fetch tanks
console log tanks

bonus: add them to our tanks-wrapper div
*/






const tanksURL = "/api/tanks"

fetch(tanksURL)
    .then(response => { response.json() })
    .then(result => {
        const tanksWrapperDiv = document.getElementById("tanks-wrapper");

        result.data.forEach(tank => {
            const tankDiv = document.createElement("div");

            const tankNameP = document.createElement("p");
            tankNameP.innerText = tank.name || "no name";
            const tankNationalityP = document.createElement("p")
            tankNationalityP.innerText = tank.nationality || "no nationailty";

            tankDiv.appendChild(tankNameP);
            tankDiv.appendChild(tankNationalityP);

            const breakBr = document.createElement("br");
            tankDiv.appendChild(breakBr);

            tanksWrapperDiv.appendChild(tankDiv);

        })

    })






