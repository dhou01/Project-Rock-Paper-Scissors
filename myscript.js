let randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

    function getComputerChoice() {

        if(randomNumber === 0) {
            return 'Rock';
        } else if(randomNumber === 1) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }
    console.log(getComputerChoice());



let userOption = prompt("Choose: Rock, Paper or Scissors");

    function getHumanChoice() {

        if(userOption === 'Rock') {
            return 'Rock';
        } else if(userOption === 'Paper') {
            return 'Paper';
        } else if(userOption === 'Scissors') {
            return 'Scissors';
        } else {
            return alert('Invalid choice, please try again');
        }
    }
    console.log(getHumanChoice());