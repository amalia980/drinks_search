const userInput = document.getElementById("search");
const show = document.getElementById("results");


function myImage(image) {
    const img = document.createElement("img");

    show.appendChild(img);
  
    show.innerHTML = image;
  }
  
  
  let timer = null;
  
  inputField.addEventListener("keyup", async function(event){
  
    if (timer) {

      clearTimeout(timer);
      timer = null;
    }
    const value = event.target.value;
  
    if (value.length < 2) return;
  
  
    timer = setTimeout(async function(){
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita${value}`);
      const obj = await response.json();
      const drinks = obj.drinks;
  

      (drinks || []).forEach(function(drink){
        const image = drink.strDrink;
  
  
        searchResultsDiv.appendChild(article);
      });
  
    
  })
