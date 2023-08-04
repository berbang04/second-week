const theChoises = ["rock", "paper", "scissors"];
const number = prompt("The maximum score");
var pcPoint = 0;
var myPoint = 0;

function game() {
    var indiss = Math.floor(Math.random() * theChoises.length);
    var choice = theChoises[indiss];
    var myChoice = prompt("Please enter ur choice");
    myChoice=myChoice.toLowerCase()
    if (myChoice == "rock") {
        console.log("******************");
        console.log("Computer=" + choice);
        if (choice == "rock") {
            console.log("draw");
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);
        } else if (choice == "paper") {

            pcPoint = pcPoint+1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);
        } else if (choice == "scissors") {

            myPoint = myPoint+1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);
        }
    } else if (myChoice == "paper") {
        console.log("******************");
        console.log("Computer=" + choice);
        if (choice == "rock") {
            myPoint = myPoint+1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "paper") {
            console.log("draw");
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "scissors") {
            pcPoint = pcPoint+1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);


        }
    } else if(myChoice=="scissors"){
        console.log("******************");
        console.log("Computer=" + choice);
        if (choice == "scissors") {
            console.log("draw");
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "paper") {
            myPoint = myPoint+1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "rock") {

            pcPoint = pcPoint+1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        }
    }
}

while (true) {
    game();
    if (pcPoint == number) {
        prompt("Game is over and u lost");
        break;
    }
    if (myPoint == number) {
        prompt("Game is over and u won");
        break;
    }
}