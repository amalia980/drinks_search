const userInput = document.getElementById("search");
const show = document.getElementById("results");

//userInput = userInput.value;


userInput.addEventListener("keyup", function(e) {
    e.preventDefault();

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {
        show.innerHTML = `<img src="${data.drinks}"/>`
    }
    );

});


        

//{show.innerHTML = `<img src="${data.strImageSource}"/>`}

/*
0:
dateModified: "2015-08-18 14:42:59"
idDrink: "11007"
strAlcoholic: "Alcoholic"
strCategory: "Ordinary Drink"
strCreativeCommonsConfirmed: "Yes"
strDrink: "Margarita"
strDrinkAlternate: null
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
strGlass: "Cocktail glass"
strIBA: "Contemporary Classics"
strImageAttribution: "Cocktailmarler"
strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg"
strIngredient1: "Tequila"
strIngredient2: "Triple sec"
strIngredient3: "Lime juice"
strIngredient4: "Salt"
strIngredient5: null
strIngredient6: null
strIngredient7: null
strIngredient8: null
strIngredient9: null
strIngredient10: null
strIngredient11: null
strIngredient12: null
strIngredient13: null
strIngredient14: null
strIngredient15: null
strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben."
strInstructionsES: null
strInstructionsFR: null
strInstructionsIT: "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere."
strInstructionsZH-HANS: null
strInstructionsZH-HANT: null
strMeasure1: "1 1/2 oz "
strMeasure2: "1/2 oz "
strMeasure3: "1 oz "
strMeasure4: null
strMeasure5: null
strMeasure6: null
strMeasure7: null
strMeasure8: null
strMeasure9: null
strMeasure10: null
strMeasure11: null
strMeasure12: null
strMeasure13: null
strMeasure14: null
strMeasure15: null
strTags: "IBA,ContemporaryClassic"
strVideo: null
__proto__: Object
1: {idDrink: "11118", strDrink: "Blue Margarita", strDrinkAlternate: null, strTags: null, strVideo: null, …}
2: {idDrink: "17216", strDrink: "Tommy's Margarita", strDrinkAlternate: null, strTags: "IBA,NewEra", strVideo: null, …}
3: {idDrink: "16158", strDrink: "Whitecap Margarita", strDrinkAlternate: null, strTags: null, strVideo: null, …}
4: {idDrink: "12322", strDrink: "Strawberry Margarita", strDrinkAlternate: null, strTags: null, strVideo: null, …}
5: {idDrink: "178332", strDrink: "Smashed Watermelon Margarita", strDrinkAlternate: null, strTags: null, strVideo: null, …}
length: 6
*/