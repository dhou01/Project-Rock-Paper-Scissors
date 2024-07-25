
let humanScore = 0;
let computerScore = 0;

    function getComputerChoice() {
        const computerChoices = ['Rock','Paper','Scissors'];
        //console.log(computerChoices);
        return computerChoices[Math.floor(Math.random() * 3)];
    }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            return 'Draw!';
        }

        if (
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
            (humanChoice === 'Rock' && computerChoice === 'Scissors')
        ) {
            humanScore++;
            return `You Win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            return `You Lose! ${computerChoice} beats ${humanChoice}`;
        }
    }

    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    

    rockButton.addEventListener('click', () => {
        console.log(handleChoice('Rock'));
    }); 
    paperButton.addEventListener('click', () => {
        console.log(handleChoice('Paper'));
    }); 
    scissorsButton.addEventListener('click', () => {
        console.log(handleChoice('Scissors'));
    }); 
 


    function displayResults(humanChoice, computerChoice, roundResult) {
        const resultDiv = document.querySelector('.result')

        const resultContent = `
        <p>Player chose: ${humanChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <p>Result: ${roundResult}</p>     
        <p>Player score: ${humanScore}</p>
        <p>Computer score: ${computerScore}</p>
        `;

        resultDiv.innerHTML = resultContent;
    }

    function handleChoice(choice) {
        const computerChoice = getComputerChoice();
        const roundResult = playRound(choice, computerChoice);
        displayResults(choice, computerChoice, roundResult);
        checkWinner();
        console.log(roundResult);
    }

    function checkWinner() {
        if (humanScore === 5) {
            alert('YOU WIN! GAME OVER');
            resetGame();
        } else if (computerScore === 5) {
            alert('YOU LOSE! GAME OVER');
            resetGame();
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        displayResults('','', 'NEW GAME, START');
    }

displayResults('','', 'NEW GAME, START');