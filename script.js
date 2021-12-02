const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerSelect = document.querySelector("#playerSelect");
const computerSelect = document.querySelector("#computerSelect");
const gameResult = document.querySelector("#gameResult");
const playerScores = document.querySelector("#playerScores");
const computerScores = document.querySelector("#computerScores");
const resetButton = document.querySelector('#resetButton');


let playerScore = 0;
let computerScore = 0;

rock.onclick = function() {
    alert(rock.value)
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playerSelect.innerHTML = '';
    computerSelect.innerHTML = '';
    gameResult.innerHTML = '';
    playerScores.innerHTML = '';
    computerScores.innerHTML = '';
    enableButtons();
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function enableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = '';
    if (playerSelection === computerSelection) {
        result = ('It\'s a tie! You both chose ' + playerSelection)
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
                (playerSelection == 'Paper' && computerSelection == 'Rock') || 
                (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
                    playerScore++;
                    result = 'You win! ' + playerSelection + ' beats ' + computerSelection
                    
                    if (playerScore == 5) {
                        result += "<br><br> You won the game! Click the restart button to play again.";
                        disableButtons();
                    }
                } else {
                    computerScore++;
                    result = 'You lose! ' + computerSelection + ' beats ' + playerSelection

                    if (computerScore == 5) {
                        result += "<br><br> You lost the game! Click the restart button to play again.";
                        disableButtons();
                    }
                }
    playerSelect.textContent = playerSelection;
    computerSelect.textContent = computerSelection;
    gameResult.innerHTML = result;
    playerScores.textContent = playerScore;
    computerScores.textContent = computerScore;

}

rock.onclick = function() {
    playRound("Rock");
};

paper.onclick = function() {
    playRound("Paper");
};

scissors.onclick = function() {
    playRound("Scissors");
};

resetButton.onclick = function() {
    resetGame();
}