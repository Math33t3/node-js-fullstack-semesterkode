import express from "express"; //call to our express package in node_modules
const app = express();

import path from "path";

//app.use(express.static("public")); //serves the directory

//import jokes from "./util/jokes.js"; //cannot omit extensions in ES

//const jokes = require("./util/jokes");//omitting extensions starts a check, to see if there's any files called joke.js, jokes.json etc.

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/quests/IRLQuests.html"));
    //res.sendFile(path.resolve("public","pages","quests", "IRLQuests.html"));
});












const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port " + PORT);
})

