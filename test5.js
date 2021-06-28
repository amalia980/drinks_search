const userInput = document.getElementById("search");
const show = document.getElementById("results");


function create(image) {
  const myImg = document.createElement('img');
  //myImg.src = `${drinks[0].strDrinkThumb}`;
  myImg.src = image;

  myImg.className = "image";

  myImg.innerHTML = image;

  return myImg;

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
      const image = drink.strDrinkThumb;



      const myImg = create(image);

      show.appendChild(myImg);
    });

    
  }, 500);
});
