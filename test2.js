const userInput = document.getElementById("search");
const show = document.getElementById("results");


//userInput = userInput.value;

userInput.addEventListener("keyup", function(e) {
    e.preventDefault();
/*
    const results = findResult(e.target.value);

    if (results) {
        results.forEach(result => show)
    }
    else {

    }
    */

    function insertImage(urlToImage) {

        const img = document.createElement('img');
        img.setAttribute("src", urlToImage);
        img.className = "image";

        show.appendChild(img);

        return img;
    }

    for (let i = 0; i < 6; i++) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(res => res.json()
        .then(data => insertImage(data.drinks[i].strDrinkThumb)));

        if () {

        }
    }

/*
    for (let i = 0; i < 6; i++) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(res => res.json()
        .then(data => show.innerHTML = `<img src="${data.drinks[i].strDrinkThumb}"/>`));
    }
*/

})
