function getUserInput()  {
    var stuff = prompt('Guess a number ');
    return stuff;
}
function outputChoice(size, number) {
 alert(number + ' was to ' + size);
}

var randomNumber = Math.floor(Math.random()*11);
var userInput = getUserInput();

while(userInput != randomNumber) {
  if(userInput > randomNumber){
    outputChoice('BIG', userInput);
    userInput = getUserInput();
  }
  else {
    outputChoice('SMALL', userInput);
    userInput = getUserInput();
  }
}

alert("Congrats!!! the number was " + randomNumber);
