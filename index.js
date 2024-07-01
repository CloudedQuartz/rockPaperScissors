function getComputerChoice() {
    let rand = Math.random();
    let choice = Math.floor(rand * 3);
    return choice;
}

function mapIntToChoice(choice) {
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function mapChoiceToInt(choice) {
    switch (choice.toLowerCase()) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        default:
            return -1;
    }
}
function getUserChoice() {
    let choiceField = document.getElementById("rockPaperScissorInput");
    let userChoice = choiceField.value;
    choiceField.value = "";
    return userChoice;
}

function findWinner(c1, c2) {
    if ((c1 == 0 && c2 == 2) || (c1 == 2 && c2 == 1) || c1 == 1 && c2 == 0) {
        return 0;
    }
    return 1;
}

function updateScore(winner) {
    let winnerElementName = "score" + (winner + 1)
    let winnerElement = document.getElementById(winnerElementName);
    winnerElement.innerText = (parseInt(winnerElement.innerText) + 1)
}

function playRound() {

    let userChoice = mapChoiceToInt(getUserChoice());
    let compChoice = getComputerChoice();
    if (userChoice != -1) {
        updateScore(findWinner(userChoice, compChoice));
        incrementRounds();
    } else {
        alert("Invalid entry");
    }

}

let rounds = 0;