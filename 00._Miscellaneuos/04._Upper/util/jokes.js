/*import jokes from "./jokes.json" assert {type: "json" };
console.log(jokes);*/
import Sentiment from "sentiment";
const sentiment = new Sentiment();

/*fetch ("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religios,political,racist,sexist,explicit")
.then(response => response.json())
.then(result => {
    console.log(result);
});*/

async function getJoke() {
    const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religios,political,racist,sexist,explicit";
    const response = await fetch(URL);
    const result = await response.json();
    
    const jokeToAnalyze = result.joke || `${result.setup} ${result.setup}`;
    const { score } = sentiment.analyze(jokeToAnalyze);
    if (score < 0){
        return await getJoke();
    };
    return result;
}; 
//console.log(await getJoke());
// getJoke()

export default getJoke;