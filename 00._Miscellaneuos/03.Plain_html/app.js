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

app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/guards/museumGuards.html")
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
});

app.get("/proxy", (req, res) => {
    fetch("https://google.com")
    .then(response => response.text())
    .then(result => res.send(result));
});




//our APIs
import visitorsRouter from "./routers/visitorsRouter.js";
app.use(visitorsRouter);
import tanksRouter from "./routers/tankRouter.js";
app.use(tanksRouter);
import guardRouter from "./routers/guardsRouter.js";
app.use(guardRouter);




//send data as client
//pathvariable, or queryString

//server side redirection

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

