function getComputerChoice() {
  const thecomputerChoice = ["rock", "paper", "scissors"];
  const theRandomChoice =
    thecomputerChoice[Math.floor(Math.random() * thecomputerChoice.length)];
  return theRandomChoice;
}

let pointComputer = 0;
let pointPlayer = 0;
let playGame = 5;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    pointPlayer++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}  `);
    pointComputer++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}  `);
    pointComputer++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    pointPlayer++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    pointPlayer++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}  `);
    pointComputer++;
  } else {
    console.log(`Draw! ${computerSelection} vs ${playerSelection}`);
  }
}

function game() {
  for (let i = 0; i < playGame; i++) {
    let playerInput = prompt("what your choice? (just paper/rock/scissors)");
    let playerSelection = playerInput.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (pointPlayer > pointComputer) {
    console.log(`You Win! your score ${pointPlayer} and ${pointComputer}`);
  } else {
    console.log(`You Lose! your score ${pointPlayer} and ${pointComputer}`);
  }
}

game();
