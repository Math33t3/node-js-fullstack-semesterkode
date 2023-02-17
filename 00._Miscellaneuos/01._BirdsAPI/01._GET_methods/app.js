const express = require("express");
const app = express();  


//making some mock birds for our api
const birds = [{name: "Swan", id: "1"}, {name: "Peacock", id: "2"}
,{name: "Crow", id: "3"}, {name: "Raven", id: "4"}];

//making our first endpoint
app.get("/birds", (req, res) => {
    res.send({data: birds});
});


app.get( "/birds/:id", (req, res) => {
    const bird = birds.find(bird => bird.id === Number(req.params.id));
    console.log(req.params);
    //reg.params - to get the parameters - reg.params.id fx.
    //Making the response and error message.
    if (!bird) {
        res.status(404).send("Your bird was not found.");
    } else{
        res.send({data: bird});
    }
});

//Choosing our port
app.listen(8080);