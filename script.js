let gamePanel = document.querySelector(".game");
let gameOnPanel = document.querySelector(".gameOn");
let gameEndPanel = document.querySelector(".gameEnd");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let replayButton = document.getElementById("replay");
let restartButton = document.getElementById("restart");
let resultText = document.querySelector(".gameEnd > span");
const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");

let game = false;
const choicesArray = ["Rock.png", "Paper.png", "Scissor.png"];

let scores = [0, 0];
playerScore.textContent = scores[0];
compScore.textContent = scores[1];

const playGame = (playerChoice) => {
  game = true;
  const player = document.createElement("div");
  player.classList.add("player");
  const computer = document.createElement("div");
  computer.classList.add("computer");
  gamePanel.replaceChildren();
  gamePanel.appendChild(player);
  gamePanel.appendChild(computer);

  let computerChoice = Math.floor(Math.random() * 3);
  let text = "It's a draw!";
  switch (playerChoice) {
    case 0:
      switch (computerChoice) {
        case 0:
          break;
        case 1:
          text = "Computer won!";
          scores[1] = scores[1] + 1;
          break;
        case 2:
          text = "You won!";
          scores[0] = scores[0] + 1;
          break;
      }
      break;
    case 1:
      switch (computerChoice) {
        case 0:
          text = "You won!";
          scores[0] = scores[0] + 1;
          break;
        case 1:
          break;
        case 2:
          text = "Computer won!";
          scores[1] = scores[1] + 1;
          break;
      }
      break;
    case 2:
      switch (computerChoice) {
        case 0:
          text = "Computer won!";
          scores[1] = scores[1] + 1;
          break;
        case 1:
          text = "You won!";
          scores[0] = scores[0] + 1;
          break;
        case 2:
          break;
      }
      break;
  }

  computer.classList.add("right");
  player.classList.add("left");
  setTimeout(function () {
    computer.style.background = `url(./assets/${choicesArray[computerChoice]})`;
    computer.style.backgroundSize = "contain";
    player.style.background = `url(./assets/${choicesArray[playerChoice]})`;
    player.style.backgroundSize = "contain";
    playerScore.textContent = scores[0];
    compScore.textContent = scores[1];
    resultText.innerHTML = text;
    game = false;
  }, 1600);
  gameOnPanel.style.display = "none";
  gameEndPanel.style.display = "flex";
  resultText.innerHTML = "Playing...";
};

rockButton.onclick = () => {
  playGame(0);
};
paperButton.onclick = () => {
  playGame(1);
};
scissorsButton.onclick = () => {
  playGame(2);
};

const replay = () => {
  gameEndPanel.style.display = "none";
  gameOnPanel.style.display = "flex";
  document.querySelector(
    ".computer"
  ).style.background = `url(./assets/${choicesArray[0]})`;
  document.querySelector(".computer").classList.remove("right");
  document.querySelector(".computer").style.backgroundSize = "contain";
  document.querySelector(
    ".player"
  ).style.background = `url(./assets/${choicesArray[0]})`;
  document.querySelector(".player").style.backgroundSize = "contain";
  document.querySelector(".player").classList.remove("left");
};

replayButton.onclick = () => {
  if (!game) {
    replay();
  }
};
restartButton.onclick = () => {
  if (!game) {
    scores = [0, 0];
    playerScore.textContent = scores[0];
    compScore.textContent = scores[1];
    replay();
  }
};
