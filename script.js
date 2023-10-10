let gameOnPanel = document.querySelector(".gameOn");
let gameOffPanel = document.querySelector(".gameOff");
let gameInfoPanel = document.querySelector(".gameInfo");
let startButton = document.getElementById("start");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playerChoice;
const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");

// alert("Scoreboard doesn't work yet!");
const choicesArray = ["Rock", "Paper", "Scissors"];

let scores = [0, 0];
playerScore.textContent = scores[0];
compScore.textContent = scores[1];

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
          scores[1] = scores[1] + 1;
          break;
        case 2:
          winner = "You";
          scores[0] = scores[0] + 1;
          break;
      }
      break;
    case 1:
      switch (computerChoice) {
        case 0:
          winner = "You";
          scores[0] = scores[0] + 1;
          break;
        case 1:
          break;
        case 2:
          winner = "Computer";
          scores[1] = scores[1] + 1;
          break;
      }
      break;
    case 2:
      switch (computerChoice) {
        case 0:
          winner = "Computer";
          scores[1] = scores[1] + 1;
          break;
        case 1:
          winner = "You;";
          scores[0] = scores[0] + 1;
          break;
        case 2:
          break;
      }
      break;
  }
  console.log(scores);
  playerScore.textContent = scores[0];
  compScore.textContent = scores[1];

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
