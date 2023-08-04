const theChoises = ["rock", "paper", "scissors"];
let maxPoints = prompt("The maximum score");
let pcPoint = 0;
let myPoint = 0;

function game() {
    let indiss = Math.floor(Math.random() * theChoises.length);
    let choice = theChoises[indiss];
    let myChoice = prompt("Please enter ur choice");
    myChoice = myChoice.toLowerCase()
    if (myChoice == "rock") {
        console.log("******************");
        console.log("Computer=" + choice);
        if (choice == "rock") {
            console.log("draw");
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);
        } else if (choice == "paper") {

            pcPoint = pcPoint + 1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);
        } else if (choice == "scissors") {

            myPoint = myPoint + 1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);
        }
    } else if (myChoice == "paper") {
        console.log("******************");
        console.log("Computer=" + choice);
        if (choice == "rock") {
            myPoint = myPoint + 1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "paper") {
            console.log("draw");
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "scissors") {
            pcPoint = pcPoint + 1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);


        }
    } else if (myChoice == "scissors") {
        console.log("******************");
        console.log("Computer=" + choice);
        if (choice == "scissors") {
            console.log("draw");
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "paper") {
            myPoint = myPoint + 1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        } else if (choice == "rock") {

            pcPoint = pcPoint + 1;
            console.log("Computer=" + pcPoint + "- Your score=" + myPoint);

        }
    }
}

while (maxPoints) {
    game();
    if (pcPoint == maxPoints) {
        prompt("Game is over and u lost");
        break;
    }
    if (myPoint == maxPoints) {
        prompt("Game is over and u won");
        break;
    }
}