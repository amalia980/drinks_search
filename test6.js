const userInput = document.getElementById("search");
const show = document.getElementById("results");

let theDrinks = [];

userInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredDrinks = theDrinks.filter((data) => {
        return (
            data.drinks[0].strDrinkThumb.toLowerCase().includes(searchString)
        );
    });
    displayDrinks(filteredDrinks);
});

const loadDrinks = async () => {
    try {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        theDrinks = await res.json();
        displayDrinks(theDrinks);
    } catch (err) {
        console.error(err);
    }
};

const displayDrinks = (drinks) => {
    const htmlString = drinks.map((data) => {
            return `
                <h2>${data.drinks[0].strDrink}</h2>
                <img src="${data.drinks[0].strDrinkThumb}"></img>
        `;
        })
        .join('');
    show.innerHTML = htmlString;
};

loadDrinks();



/* HIS -- MINE
the results are displayed in this
charactersList = show

characters = theDrinks

character = theDrink

hpCharacters = myDrinks
*/