//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
$(document).ready(function() {

$("#userChoice").click(function() {

                var userChoice = $("input").val().toLowerCase();

                var choices = ["rock", "paper", "scissors"];

                if (userChoice === choices[0]) {

                        $("#uc").html('<img src="images/rock.png">');
                        $("#uc").append("rock");

                }
                else if (userChoice === choices[1]) {

                        $("#uc").html('<img src="images/paper.png">');

                }
                else if (userChoice === choices[2])

                        $("#uc").html('<img src="images/scissors.png">');

        }
        else {

                $("#uc").html("Not valid!");

        }

        var computerChoice = [

                '<img src="images/paper.png">'

                '<img src="images/rock.png">'

                '<img src="images/scissors.png">'
        ];

        if (choices.includes(userChoice)) {
                var x = Math.ceil(Math.random() * 3);

                if (x <= 1) {
                        $("#pc").html(computerChoice[0]);
                }
                else if (x <= 2) {
                        $("#pc").html(computerChoice[1]);
                }
                else if (x <= 3) {
                        $("#pc").html(computerChoice[2]);
                }
                else
                        $("#pc").html("Not Valid!");
}


var winner = ["you win", "computer wins", "tie"];




});


});

$('#myModal').on('shown.bs.modal', function() {
$('#myInput').trigger('focus')
})
});

//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION
