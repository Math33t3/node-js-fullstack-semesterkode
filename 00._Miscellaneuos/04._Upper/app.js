import express from "express"; //call to our express package in node_modules
const app = express();

import path from "path";

app.use(express.static("public")); //serves the directory
app.use(express.urlencoded({ extended: true }));

//import jokes from "./util/jokes.js"; //cannot omit extensions in ES
//const jokes = require("./util/jokes");//omitting extensions starts a check, to see if there's any files called joke.js, jokes.json etc.


//import jokes from "./util/jokes.js"; out sentiment check on jokes 
//console.log(await jokes.getJoke);
import getJoke from "./util/jokes.js";


//serverside rendering

import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "UPPER | welcome"
});



const quests = templateEngine.readPage("./public/pages/quests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(quests, {
    tabTitle: "UPPER | IRLQuests"
});

const contact = templateEngine.readPage("./public/pages/contact/contact.html");
const contactPage = templateEngine.renderPage(contact, {
    tabTitle: "UPPER | Contact"
});

//Constructed pages

//const IRLQuests = navbar + IRLQuests + footer;
//const jokesPage = navbar + jokes + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
    //res.sendFile(path.resolve("public","pages","quests", "IRLQuests.html"));
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

/*app.get("/jokes", async (req, res) => {
    const joke = await getJoke();

    const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html")
    .replace("$JOKE", JSON.stringify(joke));
    const jokesPage = templateEngine.renderPage(jokes, {
    tabTitle: "UPPER | jokes",
    cssLink: `<link rel="StyleSheet" href="/pages/jokes/jokes.css"`
});
    res.send(jokesPage);
});*/

app.get("/jokes" , async (req, res) => {
    const jokespage = templateEngine.renderJokePage();
    res.send();
});

/* API */

app.post("/api/contact", (req, res) => {
    console.log(req.body)

    res.send(req.body);
});



if (process.env.ENV = "DEV"){
    //Setup dev
}

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port " + PORT);
})

