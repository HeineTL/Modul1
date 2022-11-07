//MODEL
let content = document.getElementById("inner-content");

let guessInput = 0;

let number = getRandomNumber();

//VIEW
function guess() {
    checkNumber();
}

//CONTROLLER
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkNumber() {
    let result = "Du gjettet riktig!";

    guessInput = document.getElementById("guessInput").value;

    if (guessInput < number) { /*MINDRE*/
        result = "Tallet er høyere!";
    } else if (guessInput > number) { /*MERE*/
        result = "Tallet er lavere!";
    } else if (guessInput.isInteger()) {
        result = "Du må skrive et tall!";
    }

    content.innerHTML = result;
}