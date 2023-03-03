const express = require("express");
const app = express();

app.use(express.static("public"));


const { getTanks, addTank} = require("./util/tanks.js");

const visitors = 0;
//our pages 

app.get("/", (req, res) =>{
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

//our APIs

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks})
});

app.get("/api/visitors", (req, res) => {
    res.send({data: visitorCount});
});

app.put("/api/visitors", (req, res) => {
    res.send({data: ++visitorCount})
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

