function getComputerChoice() {
    let rand = Math.random();
    let choice = Math.floor(rand * 3);
    return choice;
}

function findWinner(c1, c2) {
    if ((c1 == 0 && c2 == 2) || (c1 == 2 && c2 == 1) || c1 == 1 && c2 == 0) {
        return 0;
    }
    return 1;
}

function updateScore(winnerElement) {
    winnerElement.innerText = (parseInt(winnerElement.innerText) + 1)
}

function playRound(userChoice) {
    if (rounds >= 5) {
        return
    }
    let compChoice = getComputerChoice();
    let winner = findWinner(userChoice, compChoice);
    let winnerElementName = '#u' + winner
    updateScore(document.querySelector(winnerElementName))
    rounds++
    if (rounds >= 5) {
        document.getElementById('score-header').innerText = "Game Over!"
    }
}

let rounds = 0;

clickElements = document.querySelectorAll(".rps-icon")
clickElements.forEach((element) => {
    element.onclick = (event) => { playRound(Number(event.target.id)) }
});