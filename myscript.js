
let humanScore = 0;
let computerScore = 0;

    function getComputerChoice() {

        let randomNumber = Math.floor(Math.random() * 3);

        if(randomNumber === 0) {
            return 'Rock';
        } else if(randomNumber === 1) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }


    function getHumanChoice() {

        let userOption = prompt("Choose: Rock, Paper or Scissors");

        userOption = userOption.toLowerCase();

        if(userOption === 'rock') {
            return 'Rock';
        } else if(userOption === 'paper') {
            return 'Paper';
        } else if(userOption === 'scissors') {
            return 'Scissors';
        } else {
            return alert('Invalid choice, please try again');
        }
    }


    function playRound(humanChoice, computerChoice) {

        if(humanChoice === computerChoice) {
            return 'Draw!';
        }
        
        if(humanChoice === 'Rock') {
            if(computerChoice === 'Scissors') {
                humanScore = humanScore + 1;
                return `You Win! ${humanChoice} beats ${computerChoice}`;
            }
            else {
                computerScore = computerScore + 1;
                return `You Lose! ${computerChoice} beats ${humanChoice}`;
            }
        }

        if(humanChoice === 'Paper') {
            if(computerChoice === 'Rock') {
                humanScore = humanScore + 1;
                return `You Win! ${humanChoice} beats ${computerChoice}`;
            }
            else {
                computerScore = computerScore + 1;
                return `You Lose! ${computerChoice} beats ${humanChoice}`;
            }
        }

        if(humanChoice === 'Scissors') {
            if(computerChoice === 'Paper') {
                humanScore = humanScore + 1;
                return `You Win! ${humanChoice} beats ${computerChoice}`;
            }
            else {
                computerScore = computerScore + 1;
                return `You Lose! ${computerChoice} beats ${humanChoice}`;
            }
        }
    }


    function playGame() {
         
        for (let i = 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            const currentRound = playRound(humanSelection, computerSelection);
            console.log(currentRound);
            console.log('Player score:' + '' + humanScore);
            console.log('Computer score:' + '' + computerScore);
        }
    }

playGame();