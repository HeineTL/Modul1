//MODEL
const content = document.getElementById("content");

const pokemons = [
    "Bulbasaur", "Charmander", "Squirtle", "Rattata", "Spearow", "Pikachu", "Ninetales", 
    "Zulbat", "Diglett", "Poliwag", "Bellsprout", "Geodude", "Slowpoke", "Magnemite", 
    "Seel", "Grimer", "Gengar", "Onix", "Rhyhorn", "Tangela", "Horsea", "Staryu"];

const inventory = [];

inventory.push({pokemon: "Charizard", level: 30});
//VIEW
updateView(false);

function updateView(showInventory = false) {

    let pokemon = randomPokemon();

    let pokemonLevel = Math.floor(Math.random() * 100) + 1;

    content.innerHTML = "";
    
    if(showInventory == true) {
        content.innerHTML += /*HTML*/`
        <div class="inventory system">
            <h1>Pokemons</h1>
            <p>Du har 5 pokemons:</p>
            <p>Charizard, Pikachu</p>
            <button>Lukk vindu</button>
        </div>`;
    }

    content.innerHTML += /*HTML*/`
        <div class="pokemons system">
            <h1>En vill ${pokemon} (Lvl. ${pokemonLevel}) har dukket opp!</h1>
            <h2></h2>
            <p>Hva vil du gjøre?</p>
            <button>Fang den</button>
            <button>Løp vekk</button>
            <button>Vis inventar</button>
        </div>
    `;
}

//CONTROLLER
function randomPokemon(){
    let randomIndex = Math.floor(Math.random() * pokemons.length);

    return pokemons[randomIndex];
}