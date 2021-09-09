var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// password variable values
lowerCase = "abcdefghijklmnopqrstuvwxyz";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
number = "0123456789";
character = "!@#$%^&*-+=";

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  enter = parseInt(window.prompt("Choose a character length between 8 and 128 characters"));
    // validation
    if (!enter) {
      alert("This needs a value");

    } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128 characters"));

    } else {
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain uppercase letters?");
      confirmLowercase = confirm("Will this contain lowercase letters?");
    };

    // validation for no selection
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      alert("You must choose criteria!");
    }

    var choices = "";

      if (confirmCharacter) {
        choices += character;
      }
      if (confirmNumber) {
        choices += number;
      }
      if (confirmUppercase) {
        choices += upperCase;
      }
      if (confirmLowercase) {
        choices += lowerCase;
      }

  var password = "";

  // random selection
  for (var i =0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password += pickChoices;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
