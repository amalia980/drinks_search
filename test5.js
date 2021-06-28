const userInput = document.getElementById("search");
const show = document.getElementById("results");


function create(title, image) {

  const myDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const myImg = document.createElement('img');

  myDiv.className = "div-drink"; 
  h3.className = "title";
  myImg.className = "image";

  myImg.src = image;
 

  h3.innerHTML = title;
  myImg.innerHTML = image;

  myDiv.appendChild(h3);
  myDiv.appendChild(myImg);

  return myDiv;

}


let timer = null;

userInput.addEventListener("keyup", async function(event){

  if (timer) {

    clearTimeout(timer);
    timer = null;
  }
  const value = event.target.value;

  if (value.length < 2) return;


  show.innerHTML = "";


  timer = setTimeout(async function(){
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
    const obj = await response.json();
    const drinks = obj.drinks;



    (drinks || []).forEach(function(drink){
      const title = drink.strDrink;
      const image = drink.strDrinkThumb;



      const myDiv = create(title, image);

      show.appendChild(myDiv);
    });

    
  }, 200);
});
