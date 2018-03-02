var wins =0;
var losses =0;
var guessesLeft =9;
var computerguess;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userinput = [];
var userclicked;


computerguess = letters[Math.floor(Math.random()*letters.length)];


document.onkeyup = function() {click()};

 click = function() {

    var userclicked = event.key;

    if (computerguess === userclicked)  {
        alert("You have the same letter!");
        wins ++;
        wins = document.getElementById("wins") ;

    }else {
        alert("Guess Again!");
        guessesLeft--;
        losses++
        losses = document.getElementById("losses");
    }
}






