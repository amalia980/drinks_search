const userInput = document.getElementById("search");
const show = document.getElementById("results");

let myDrinks = [];

userInput.addEventListener("keyup", (e) => {
        const searchString = e.target.value;
        const filteredDrinks = myDrinks.filter((theDrink) => {
        return (
            theDrink.strImageSource.includes(searchString)
        );
    });
    displayDrinks(filteredDrinks);
});

const loadDrinks = async () => {
    try {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        myDrinks = await res.json();
        displayDrinks(myDrinks);
        //console.log(DRINKS);
    }
    catch (err) {
        console.error(err);
    }
};

const displayDrinks = (theDrinks) => {
    const htmlString = theDrinks
        .map((theDrink) => {
        return `<img src="${theDrink.drinks[11]}"`;
    })
    .join('');
    show.innerHTML = htmlString;
};

loadDrinks();