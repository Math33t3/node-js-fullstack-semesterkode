const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const birds = [
    { id: 1, name: "Swan", color: "white" }, { id: 2, name: "Peacock", color: "many" }
    , { id: 3, name: "Crow", color: "black" }, { id: 4, name: "Raven", color: "black" }
];

app.get("/birds", (req, res) => {
    res.send({ data: birds });
});

app.get("/birds/:id", (req, res) => {
    const foundBird = birds.find(bird => bird.id === Number(req.params.id));

    res.send({ data: foundBird });
});

//our create endpoint
app.post("/birds", (req, res) => {
    const newBird = {
        id: birds[birds.length - 1].id + 1, //should take deleting into account.
        name: req.body.name,
        color: req.body.color
    };
    birds.push(newBird);
    res.send('New Bird created')
});

//Our update endpoint
app.put("/birds/:id", (req, res) => {
    const idOfBird = parseInt(req.params.id);
    const ourBird = birds.find(r => r.id === idOfBird);

    if (!ourBird) {
        return res.status(404).send('Bird not found');
    }

    ourBird.name = req.body.name;
    ourBird.color = req.body.color;

    res.send('The chosen bird has been updated');
});

//our Delete endpoint
app.delete("/birds/:id", (req, res) => {
    const idOfBirdToDelete = parseInt(req.params.id);
    //const birdsWithoutDeleted = birds.filter(ourBird => ourBird.id !== idOfBirdToDelete);
    const birdToDelete = birds.findIndex(bird => bird.id === idOfBirdToDelete);
    if (birdToDelete === -1) {
        res.status(404).json({ error: 'chosen bird not found'});
    } else {
        birds.splice(birdToDelete, 1);
        res.send('you have deleted the bird');
    }

    console.log(idOfBirdToDelete);
    console.log(birdToDelete);
    //birds = birdsWithoutDeleted;
    
});


app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});
