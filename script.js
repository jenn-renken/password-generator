// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Most of the code will go inside this function!
  return 'superSecretPassword';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
