function getComputerChoice() {
    let randomNumber = getRandomInt(3);
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getComputerChoice());