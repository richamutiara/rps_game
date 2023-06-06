function getComputerChoice() {
  const thecomputerChoice = ["rock", "paper", "scissors"];
  const theRandomChoice =
    thecomputerChoice[Math.floor(Math.random() * thecomputerChoice.length)];
  return theRandomChoice;
}

let pointComputer = 0;
let pointPlayer = 0;
let playGame = 5;
let playerSelection = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "scissors" && computerSelection === "paper") {
    resultGame.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    pointPlayer++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultGame.textContent = `You lose! ${computerSelection} beats ${playerSelection}  `;
    pointComputer++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resultGame.textContent = `You lose! ${computerSelection} beats ${playerSelection}  `;
    pointComputer++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resultGame.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    pointPlayer++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultGame.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    pointPlayer++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultGame.textContent = `You lose! ${computerSelection} beats ${playerSelection}  `;
    pointComputer++;
  } else {
    resultGame.textContent = `Draw! No one get score`;
  }
}

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
  });
});

const resultGame = document.querySelector(".result");
