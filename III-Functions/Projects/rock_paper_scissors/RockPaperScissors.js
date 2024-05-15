console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log(`ERROR: ${userInput} is not a rock, paper, or scissors`);
  }
}

const getComputerChoice = () => {
  randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'BOMB takes the cake (but oh, how messy!!!). User wins.'
  } else if (userChoice === computerChoice) {
    return 'This round is a draw'
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return `User's ${userChoice} loses to ${computerChoice}, so Computer wins!`
      } else {
        return `Computer's ${computerChoice} loses to ${userChoice}, so User wins!`
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return `User's ${userChoice} loses to ${computerChoice}, so Computer wins!`
      } else {
        return `Computer's ${computerChoice} loses to ${userChoice}, so User wins!`
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return `User's ${userChoice} loses to ${computerChoice}, so Computer wins!`
      } else {
        return `Computer's ${computerChoice} loses to ${userChoice}, so User wins!`
      }
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();