const userInput = document.getElementById("search");
const show = document.getElementById("results");


function findResult(query) {

}

userInput.addEventListener("keyup", function(event){
    // searches for results
    const results = findResult(event.target.value);


    // this converts all results objects to HTML elements and push them to our "resultsArea" div.
    if (results) {

        results.forEach(result => resultsArea.appendChild(createResultElement(
            result.title,
        ))); 
    }   
    else {

    }  
});