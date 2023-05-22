


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("What is the length of the password? Choose from 8-128", "8")
  var numLength = parseInt(length)
  var passwordText = document.getElementById("password")
  
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const number = "1234567890"
  const symbol = "!@#$%^&*()[]\<>,./=+-"
  const total = upperCase + lowerCase + number + symbol;
  
  let password = "";

  while(numLength > password.length){
    password += total[Math.floor(Math.random() * total.length)]
  };
  passwordText.value = password;
}

function demo() {
  var passwordText = document.getElementById("password")
  passwordText.value = "Hello World";
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// generateBtn.addEventListener("click", demo);

