/**
 * What this program needs:
 * [x] A way to access player choice (buttons)
 * [x] A way to calculate computer choice
 * [x] A way to display choices from computer and user
 * [x] A way to display results
 */

const determineResults = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `You tied! You both chose ${userChoice}`;
  } else if (userChoice != computerChoice) {
    if (userChoice === 'Scissors' && computerChoice === 'Paper') {
      return 'You win! Scissors cuts paper!';
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
      return 'You lose! Paper is cut by scissors!';
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
      return 'You win! Paper covers rock!';
    } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
      return 'You lose! Rock is covered by paper!';
    } else if (userChoice === 'Rock' && computerChoice === 'Lizard') {
      return 'You win! Rock crushes lizard!';
    } else if (userChoice === 'Lizard' && computerChoice === 'Rock') {
      return 'You lose! Lizard is crushed by rock!';
    } else if (userChoice === 'Lizard' && computerChoice === 'Spock') {
      return 'You win! Lizard poisons spock!';
    } else if (userChoice === 'Spock' && computerChoice === 'Lizard') {
      return 'You lose! Spock is poisoned by lizard!';
    } else if (userChoice === 'Spock' && computerChoice === 'Scissors') {
      return 'You win! Spock smashes scissors!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Spock') {
      return 'You lose! Scissors are smashed by spock!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Lizard') {
      return 'You win! Scissors decapitates lizard!';
    } else if (userChoice === 'Lizard' && computerChoice === 'Scissors') {
      return 'You lose! Lizard is decapitated by scissors!';
    } else if (userChoice === 'Lizard' && computerChoice === 'Paper') {
      return 'You win! Lizard eats paper!';
    } else if (userChoice === 'Paper' && computerChoice === 'Lizard') {
      return 'You lose! Paper is eaten by lizard!';
    } else if (userChoice === 'Paper' && computerChoice === 'Spock') {
      return 'You win! Paper disproves spock!';
    } else if (userChoice === 'Spock' && computerChoice == 'Paper') {
      return 'You lose! Spock is disproved by paper!';
    } else if (userChoice === 'Spock' && computerChoice === 'Rock') {
      return 'You win! Spock vaporizes rock!';
    } else if (userChoice === 'Rock' && computerChoice === 'Spock') {
      return 'You lose! Rock is vaporized by spock';
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
      return 'You win! Rock crushes scissors!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
      return 'You lose! Scissors are crushed by rock!';
    }
  }
};

const getUserChoice = (val) => {
  rock();
  paper();
  scissors();
  lizard();
  spock();

  if (val === rock) {
    playGame('Rock');
  } else if (val === paper) {
    playGame('Paper');
  } else if (val === scissors) {
    playGame('Scissors');
  } else if (val === lizard) {
    playGame('Lizard');
  } else if (val === spock) {
    playGame('Spock');
  }
};

const getComputerChoice = () => {
  // Will pick a rounded random number and assign it computer choices
  computerChoices = Math.floor(Math.random() * 5);

  // Assign values to randomly selected number
  switch (computerChoices) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return 'Scissors';
      break;
    case 3:
      return 'Lizard';
      break;
    case 4:
      return 'Spock';
      break;
  }
};

const rock = () => {
  value = document.getElementById('rock');

  value.onclick = function () {
    getUserChoice(rock);
  };
};

const paper = () => {
  value = document.getElementById('paper');
  value.onclick = function () {
    getUserChoice(paper);
  };
};

const scissors = () => {
  value = document.getElementById('scissors');
  value.onclick = function () {
    getUserChoice(scissors);
  };
};

const lizard = () => {
  value = document.getElementById('lizard');
  value.onclick = function () {
    getUserChoice(lizard);
  };
};

const spock = () => {
  value = document.getElementById('spock');
  value.onclick = function () {
    getUserChoice(spock);
  };
};

const playGame = (user) => {
  compChoice = getComputerChoice();

  let resultPrint = document.getElementById('playResults');
  resultPrint.innerHTML = determineResults(user, compChoice);
};

getUserChoice();
