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
        console.log("It'a a Tie!");
    }else{
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                if(computerSelection === "Paper"){
                    console.log("You Lose! Paper beats Rock");
                    break;
                }else{
                    console.log("You Win! Rock beats Scissors");
                    break;
                }
            case "PAPER":
                if(computerSelection === "Rock"){
                    console.log("You Win! Paper beats Rock");
                    break;
                }else{
                    console.log("You Lose! Scissors beats Paper");
                    break;
                }
            case "SCISSORS":
                if(computerSelection === "Paper"){
                    console.log("You Win! Scissors beats Paper");
                    break;
                }else{
                    console.log("You Lose! Rock beats Scissors");
                    break;
                }
        }
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice());
}));
 
// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     for(let i = 0; i < 5; i++){
//         let result = playRound(prompt("Choose either \"Rock\", \"Paper\" or \"Scissors\"", "Rock"), getComputerChoice());
//         let winOrLose = result.charAt(4);
//         if(winOrLose === "W"){
//             playerWins++;
//         }else if(winOrLose === "L"){
//             computerWins++;
//         }
//         console.log(result);
//     }
//     if(playerWins > computerWins){
//         return `You Win!\nTotal victories: ${playerWins}`;
//     }else if(playerWins < computerWins){
//         return `You Lose!\nTotal victories: ${playerWins}`;
//     }else{
//         return `You Tied!\nTotal victories: ${playerWins}`;
//     }
// }

// console.log(game());