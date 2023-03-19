
//const questsDiv = document.getElementById("quest"); //keep in scope to reduce memory

fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(result => {
        document.getElementById("quest").innerText = result.activity
    });