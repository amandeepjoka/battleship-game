// Battle ship game using simple seven slots...
function init(){
var location1 = Math.floor(Math.random()*5);           // setting up counter and control units
var location2 = location1 + 1;
var location3 = location2 + 1;
var isDown = false;  
var guess;
var guesses = 0;
var hits = 0;
while (isDown == false)    // here begins the game engine design....
{
 guess =  prompt("ready , aim , smoke em up! (enter a number within 0-6)");   // user interaction for input...
 if (guess < 0 || guess > 6)                  // checking validity of input...
 { alert("shoot the ships idiot!");
 }
 else                       // impact analysis of input...
 {
   guesses += 1;
   if (guess == location1)
   { 
     hits += 1;
     alert("target neutralized....nice job rookie! now blow the rest of em.");
     location1 = null;
   }
   if (guess == location2)
   { 
     hits += 1;
     alert("target neutralized....nice job rookie! now blow the rest of em.");
     location2 = null;
   }
   if (guess == location3)
   { 
     hits += 1;
     alert("target neutralized....nice job rookie! now blow the rest of em.");
     location3 = null;
   }
 }
 if (hits == 3)           // stopping the gaming engine...
  {
   isDown = true;
   alert("all ships down to hell......good work comerade");
  }
  
} 

alert("shots taken...."+guesses );      // aftermath and stats...
alert("accuracy :"+(guesses/3));
if (guesses <= 4 )
{
 alert("you owned them!");
} 
else
{
 alert("nice try , though.....it could have been better")
}
}
window.onload = init;
