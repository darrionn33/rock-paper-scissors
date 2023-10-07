const getComputerChoice = () => Math.floor(Math.random() * 3); // return a number between 0,1 and 3

const startGame = () => {
  let playerChoice = +prompt("R,P,S?");
  let computerChoice = getComputerChoice();
  let winner = "No one!";

  switch (playerChoice) {
    case 0:
      switch (computerChoice) {
        case 0:
          break;
        case 1:
          winner = "computer;";
          break;
        case 2:
          winner = "player";
          break;
      }
      break;
    case 1:
      switch (computerChoice) {
        case 0:
          winner = "computer;";
          break;
        case 1:
          break;
        case 2:
          winner = "player";
          break;
      }
      break;
    case 2:
      switch (computerChoice) {
        case 0:
          winner = "player";
          break;
        case 1:
          winner = "computer;";
          break;
        case 2:
          break;
      }
      break;
  }

  alert(winner);
};

const loopGame = () => {
  let n = +prompt("katno?");

  for (let i = 0; i <= n; i++) {
    startGame();
  }
};
