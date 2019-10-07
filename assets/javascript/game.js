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

var scoreTally = 0;
var targetVal = 0;
var winTally = 0;
var lossTally = 0;

//-----------------------------------------functions---------------------------
//generates and displays target number
function generateTargetNum() {
    result = Math.floor(Math.random() * (120 - 20)) + 19;
    targetVal = result;
    targetNumber.text(result);
};
//generates random crystal value
function generateCrystalVal() {
    return Math.floor(Math.random() * 12 + 1);
};
//sets new crystal values
function resetCrystals() {
    diamondValue = generateCrystalVal();
    rubyValue = generateCrystalVal();
    lapisValue = generateCrystalVal();
    amethystValue = generateCrystalVal();
    wins.text(winTally);
    losses.text(lossTally);

    console.log(diamondValue);
    console.log(rubyValue);
    console.log(lapisValue);
    console.log(amethystValue);
};
//adds gem value to user's score
function tallyScore(gemVal) {
    scoreTally += gemVal;
    userScore.text(scoreTally);
};
//checks score against target number
//if score equals the target number, player wins, increment wins, new game
//if score is less than the target number, repeat the click stuff
//if score is more than the target number, player loses, increment losses, new game

function scoreCheck() {
    if (scoreTally === targetVal) {
        winTally++;
        mainGame();
    } else if (scoreTally > targetVal) {
        lossTally++;
        mainGame();
    };
};




//-----------------------------------------Main Game---------------------------
function mainGame() {
    scoreTally = 0;
    userScore.text(scoreTally);
    //on game start, generate a random number between 19-120 and display in target number div
    generateTargetNum();

    //generate a random number for each crystal button
    resetCrystals();
    //when clicked, add the crystal's number to the player's total
    //after each click, check score against the target number
    if (scoreTally < targetVal) {
        diamond.on("click", function () {
            tallyScore(diamondValue);
            scoreCheck();
        });

        ruby.on("click", function () {
            tallyScore(rubyValue);
            scoreCheck();
        });

        lapis.on("click", function () {
            tallyScore(lapisValue);
            scoreCheck();
        });

        amethyst.on("click", function () {
            tallyScore(amethystValue);
            scoreCheck();
        });
    };

};

mainGame();



