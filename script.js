  


 var buttonColours = ["red", "blue", "green", "yellow"];

 var gamePattern = [];

 var started = false;

 var userClickedPattern = [];

 /*var btnclick = document.querySelectorAll(".btn").length;

for ( var i = 0; i <= btnclick; i++) {


document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  
  console.log(userClickedPattern);
  



});
 
}*/





$(".btn").click( function(){
   var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);

});


 
function nextSequence() {

  level++;

  $("#level-title").text("Level " + level);
     
    var randomnumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomnumber];

    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //var soundplay = new Audio("sound/"+ randomChosenColour +".mp3");
    //soundplay.play(); 
    playSound(randomChosenColour);
 }


 function playSound(name) {
  var soundplay = new Audio("sounds/"+ name +".mp3");
  soundplay.play(); 
 }

 function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");

  setTimeout(
    function(){
      $("#" + currentColour).removeClass("pressed");
    }, 100
  );

 }

 var level = 0;


 $(document).keypress(function(){
  
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;

  }

 });