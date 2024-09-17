/* generates three random numbers and assigns rock, paper or scissors to a variable */
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


function getHumanChoice() {
    const choice = window.prompt("Choose:");
    return choice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

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

    let counter = 0;
    while (counter < 5) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        console.log(`Round ${counter + 1}: ${result}`);
        console.log(`Score -> Player: ${humanScore} Computer: ${computerScore}`);
        counter++;
    }
    console.log();
    console.log(`Final score -> Player: ${humanScore} Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game")
    } else {
        console.log("It's a tie");
    }
}

playGame();