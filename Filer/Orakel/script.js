let orakelSvar = ['Ja', 'Nei', 'Kanskje'];

function askQuestion() {
    document.getElementById("answerHeadline").innerHTML = "ORAKELET SIER:";

    document.getElementById("answerText").innerHTML = randomAnswer();
}

function randomAnswer () {
    let randomNummer = Math.floor(Math.random() * orakelSvar.length);

    return orakelSvar[randomNummer];
}