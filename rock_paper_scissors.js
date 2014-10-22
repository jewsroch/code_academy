var userChoice, options, computerChoice;

var start = function() {
    userChoice = prompt("Do you choose rock, paper or scissors?");
    options = ["rock", "paper", "scissors"]
    
    checkInput(options, userChoice);
    
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } 
    
    console.log("Computer: " + computerChoice);
    console.log("You: " + userChoice);
    console.log(compare(userChoice, computerChoice));
}

var checkInput = function() {
    if (options.indexOf(userChoice) === -1) {
        userChoice = prompt("Please enter a valid option. rock, paper, or scissors?");
        
        checkInput(options, userChoice);
    }
}

var compare = function(choice1, choice2){
    if (choice1 === choice2) {
        console.log("The result is a tie!");
        start();
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors win";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors win";
        }
    }
}

start();