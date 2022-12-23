// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var numbercase = ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
var specialcharacters = ("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "<", ">", "?");

function generatePassword(){
  console.log("Hey! You clicked the button!")

//1. Prompt the user for the password criteria
  var PasswordLength = window.prompt("Choose a length between 8 and 128");
  PasswordLength = parseInt(PasswordLength);

  //   a. Passwordlength 8 < 128
  if (PasswordLength < 8 || PasswordLength > 128) {window.alert('Passorrd must be between 8 and 128');
  return;
}
 
//    b. lowercase, uppercase, numbers, special characters
  var lowercaseConfirmation = window.confirm("Would you like a lower case in the password?");

    var uppercaseConfirmation = window.confirm("Would you like a upper case in the password?");

    var numericalcaseConfirmarion = window.confirm("Would you like numbers in the password?");

    var specialcaseConfirmarion = window.confirm("Would you like special characters in the password?");


//2. Validate the input.

if (!lowercaseConfirmation && !uppercaseConfirmation && !numericalcaseConfirmarion && !specialcaseConfirmarion) 
{window.alert("Must choose a character type!");
}
else if (lowercaseConfirmation && uppercaseConfirmation && specialcaseConfirmarion && numericalcaseConfirmarion)
{casechosen = lowercase + uppercase + specialcharacters + numbercase;}
else if (lowercaseConfirmation && uppercaseConfirmation && numericalcaseConfirmarion) {
casechosen = lowercase + uppercase + numbercase + specialcharacters; 
}
else if (lowercaseConfirmation && uppercaseConfirmation && specialcaseConfirmation) {
casesChosen = lowerCase + upperCase + specialCharacters;
} 
else if (lowercaseConfirmation && numericalcaseConfirmation && specialcaseConfirmation) {
casesChosen = lowerCase + numberCase + specialCharacters;
} 
else if (uppercaseConfirmation && numericalcaseConfirmation && specialcaseConfirmation) {casesChosen = upperCase + numberCase + specialCharacters;
} 
else if (lowercaseConfirmation && uppercaseConfirmation) {casesChosen = lowerCase + upperCase;
} 
else if (lowercaseConfirmation && numericalcaseConfirmation) {casesChosen = lowerCase + numberCase;
} 
else if (lowercaseConfirmation && specialcaseConfirmation) {
casesChosen = lowerCase + specialCharacters;
} else if (uppercaseConfirmation && numericalcaseConfirmation) {
casesChosen = upperCase + numberCase;
} else if (uppercaseConfirmation && specialcaseConfirmation) {
casesChosen = upperCase + specialCharacters;
} else if (numericalcaseConfirmation && specialcaseConfirmation) {
casesChosen = numberCase + specialCharacters;
} else if (lowercaseConfirmation) {
casesChosen = lowerCase;
} else if (uppercaseConfirmation) {
casesChosen = upperCase;
} else if (numericalcaseConfirmation) {
casesChosen = numberCase;
} else {
casesChosen = specialCharacters;
}


//4. Display password to the page.
  return "generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
