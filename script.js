let gameOnPanel = document.querySelector(".gameOn");
let gameOffPanel = document.querySelector(".gameOff");
let gameInfoPanel = document.querySelector(".gameInfo");
let startButton = document.getElementById("start");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playerChoice;

alert("Scoreboard doesn't work yet!");
const choicesArray = ["Rock", "Paper", "Scissors"];

const playGame = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let winner = "No one";
  switch (playerChoice) {
    case 0:
      switch (computerChoice) {
        case 0:
          break;
        case 1:
          winner = "Computer";
          break;
        case 2:
          winner = "You";
          break;
      }
      break;
    case 1:
      switch (computerChoice) {
        case 0:
          winner = "You";
          break;
        case 1:
          break;
        case 2:
          winner = "Computer";
          break;
      }
      break;
    case 2:
      switch (computerChoice) {
        case 0:
          winner = "Computer";
          break;
        case 1:
          winner = "You;";
          break;
        case 2:
          break;
      }
      break;
  }

  gameInfoPanel.innerHTML = `You chose ${choicesArray[playerChoice]}.
  Computer chose ${choicesArray[computerChoice]}. 
  ${winner} won!`;
  gameOffPanel.style.display = "flex";
  gameOnPanel.style.display = "none";
};

const startGame = () => {
  gameOffPanel.style.display = "none";
  gameOnPanel.style.display = "flex";
  gameInfoPanel.innerHTML = "Rock, Paper or Scissors?";
};

startButton.addEventListener("click", startGame);
rockButton.addEventListener("click", () => {
  playerChoice = 0;
  playGame();
});
paperButton.addEventListener("click", () => {
  playerChoice = 1;
  playGame();
});
scissorsButton.addEventListener("click", () => {
  playerChoice = 2;
  playGame();
});
