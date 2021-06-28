const userInput = document.getElementById("search");
const show = document.getElementById("results");


function createElement(image) {
    const img = document.createElement('img');
        img.setAttribute("src", image);
        img.innerHTML = image;
        img.className = "image";

        return img;
}

function myFetch() {
    for (let i = 0; i < 6; i++) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(res => res.json()
        .then(data => createElement(data.drinks[i].strDrinkThumb)));
}


function findResult(query) {
    const foundResults = [];
    const queryLower = query.toLowerCase();

    
    myFetch().forEach(function(item) {
        const image = item.image.toLowerCase();
        
        if (image.includes(queryLower)) {
            foundResults.push(item);
        }

    })

    return foundResults;
}

userInput.addEventListener("keyup", function(event){
    // searches for results
    const results = findResult(event.target.value);


    // this converts all results objects to HTML elements and push them to our "resultsArea" div.
    if (results) {

        results.forEach(result => show.appendChild(createElement(
            result.image
        ))); 
    }   

})
};
