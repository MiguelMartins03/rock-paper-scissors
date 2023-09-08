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
    const results = document.querySelector("#results");
    const result = document.createElement("p");
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        result.textContent = "It'a a Tie!";
        results.appendChild(result);
    }else{
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                if(computerSelection === "Paper"){
                    result.textContent = "You Lose! Paper beats Rock";
                    results.appendChild(result);
                    break;
                }else{
                    result.textContent = "You Win! Rock beats Scissors"
                    results.appendChild(result);
                    break;
                }
            case "PAPER":
                if(computerSelection === "Rock"){
                    result.textContent = "You Win! Paper beats Rock"
                    results.appendChild(result);
                    break;
                }else{
                    result.textContent = "You Lose! Scissors beats Paper"
                    results.appendChild(result);
                    break;
                }
            case "SCISSORS":
                if(computerSelection === "Paper"){
                    result.textContent = "You Win! Scissors beats Paper"
                    results.appendChild(result);
                    break;
                }else{
                    result.textContent = "You Lose! Rock beats Scissors"
                    results.appendChild(result);
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