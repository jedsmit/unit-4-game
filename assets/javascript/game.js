$(document).ready(function () {


    //button values
    var diamondValue;
    var rubyValue;
    var lapisValue;
    var amethystValue;
    //counters
    var scoreTally = 0;
    var targetVal;
    var winTally = 0;
    var lossTally = 0;

    //-----------------------------------------functions---------------------------
    //generates and displays target number
    function generateTargetNum() {
        var result = Math.floor(Math.random() * (120 - 20)) + 19;
        targetVal = result;
        $("#target-number").text(result);
    };
    //generates random crystal value
    function generateCrystalVal() {
        return Math.floor(Math.random() * (12 - 1)) + 1;
    };
    //sets new crystal values
    function resetCrystals() {
        diamondValue = generateCrystalVal();
        rubyValue = generateCrystalVal();
        lapisValue = generateCrystalVal();
        amethystValue = generateCrystalVal();
        scoreTally = 0;
        $("#user-score").text(scoreTally);
        //on game start, generate a random number between 19-120 and display in target number div

        generateTargetNum();
        //test logs
        //console.log(diamondValue);
        //console.log(rubyValue);
        //console.log(lapisValue);
        //console.log(amethystValue);
    };
    //adds gem value to user's score
    function tallyScore(gemVal) {
        scoreTally += gemVal;
        $("#user-score").text(scoreTally);
    };
    //checks score against target number
    //if score equals the target number, player wins, increment wins, new game
    //if score is less than the target number, repeat the click stuff
    //if score is more than the target number, player loses, increment losses, new game

    function scoreCheck() {
        if (scoreTally === targetVal) {
            winTally++;
            $("#wins").text(winTally);
            resetCrystals();

        } else if (scoreTally > targetVal) {
            lossTally++;
            $("#losses").text(lossTally);
            resetCrystals();
        } else {
            return;
        };

    };




    //-----------------------------------------Main Game---------------------------
    function mainGame() {

        resetCrystals();

        //when clicked, add the crystal's number to the player's total
        //after each click, check score against the target number

        $("#diamond").on("click", function () {
            tallyScore(diamondValue);
            scoreCheck();
        });

        $("#ruby").on("click", function () {
            tallyScore(rubyValue);
            scoreCheck();
        });

        $("#lapis").on("click", function () {
            tallyScore(lapisValue);
            scoreCheck();
        });

        $("#amethyst").on("click", function () {
            tallyScore(amethystValue);
            scoreCheck();
        });

    };





    mainGame();


});
