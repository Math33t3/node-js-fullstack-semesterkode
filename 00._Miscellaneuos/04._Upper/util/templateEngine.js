import fs from "fs";
import getJoke from "./jokes.js";
import escape from "escape-html"; //sanitizing our input from the api, to prevent cross-site-scripting

//ternary statements -- good to know

function renderPage(page, config = {}) {

    //components
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "UPPER")
                    .replace("$CSS_LINK", config.cssLink || "");
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

    
    return navbar + page + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
};

async function renderJokePage() {
    const path = "./public/pages/jokes/jokes.html";
    let jokePage = readPage(path);
    joke = await getJoke();
    if (joke.joke) {
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", `<h3>${escape.joke.joke}</h3>`)
    } else if(joke.setup && joke.delivery) {
        const jokehtmlContent = `
            <h3>${escape.joke.setup}</h3>
            <h3>${escape.joke.delivery}</h3>
        `

    } else {
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", "<h3>no jokes for you brah</h3>");
    };

    const constructedPage = renderPage(jokePage, {
        tabTitle: "UPPER | jokes",
        cssLink: `<link rel="StyleSheet" href="/pages/jokes/jokes.css"`
    });
    return constructedPage
};


export default {
    renderPage,
    readPage,
    renderJokePage
}