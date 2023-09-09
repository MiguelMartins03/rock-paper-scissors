function getComputerChoice() {
    let x = Math.random();
    let choice;
    if(x < 0.3){
        choice = "Rock";
    }else if(x > 0.6){
        choice = "Paper";
    }else{
        choice = "Scissors";
    }
    return choice;
}

const buttons = document.querySelectorAll("button.gameButton");
buttons.forEach(btn => btn.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice());
}));

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector("#results");
    const result = document.createElement("p");
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        result.textContent = "It'a a Tie!";
        results.insertBefore(result, results.firstChild);
    }else{
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                if(computerSelection === "Paper"){
                    result.textContent = "You Lose! Paper beats Rock";
                    results.insertBefore(result, results.firstChild);
                    computerWins++;
                    break;
                }else{
                    result.textContent = "You Win! Rock beats Scissors"
                    results.insertBefore(result, results.firstChild);
                    playerWins++;
                    break;
                }
            case "PAPER":
                if(computerSelection === "Rock"){
                    result.textContent = "You Win! Paper beats Rock"
                    results.insertBefore(result, results.firstChild);
                    playerWins++;
                    break;
                }else{
                    result.textContent = "You Lose! Scissors beats Paper"
                    results.insertBefore(result, results.firstChild);
                    computerWins++;
                    break;
                }
            case "SCISSORS":
                if(computerSelection === "Paper"){
                    result.textContent = "You Win! Scissors beats Paper"
                    results.insertBefore(result, results.firstChild);
                    playerWins++;
                    break;
                }else{
                    result.textContent = "You Lose! Rock beats Scissors"
                    results.insertBefore(result, results.firstChild);
                    computerWins++;
                    break;
                }
        }
    }

    playerScore.textContent = `${playerWins}`
    computerScore.textContent = `${computerWins}`

    if(playerWins >= 5){
        annouceWinner("Player");
    }else if(computerWins >= 5){
        annouceWinner("Computer");
    }
}

function annouceWinner(winner){
    const annoucement = document.querySelector("#winner");
    annoucement.textContent = `The ${winner} Won`;
    const buttons = document.querySelector("#buttons");
    while (buttons.firstChild) {
        buttons.removeChild(buttons.firstChild);
    }
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.setAttribute("class", "resetButton");
    resetButton.addEventListener("click", resetGame);
    buttons.appendChild(resetButton);
}

function resetGame(){
    const results = document.querySelector("#results");
    results.textContent = "";

    const winner = document.querySelector("#winner");
    winner.textContent = "";

    playerWins = 0;
    computerWins = 0;
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");
    playerScore.textContent = `${playerWins}`
    computerScore.textContent = `${computerWins}`

    const newButtons = document.querySelector("#buttons");
    newButtons.innerHTML ='<button id="rock" class="gameButton">Rock</button>\n<button id="paper" class="gameButton">Paper</button>\n<button id="scissors" class="gameButton">Scissors</button>';
    const buttons = document.querySelectorAll("button.gameButton");
    buttons.forEach(btn => btn.addEventListener("click", (event) => {
        playRound(event.target.id, getComputerChoice());
    }));
}