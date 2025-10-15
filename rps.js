const prompt = require('prompt-sync')();


const game =() => {
    let playerScore=0;
    let computerScore=0;  


const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors']

playerOptions.forEach(option => {
    option.addEventListener('click', function () {
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        winner(this.innerText, computerChoice)
    
        if (playerScore === 5 || computerScore === 5) {
            gameOver(playerOptions); 
 const gameOver = ( playerOptions) => { 
​ const chooseMove = document . querySelector ( '.move' );
​ const result = document . querySelector ( '.result' );
​ const reloadBtn = document . querySelector ( '.reload' );
​ 
​ playerOptions.forEach ( option => { option.style.display = 'none' ; })
​ 
​ ​ chooseMove.innerText = 'Game Over'
​ 
​ 
 }

        }
    })
})
}

const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    
    player = player.toLowercase();
    computer = computer.toLowercase();
    if (player === computer){
        result.textContent = Tie
    }
    else if (player == 'rock'){
        if (computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else{
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'scissor'){
        if(computer == 'rock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent =computerScore;
        } else{
            result.textContent= 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'paper'){
        if (computer == 'scissor'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textcontent = computerScore;
        } else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    
}
playGame();
}

game();
