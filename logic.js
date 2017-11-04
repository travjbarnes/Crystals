
//create game object with key:value pairs
var game =
{
  randomNumber: 0,
  crystalNumOne: 0,
  crystalNumTwo: 0,
  crystalNumFour: 0,
  crystalNumThree: 0,
  score: 0,
  wins: 0,
  losses: 0,
  gameStart: true,

  //getNumber function retrieves a random number from 100 - 200 and assigns the value
  //to the randomNumber key
  getNumber: function(){
    this.randomNumber = Math.floor(Math.random() * (200 - 100) + 100);
    return this.randomNumber;
  },

  //getCrysOne function retrieves a random number from 1 - 25 and assigns the value
  //to the crystalNumOne key
  getCrysOne: function(){
    this.crystalNumOne = Math.floor(Math.random() * (25 - 1) + 1);
    return this.crystalNumOne;
  },

  //getCrysTwo function retrieves a random number from 1 - 25 and assigns the value
  //to the crystalNumTwo key
  getCrysTwo: function(){
    this.crystalNumTwo = Math.floor(Math.random() * (25 - 1) + 1);
    return this.crystalNumTwo;
  },

  //getCrysThree function retrieves a random number from 1 - 25 and assigns the value
  //to the crystalNumThree key
  getCrysThree: function(){
    this.crystalNumThree = Math.floor(Math.random() * (25 - 1) + 1);
    return this.crystalNumThree;
  },

  //getCrysFour function retrieves a random number from 1 - 25 and assigns the value
  //to the crystalNumFour key
  getCrysFour: function(){
    this.crystalNumFour = Math.floor(Math.random() * (25 - 1) + 1);
    return this.crystalNumFour;
  },

}

//declare global variables to game object function values
var num = game.getNumber();
var one = game.getCrysOne();
var two = game.getCrysTwo();
var three = game.getCrysThree();
var four = game.getCrysFour();

//create accumulator and set to 0
var runningTotal = 0;

//ensure document loads
$("#document").ready(function(){

  //button click events
  $("#generate-button").on("click", function(){
    $("#random-number").html(num);
    game.gameStart = true;
    checkGameStart();
  })

  $("#crys-one").on("click", function(){
    runningTotal += one;
    $("#finalScore").html(runningTotal)
    gameProgress();
  })

  $("#crys-two").on("click", function(){
    runningTotal += two;
    $("#finalScore").html(runningTotal)
    gameProgress();
  })

  $("#crys-three").on("click", function(){
    runningTotal += three;
    $("#finalScore").html(runningTotal)
    gameProgress();
  })

  $("#crys-four").on("click", function(){
    runningTotal += four;
    $("#finalScore").html(runningTotal)
    gameProgress();
  })

  //checkGameStart function checks condition of game.gameStart function and disables or
  //enables the button to generate a random number
  function checkGameStart(){
     if(game.gameStart){
       $("#generate-button").disabled = true;
     }
     else {
       $("#generate-button").disabled = false;
       $(".crystal").disabled = true;
     }
  };

  /*
    gameProgress function compares the runningTotal accumulator against the random number
    and alerts user if they have won or lost.  If either condition is met, the game.Wins
    or game.Losses values are incremented accordingly, game.gameStart is set to false
    and functions for checkGameStart and gameRestart are run
  */
  function gameProgress(){
    if(runningTotal === num){
      alert("You won!");
      game.wins++;
      $("#wins").html(game.wins);
      game.gameStart = false;
      checkGameStart();
      gameRestart();
    }
    else if (runningTotal > num) {
      alert("You lost!");
      game.losses++;
      $("#losses").html(game.losses);
      game.gameStart = false;
      checkGameStart();
      gameRestart();
    }
  };

  //gameRestart resets the values of each variable and removes the values displayed on the screen
  function gameRestart(){
    runningTotal = 0;
    one = game.getCrysOne();
    two = game.getCrysTwo();
    three = game.getCrysThree();
    four = game.getCrysFour();
    num = game.getNumber();
    $("#finalScore").html("");
    $("#random-number").html("");
  };

})

//Main Process

startGame();
$("#blue").click(function() {
	alert("test");
});

$("#green").click(function() {
	alert("test");
});

$("#red").click(function() {
	alert("test");
});

$("#yellow").click(function() {
	alert("test");
});