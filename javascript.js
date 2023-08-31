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

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return "It'a a Tie!";
    }
    switch(playerSelection.toUpperCase()){
        case "ROCK":
            if(computerSelection === "Paper"){
                return "You Lose! Paper beats Rock"
            }else{
                return "You Win! Rock beats Scissors"
            }
        case "PAPER":
            if(computerSelection === "Rock"){
                return "You Win! Paper beats Rock"
            }else{
                return "You Lose! Scissors beats Paper"
            }
        case "SCISSORS":
            if(computerSelection === "Paper"){
                return "You Win! Scissors beats Paper"
            }else{
                return "You Lose! Rock beats Scissors"
            }
    }
    return "Error! Player didn't choose neither \"Rock\" nor \"Paper\" nor \"Scissors\""
}

 
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound(prompt("Choose either \"Rock\", \"Paper\" or \"Scissors\"", "Rock"), getComputerChoice());
        let winOrLose = result.charAt(4);
        if(winOrLose === "W"){
            playerWins++;
        }else if(winOrLose === "L"){
            computerWins++;
        }
        console.log(result);
    }
    if(playerWins > computerWins){
        return `You Win!\nTotal victories: ${playerWins}`;
    }else if(playerWins < computerWins){
        return `You Lose!\nTotal victories: ${playerWins}`;
    }else{
        return `You Tied!\nTotal victories: ${playerWins}`;
    }
}

console.log(game());