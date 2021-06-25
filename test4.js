const userInput = document.getElementById("search");
const show = document.getElementById("results");

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

async function getCharacter(url) {
    const response = await fetch(url);
    const data = await response.json();

    return {
        drinks = data.drinks
    }
}

