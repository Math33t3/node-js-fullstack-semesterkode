const express = require("express");
const app = express();  


//making some mock birds for our api
const birds = [{name: "Swan", id: "1"}, {name: "Peacock", id: "2"}
,{name: "Crow", id: "3"}, {name: "Raven", id: "4"}];


app.get("/birds", (req, res) => {
    res.send(birds);
});


app.get( "/birds/:id", (req, res) => {
    //Making the response and error message.
    const bird = birds.find(bird => bird.id === req.params.id);
    console.log(req.params);
    if (!bird) {
        res.status(404).send("Bird not found.");
    } else{
        res.send(bird);
    }
});

//Choosing our port
app.listen(8080);