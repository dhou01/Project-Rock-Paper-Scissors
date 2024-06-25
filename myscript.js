let randomNumber = Math.floor(Math.random() * 3);
// console.log(randomNumber);

let humanScore = 0;
let computerScore = 0;


    function getComputerChoice() {

        if(randomNumber === 0) {
            return 'Rock';
        } else if(randomNumber === 1) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }
    // console.log(getComputerChoice());



let userOption = prompt("Choose: Rock, Paper or Scissors");

userOption = userOption.toLowerCase();
// console.log(userOption);

    function getHumanChoice() {

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

    let humanChoice = userOption;
    // console.log(humanChoice);

    let computerChoice = getComputerChoice();
    // console.log(computerChoice);



    function playRound (humanChoice, computerChoice) {

        if(humanChoice === computerChoice) {
            return alert('Draw!');
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

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    //let updateHumanScore = humanScore;
    //let updateComputerScore = computerScore;

    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);