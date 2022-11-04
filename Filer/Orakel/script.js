let answer;

let answerText = document.getElementById("answerText");
let answerHeadline = document.getElementById("answerHeadline");

function upperCase() {
    answer = document.getElementById("string").value;

    let response = answer.toUpperCase();

    respond(response);
}
function lowerCase() {
    answer = document.getElementById("string").value;

    let response = answer.toLowerCase();

    respond(response);
}
function firstLetterToUppercase() {
    answer = "" + document.getElementById("string").value;

    let response = answer.charAt(0).toUpperCase() + answer.slice(1);

    respond(response);
}
function reverseString() {
    answer = document.getElementById("string").value;

    let responseSplit = answer.split("");
    
    let responseReverseArray = responseSplit.reverse();

    let response = responseReverseArray.join("");

    respond(response);
}

function respond(responseAnswer) {
    answerHeadline.innerHTML = "Svar:";
    answerText.innerHTML = responseAnswer;
}