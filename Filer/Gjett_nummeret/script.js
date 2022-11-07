//MODEL
let content = document.getElementById("inner-content");

let guessInput;

let forsøk = 0;

let riktig = 0;

let number = getRandomNumber();

//VIEW
function guess() {
    let result = checkNumber();

    content.innerHTML = `
        <h2>${result}</h2>
        <p>Antall forsøk: ${forsøk}</p>
    `;
}

//CONTROLLER
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkNumber() {
    let result;

    guessInput = document.getElementById("guessInput").value;

    if (guessInput < number) { /*MINDRE*/
        result = "Tallet er høyere!";
        forsøk++;
    } else if (guessInput > number) { /*MERE*/
        result = "Tallet er lavere!";
        forsøk++;
    } else if (guessInput == number) { /*SAMME*/
        result = "Du gjettet riktig! 🤯";
        if (riktig == 0) {
            riktig++;
            forsøk++;
        }
    } else {
        result = "Du må skrive et tall!";
    }

    return result;
}

function reset() {
    content.innerHTML = "";
    forsøk = 0;
    number = getRandomNumber();
}