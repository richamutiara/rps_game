function getComputerChoice() {
  const thecomputerChoice = ["rock", "paper", "scissors"];
  const theRandomChoice =
    thecomputerChoice[Math.floor(Math.random() * thecomputerChoice.length)];
  return theRandomChoice;
}

let pointComputer = 0;
let pointPlayer = 0;

function playRound(playerChoice, computerSelection) {
  if (playerChoice === "scissors" && computerSelection === "paper") {
    resultGame.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
    pointPlayer++;
    playerPoints.textContent = `${pointPlayer}`;
    computerPoints.textContent = `${pointComputer}`;
  } else if (playerChoice === "scissors" && computerSelection === "rock") {
    resultGame.textContent = `You lose! ${computerSelection} beats ${playerChoice}  `;
    pointComputer++;
    playerPoints.textContent = `${pointPlayer}`;
    computerPoints.textContent = `${pointComputer}`;
  } else if (playerChoice === "rock" && computerSelection === "paper") {
    resultGame.textContent = `You lose! ${computerSelection} beats ${playerChoice}  `;
    pointComputer++;
    playerPoints.textContent = `${pointPlayer}`;
    computerPoints.textContent = `${pointComputer}`;
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    resultGame.textContent = `You win! ${playerChoice} beats ${computerSelection}`;
    pointPlayer++;
    playerPoints.textContent = `${pointPlayer}`;
    computerPoints.textContent = `${pointComputer}`;
    playerPoints.textContent = `${pointPlayer}`;
  } else if (playerChoice === "paper" && computerSelection === "rock") {
    resultGame.textContent = `You win! ${playerChoice} beats ${computerSelection}`;
    pointPlayer++;
    playerPoints.textContent = `${pointPlayer}`;
    computerPoints.textContent = `${pointComputer}`;
  } else if (playerChoice === "paper" && computerSelection === "scissors") {
    resultGame.textContent = `You lose! ${computerSelection} beats ${playerChoice}  `;
    pointComputer++;
    playerPoints.textContent = `${pointPlayer}`;
    computerPoints.textContent = `${pointComputer}`;
  } else {
    resultGame.textContent = `Draw! No one get score`;
    playerPoints.textContent = `${pointPlayer}`;
    computerPoints.textContent = `${pointComputer}`;
  }
}

function theWinner(playerChoice, computerChoice) {
  if (pointPlayer === 5 || pointComputer === 5) {
    return playRound;
  }

  playRound(playerChoice, computerChoice);
  if (pointPlayer === 5) {
    resultPoint.textContent = `You Win! Your score ${pointPlayer} and the computer ${pointComputer}`;
  } else if (pointComputer === 5) {
    resultPoint.textContent = `You Lose! Your score ${pointPlayer} and the computer ${pointComputer}`;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    theWinner(playerSelection, computerSelection);
  });
});

const resultGame = document.querySelector(".informResult");
const resultPoint = document.querySelector(".pointMatch");
const playerPoints = document.querySelector("#playerPoint");
const computerPoints = document.querySelector("#computerPoint");
