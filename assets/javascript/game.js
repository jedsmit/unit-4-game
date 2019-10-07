//element variables
var diamond = $("#diamond");
var ruby = $("#ruby");
var lapis = $("#lapis");
var amethyst = $("#amethyst");
var targetNumber = $("#target-number");
var userScore = $("#user-score");
var wins = $("#wins");
var losses = $("#losses");

//button values
var diamondValue = 0;
var rubyValue = 0;
var lapisValue = 0;
var amethystValue = 0;

//functions

function generateTargetNum() {
    result = Math.floor(Math.random() * (120 - 20)) + 19;
    targetNumber.text(result);
};

generateTargetNum();


//on game start, generate a random number between 19-120
//display random number in target number div 
//generate a random number for each crystal button
//when clicked, add the crystal's number to the player's total
//after each click, check score against the target number
//if score equals the target number, player wins, increment wins, new game
//if score is less than the target number, repeat the click stuff
//if score is more than the target number, player loses, increment losses, new game


