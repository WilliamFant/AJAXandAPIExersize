// 1a. Change the string of JSON into JavaScript (It will be a JS object) and set the new value to a const variable called jokeJS1 (HINT: Use JSON.parse())
const jokeJSON = '{"setup": "Why did the chicken cross the road", "punchline": "To get to the other side"}'
const jokeJS1 = JSON.parse(jokeJSON)
// 1b. Access the value for the "setup" key in the jokeJS1 object and set it to the inner text for the p1 variable/element (If done correctly the setup for the joke should display on the webpage)
p1.innerText = jokeJS1.setup

// 1c. Access the value for the "punchline" key in the jokeJS1 object and set it to the inner text for the p2 variable/element (If done correctly the punchline for the joke should display on the webpage)

p2.innerText = jokeJS1.punchline;
// Use the bored API for questions 2 & 3 (Link below)…
// "https://www.boredapi.com/api/"

// 2a. Use the "activity." endpoint/URL to GET a Random activity using axios2b. Use .then to create a function that sets the value returned from the axios GET request to a const variable called activityJS2 (NOTE: You will need to create a function with a parameter. The parameter will hold the "resolved" value returned from the axios GET request). 2c. Inside of the same function, access the value for the "type" key in the activityJS2 object and set it to the inner text for the p3 variable/element. Also, access the value for the "activity" key in the activityJS2 object and set it to the inner text for the p4 variable/element (If done correctly the activity and type for the activity should display on the webpage) 2d. Finally, use .catch to create a function that would display the "rejected" value/error returned from the axios GET request in the console (NOTE: You will need a console log for this. Also, you will need to create a function with a parameter. The parameter will hold the "rejected" value/error returned from the axios GET request).

function setActivity(activity) {
    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");
    p3.innerText = activity.type;
    p4.innerText = activity.activity;
  }
  
  async function getActivity(){
      const url = `https://www.boredapi.com/api/activity/`;
      const activity = await axios.get(url);
      console.log(activity);
      setActivity(activity.data);
  }
  
  getActivity();
  
// 3a. Use the "activity." endpoint/URL again to GET another Random Activity using axios

// 3b. Create a function that uses async/await called activityFunc which sets the value returned from the axios GET request to a const variable called activityJS3

async function activityFunc() {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');
      const activityJS3 = response.data;
      console.log(activityJS3);
      p5.innerText = activityJS3
      p6.innerText = activityJS3.type;

      
      // Do something with the activityJS3 variable
      
    } catch (error) {
      console.error(error);
    }
  }
// 3c. Inside of the same activityFunc function, access the value for the "activity" key in the activityJS3 object and set it to the inner text for the p5 variable/element. Also, access the value for the "type" key in the activityJS3 object and set it to the inner text for the p6 variable/element (If done correctly the activity and type for the activity should display on the webpage)(NOTE: Don't forget the run the activityFunc function)


// 3d. Finally, include try and catch inside the activityFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).

// Use the TVMazeAPI for question 4 (Link below)…
// https://www.tvmaze.com/api
// 4a. Using Axios, Async/await, and the "Episode by Number" endpoint/URL display the name of the final episode in season two of "The Mandalorian" TV show as the inner text for the p7 variable/element. Also, use tvMazeFunc for the name of the async function you create. If done correctly the name of the episode should display on the webpage. (NOTE: Don't forget to run the tvMazeFunc function)(Hint: id is 38963).
async function tvMazeFunc() {
    try{
        const response = await axios.get('https://www.tvmaze.com/api/seasons/38963/episodes');
        const episode = response.data[7].name;
        p7.innerText = episode;
    }
    catch (err){
        console.log(err);
    }
}

// 4b. Finally, include try and catch inside the tvMazeFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).

// Bonus
// 5. Use the Poke API (https://pokeapi.co/) to display an image of Pikachu below the fourth div on the webpage
const pokeContainer = document.querySelector('#container')
// Number of Pokemon (AKA objects) using the first 150 pokemon in the PokeAPI

// The createPokeCard function creates a new card (AKA section element) and adds the new card to the DOM inside of the div with the id of "container"
function createPokeCard (pokemon) {
    const pokeCard = document.createElement('section')
    pokeCard.classList.add('pokemon')
    pokeContainer.append(pokeCard)
    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it wil in UPPERCASE text
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}


// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/number then takes the returned data and passes it into the createpokeCard function
// NOTE: The argument/value passed into the "ID" parameter will be a number created in the loop in the next function (AKA the getPokmeon function)

async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonData = await axios.get(url)
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_default);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData)
}


// The getPokemon function loops through all the pokemon id's and runs/exectues the pokemonData function for each ID
// NOTE: using async/await on this function because the code in the getPokemonData function is asynchronous (there is axios request in that function)
async function getPokemon(i){
        await getPokemonData(i)
}
getPokemon(25)

// await getPokemonData(16);