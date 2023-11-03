var buttonColors=["c1","c2","c3","c4"];
var gamePattern=[];
var userClickedPattern=[];
var start=false;
var level=0;

$(document).keypress(function() {
        if(!start){
            $('.level-title').text("Level "+level);
            nextsequence();
            start=true;
        }
    }
);

$(".btn").click(function() {
    var userChosenColour=$(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});



function nextsequence()
{
    userClickedPattern=[];
    $(".level-title").text("Level " + level);
    level++;
var x=Math.floor(Math.random()*4);
var randomChosenColor=buttonColors[x];
gamePattern.push(randomChosenColor);
$("#"+ randomChosenColor).
fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
    console.log("success");
    

    if(userClickedPattern.length===gamePattern.length){
        setTimeout(()=>{
        nextsequence();
        },1000)
    }
}
    else{
        playSound("wrong");
        $("body").addClass("gameOver");
        setTimeout(function(){
            $("body").removeClass("gameOver");
        },200);

        $('.level-title').text("Game Over, Press any key to restart");
        startOver();
    }

    

}


function startOver(){
    level=0;
    start=false;
    gamePattern=[];
}








