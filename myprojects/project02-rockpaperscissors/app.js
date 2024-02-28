//Creating variables
const icons = document.querySelectorAll(".icon");
const computerChoices = ["rock", "paper", "scissors"];

let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];//creating a variable to store computer choice

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

let playerCount = 0;
let computerCount = 0;

const currentResult = document.querySelector("#result");
const resetButton = document.querySelector(".reset-btn");


//creating function to compare results
function whoWins(playerChoice, computerChoice) {
  //rock conditions
  if (playerChoice === "rock" && computerChoice === "rock") {
    console.log("Its a Draw");
    return "draw";
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("Computer wins");
    return "computer";
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("Player wins");
    return "player";
  }
  //paper conditions
  if (playerChoice === "paper" && computerChoice === "paper") {
    console.log("It's a draw");
    return "draw";
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer wins");
    return "computer";
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("Player wins");
    return "player";
  }
  //scissors conditions
  if (playerChoice === "scissors" && computerChoice === "scissors") {
    console.log("Its a Draw");
    return "draw";
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer wins");
    return "computer";
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("Player wins");
    return "player";
  }
}

//Creating function to add the score
function setScore(value) {

  if (value === "player") {
    playerCount++;
    playerScore.textContent = playerCount;
    currentResult.textContent = `You win! Computer picked ${computerChoice}`
    
  }
  if (value === "computer") {
    computerCount++;
    computerScore.textContent = computerCount;
    currentResult.textContent = `Computer win! Computer picked ${computerChoice}`;
  }
  if (value === "draw") {
    currentResult.textContent = `It's a Draw! Computer picked ${computerChoice}`;

  }
}

//Adding event listener
icons.forEach(function (element) {
  element.addEventListener("click", function () {
    //Storing the choice the player makes
    let playerChoice = element.classList[3];
    console.log(`Player choice is: ${playerChoice}`);

    //creating a variable to store computer choice
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(`Computer choice is: ${computerChoice}`);

    //Calling function to see who wins and assigning to a variable
    let whoWin = whoWins(playerChoice, computerChoice);
    console.log(whoWin);

    //Calling function to set the score
    setScore(whoWin);


  });

});

//Making reset button work
resetButton.addEventListener("click",function(){
    playerScore.textContent = 0;
    computerScore.textContent = 0;


    playerCount = 0;
    computerCount = 0;

})