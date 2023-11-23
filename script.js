  


 var buttonColours = ["red", "blue", "green", "yellow"];

 var gamePattern = [];
 
function nextSequence() {
     
    var randomnumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);


    $("#" +randomChosenColour).animate({
      height: '250px',
      width: '250px'
    }).fadeIn("2000");

    var soundplay = new Audio("sound/"+ randomChosenColour +".mp3");
    soundplay.play(); 
 }


$(".btn").on("click", function (){
  alert("hi")
});
 
