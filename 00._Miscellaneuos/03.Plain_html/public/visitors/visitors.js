



fetch("api/visitors").then(response => {response.json() })
.then(result => {
    updateVisitorCount(result.data);
})

function updateVisitorCount(visitorCount){
    const visitorDiv = document.getElementById("visitor-count")
    visitorCountDiv.innerText = visitorCount;
}


function writeInVisitorLog(){
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-Type": "aplication/json"
        }
    })
    .then(response => response.json())
    .then(result => updateVisitorCount(result.data));
}