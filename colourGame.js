var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", reset);

function init() {
   setUpModeButtons();
   setUpSquares();
   reset();
}

function setUpSquares() {
   for(var i = 0; i < squares.length; i++){
      // add click listeners to squares 
      squares[i].addEventListener("click", function() {
         // grab colour of clicked square
         clickedColour = this.style.backgroundColor;
         // compare colour to pickedColour
         if(clickedColour === pickedColour){
            messageDisplay.textContent = "Correct!";
            changeColours(clickedColour);
            h1.style.backgroundColor = clickedColour;
            resetButton.textContent = "Play Again?";
         }
         else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
         }
      });
   }
}

function setUpModeButtons() {
   for(var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function() {
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         this.classList.add("selected");
         // code has the same function as if else statement below
         this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
         // if(this.textContent === "Easy"){
         //    numSquares = 3;
         // }
         // else {
         //    numSquares = 6;
         // }
         reset();
      });
   }
}

function reset() {
   // generate new colours
   colours = generateRandomColours(numSquares);
   // pick new random colour
   pickedColour = pickColour();
   // change colourDisplay
   colourDisplay.textContent = pickedColour;
   // change colours of squares
   for(var i = 0; i < squares.length; i++){
      if(colours[i]){
         squares[i].style.display = "block";
         squares[i].style.backgroundColor = colours[i];
      }
      else {
         squares[i].style.display = "none";
      }
   }
   h1.style.backgroundColor = "steelblue";
   messageDisplay.textContent = "";
   resetButton.textContent = "New Colours"
}

function changeColours(colour) {
   // loop through all squares
   for(var i = 0; i < squares.length; i++){
      // change each colour to match colour
      squares[i].style.backgroundColor = colour;
   }
}

function pickColour() {
   var random = Math.floor(Math.random() * colours.length);
   return colours[random];
}

function generateRandomColours(num) {
   // make array
   var arr = [];
   // add num random colours to array
   for(var i = 0; i < num; i++){
      // get random colour and push into array
      arr.push(randomColour());
   }
   // return array
   return arr;
}

function randomColour() {
   // pick a red from 0-255
   var r = Math.floor(Math.random() * 256);
   // pick a green from 0-255
   var g = Math.floor(Math.random() * 256);
   // pick blue from 0-255
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

// easyBtn.addEventListener("click", function() {
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    numSquares = 3;
//    colours = generateRandomColours(numSquares);
//    pickedColour = pickColour();
//    colourDisplay.textContent = pickedColour;
//    for(var i = 0; i < squares.length; i++){
//       if(colours [i]){
//          squares[i].style.backgroundColor = colours[i];
//       }
//       else {
//          squares[i].style.display = "none";
//       }
//    }
// });

// hardBtn.addEventListener("click", function() {
//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");
//    numSquares = 6;
//    colours = generateRandomColours(numSquares);
//    pickedColour = pickColour();
//    colourDisplay.textContent = pickedColour;
//    for(var i = 0; i < squares.length; i++){
//          squares[i].style.backgroundColor = colours[i];
//          squares[i].style.display = "block";
//    }
// });
