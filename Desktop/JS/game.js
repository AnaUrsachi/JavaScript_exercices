const getUserChoice = (userInput) => { //Uncaught SyntaxError: Identifier 'getUserChoice' has already been declared
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('error');//not a valid choice
    }
};
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    };
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } else if (userChoice === 'paper') {
        if (compterChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }
};

function playGame() {
    var userChoice = getUserChoice('paper');
    var computerChoice = getComputerChoice();
    //    console.log(userChoice);
    //   console.log(computerChoice);
};
console.log(determineWinner(userChoice, computerChoice));
determineWinner;