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

