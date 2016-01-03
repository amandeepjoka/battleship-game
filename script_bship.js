var view = {

  displayMiss : function(location) {                                        
    var locationMiss = document.getElementById(location);
    locationMiss.setAttribute("class","miss");
  } ,//displays a miss 


  displayHit : function(location) {
    var locationHit = document.getElementById(location);
    locationHit.setAttribute("class","hit");
  } ,//displays hit on the board


   displayMessage : function(msg) {
     var messageArea = document.getElementById("messageArea");
     messageArea.innerHTML = msg;
   }  //displays string message in display area

};

var model = {
   boardSize : 7,
  numShips : 3,
  shipLength : 3,
  shipSunk : 0,
  ships : [
  {locations : ["10","20","30"],
    hits : ["","",""]} , 
  {  locations : ["32","33","34"],
  hits : ["","",""]} , 
   {locations : ["63","64","65"],
   hits : ["","",""]}
   ],
  fire : function(guess){
    for (var i=0; i<this.numShips ; i++ ) {
      var ship = this.ships[i];
      var locations = ship.locations;
      var index = locations.indexOf(guess);
      if (index >=0){
        ship.hits[index]="hit";
        view.displayHit(guess);
        view.displayMessage("you got one of them......");
        if (this.isSunk(ship)){
          view.displayMessage("target neutralized")
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("you missed...try harder");
    return false;
  },
  isSunk : function(ship){
    for(var i =0; i<this.shipLength;i++)
      {
        if (ship.hits[i] !== "hit"){return false;}
      }
    return true;
  }
};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
					view.displayMessage("You sank all my battleships, in " + this.guesses + " 

guesses");
			}
		}
	}
}


// helper function to parse a guess from the user

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}


// event handlers

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value.toUpperCase();

	controller.processGuess(guess);

	guessInput.value = "";
}
window.onload = init;

function init() {
	// Fire! button onclick handler
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	// handle "return" key press
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
}
function handleKeypress(e)
{
var fireButton = document.getElementById("fireButton");
if (e.keyCode === 13)
{
fireButton.click();
return false
}
}
