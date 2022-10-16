//NEW_PROBLEMLIST_PAGE=1; gr_user_id=bb7064ca-da50-449b-9440-3a12d4719db3; csrftoken=9zZbVQeL88G6yFM20Mg1mFr4t6gBUKScEXnuhEKKWJXn3KnAv6EGgoVy9ghtlFFP; messages="db9824cf64a9872c0d3235629c81429e8fe6d094$[[\"__json_message\"\0540\05425\054\"Successfully signed in as liandjessica.\"]]"; 87b5a3c3f1a55520_gr_last_sent_cs1=liandjessica; __stripe_mid=5d7dc0f2-5cf1-41ec-9381-f2a37f74f75a0a8ef3; _gid=GA1.2.232767116.1664403470; c_a_u=bGlhbmRqZXNzaWNh:1odfmM:WUIUm5ilaENqMlUDk6hPU6-_n3o; 87b5a3c3f1a55520_gr_session_id=d8f2be47-f0cc-4005-a10b-3fb536d11d7d; 87b5a3c3f1a55520_gr_last_sent_sid_with_cs1=d8f2be47-f0cc-4005-a10b-3fb536d11d7d; 87b5a3c3f1a55520_gr_session_id_d8f2be47-f0cc-4005-a10b-3fb536d11d7d=true; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMjM0NzI2MSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImJmYzYyZTZlNDk0OWFmMWMyMTRjMGY2MjA3YjA3N2FiNzFiYjJjZDIiLCJpZCI6MjM0NzI2MSwiZW1haWwiOiJsaWFuZGplc3NpY2FAZ21haWwuY29tIiwidXNlcm5hbWUiOiJsaWFuZGplc3NpY2EiLCJ1c2VyX3NsdWciOiJsaWFuZGplc3NpY2EiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvYXZhdGFycy9hdmF0YXJfMTY2Mzc3NzY0Mi5wbmciLCJyZWZyZXNoZWRfYXQiOjE2NjQ0MDM0NjcsImlwIjoiMTI5LjIuMTgwLjEyMiIsImlkZW50aXR5IjoiNjIwZWVhY2NmMGYwM2RjNTFlYTVhOWYxZjNmYjQzNjAiLCJzZXNzaW9uX2lkIjoyODIyODkwOH0.5Kpnap_ma5rwjLMdt4lizxK64FKPwawv3Dso31VXAz4; __stripe_sid=70af8dda-889c-4efc-9539-24482b3622a5e3a7a8; 87b5a3c3f1a55520_gr_cs1=liandjessica; _ga_CDRWKZTDEX=GS1.1.1664458678.2.1.1664458773.0.0.0; _ga=GA1.2.592198010.1663955930; _gat=1
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
