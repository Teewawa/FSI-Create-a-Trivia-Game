// Your Code Here
//Get the user's name
let userName = window.prompt("Please enter your name.");
let userScore = 0;
let playAgain = true;

//Function to play game
function playGame() {
  //Prompt the user with each question
  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    let question = questions[i];
    let userAnswer = window.prompt(question.text);
    if (userAnswer === question.correctAnswer) {
      userScore = userScore + 10;
      console.log("Correct");
    }
  }
  window.alert("Your score is: " + userScore);
}
while (playAgain === true) {
  playGame();
  let userChoice = window.prompt(
    "Would you like to play the game again? Answer yes or no"
  );
  if (userChoice === "yes") {
    playAgain = true;
  } else {
    playAgain = false;
    window.alert("Thanks for playing the game!");
  }
}
