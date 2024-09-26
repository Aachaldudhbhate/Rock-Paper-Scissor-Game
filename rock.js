let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
// rock,paper,scissors give input anyone random
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. play again";

}

const showWinner = (userWin) => {
   if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = "You win!";
    msg.style.backgroundColor ="green";
} else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
}
}

// comp choice and compare with user choice

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    // generate computer choice modular
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
 
    if(userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper 
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
           userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }


};

// user choice select
choices.forEach((choice) => {
    console.log("choice");
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked",userChoice);
       playGame(userChoice);
    });
})