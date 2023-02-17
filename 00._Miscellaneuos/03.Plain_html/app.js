const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/Frontpage/frontpage.html");
    //res.sendFile("C:/Users/MCB_B/Node/node-js-fullstack-semesterkode/00._Miscellaneuos/03.Plain_html/frontpage.html")
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

