function getUserInput()  {
  return $('#user_guess').val();
}

function outputChoice(size, number) {
  $('#output_area').text(number + ' was to ' + size);
}

var randomNumber = Math.floor(Math.random() * 11);


$('#submit_guess').click(function(e){
  e.preventDefault();
  var userInput = parseInt(getUserInput());

    if (userInput > randomNumber) {
      outputChoice('BIG', userInput);
    } else if (userInput < randomNumber)  {
      outputChoice('SMALL', userInput);
    } else {
      alert("Congrats!!! the number was " + randomNumber);
    }

});



