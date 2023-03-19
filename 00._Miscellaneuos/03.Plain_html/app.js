const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.static("public"));


const { getTanks, addTank } = require("./util/tanks.js");

const visitors = 0;
//our pages 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/Frontpage/frontpage.html");
    //res.sendFile("C:/Users/MCB_B/Node/node-js-fullstack-semesterkode/00._Miscellaneuos/03.Plain_html/frontpage.html")
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});


app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
});

app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/guards/museumGuards.html")
});

app.get("/proxy", (req, res) => {
    fetch("https://google.com")
    .then(response => response.text())
    .then(result => res.send(result));
});




//our APIs

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks })
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount })
});

//send data as client
//pathvariable, or queryString

//server side redirection
app.get("api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
        return res.redirect("/api/tanks")
    }
    res.send({ message: "You aren't allowed to see the tanks. Give us the correct secret password" });
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

