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

function getHumanChoice() {

}