//MODEL
let options = document.getElementById("optionss");

let choiceMade = false;

//VIEW

function addView(content) {
    options.innerHTML += content;
}

function resetView() {
    options.innerHTML = `
            <img src="img/stein.png" onclick="klikk('stein')">
            <img src="img/saks.png" onclick="klikk('saks')">
            <img src="img/papir.png" onclick="klikk('papir')">
        `;
}


//CONTROLLER
function klikk(choice) {

    if (choiceMade == true) {
        resetView();
    }
    choiceMade = true;

    addView(`<p>Du valgte ${choice}</p>`);

    addView(`<img src="img/${choice}.png">`);

    let machineAnswer = randomChoice();

    checkWinner(choice, machineAnswer);

    addView('<button onclick="resetView()">Reset</button>');

}

function randomChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    let answer;

    if (randomNum == 1) {
        answer = "stein";
    } else if (randomNum == 2) {
        answer = "saks";
    } else if (randomNum == 3) {
        answer = "papir";
    }

    addView(`<p>Maskinen valgte ${answer}.</p>`);

    addView(`<img src="img/${answer}.png">`);

    return answer;
}

function checkWinner(playerAnswer, computerAnswer) {

    let result = "Du tapte!";

    if (playerAnswer == "stein") {
        if (computerAnswer == "saks") {
            result = "Du vant!";
        }
        if (computerAnswer == "stein") {
            result = "Uavgjort!";
        }
    }
    if (playerAnswer == "saks") {
        if (computerAnswer == "saks") {
            result = "Uavgjort!";
        }
        if (computerAnswer == "papir") {
            result = "Du vant!";
        }
    }
    if (playerAnswer == "papir") {
        if (computerAnswer == "stein") {
            result = "Du vant!";
        }
        if (computerAnswer == "papir") {
            result = "Uavgjort!";
        }
    }

    addView(`<h1>${result}</h1>`);

}