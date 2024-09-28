function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let returnVar;
    switch (randomNumber) {
        case 0:
            returnVar = "rock";
            break;
        case 1:
            returnVar = "paper"
            break;
        case 2:
            returnVar = "scissors"
            break;
    }
    return returnVar;
}

let humanScore = 0;
let computerScore = 0;
let round = 1;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const display = document.querySelector(".display");
        display.innerHTML = "";

        const computerChoice = getComputerChoice();
        const humanChoice = button.id;

        if (humanScore === 5 || computerScore === 5) {
            display.innerHTML = "";

            const announceWinner = document.createElement("p");

            if (humanScore === 5) {
                announceWinner.textContent = "Congratulations! YOU WON!"
            } else {
                announceWinner.textContent = "BIG L, LOSER! Computer wins!"
            }

            display.appendChild(announceWinner);

            humanScore = 0;
            computerScore = 0;
            round = 0;

            return;
        }

        function playRound(humanChoice, computerChoice) {
            let returnValue;
            if (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") {
                returnValue = "Computer wins";
                computerScore++;
            } else if (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") {
                returnValue = "Computer wins";
                computerScore++;
            } else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper") {
                returnValue = "Computer wins";
                computerScore++;
            } else if (computerChoice === "rock" && humanChoice === "rock") {
                returnValue = "Tie";
            } else if (computerChoice === "paper" && humanChoice === "paper") {
                returnValue = "Tie";
            } else if (computerChoice === "scissors" && humanChoice === "scissors") {
                returnValue = "Tie";
            } else {
                returnValue = "Player wins";
                humanScore++;
            }
            return returnValue;
        }


        const roundPara = document.createElement("p");
        roundPara.textContent = `ROUND: ${round++}`;
        const humanPara = document.createElement("p");
        const resultPara = document.createElement("p");
        resultPara.textContent = playRound(humanChoice, computerChoice);
        humanPara.textContent = `You chose: ${humanChoice}`;
        const computerPara = document.createElement("p");
        computerPara.textContent = `Computer chose: ${computerChoice}`;
        const displayHumanScore = document.createElement("p");
        const displayComputerScore = document.createElement("p");
        displayHumanScore.textContent = `Your score: ${humanScore}`;
        displayComputerScore.textContent = `Computer score: ${computerScore}`;
        display.append(roundPara,humanPara, computerPara, displayHumanScore, displayComputerScore, resultPara);

    });
});