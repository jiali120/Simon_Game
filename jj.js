
var gamePattern = [];

var buttonColour = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random())*4;
    var randomChosenColour =buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);

    $ ("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

}