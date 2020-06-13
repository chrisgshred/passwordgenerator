// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var spChars = ["!","@","#","$","%","&","?"];
  var numChars = ["1","2","3","4","5","6","7","8","9"];
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


function generatePassword(){
  var userInput = prompt("Please input password length desired (8-128)");

  if (userInput < 8 || userInput > 128) {
    alert("please input a number between 8 and 128")
  }


}

generateBtn.addEventListener("click", writePassword);

// var randomSpCharsIndex = Math.floor(Math.random() * spChars.length);
// var randomSpChars = spChars[randomSpCharsIndex];

// var randomNumCharsIndex = Math.floor(Math.random() * numChars.length);
// var randomNumChars = numChars[randomNumCharsIndex];

// var randomUpperCharsIndex = Math.floor(Math.random() * upperChars.length);
// var randomUpperChars = upperChars[randomUpperCharsIndex];

// var randomLowerCharsIndex = Math.floor(Math.random() * lowerChars.length);
// var randomLowerChars = lowerChars[randomLowerCharsIndex];



