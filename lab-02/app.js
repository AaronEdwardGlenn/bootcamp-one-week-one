import { guessResult } from './autre.js';

let correctNumber = Math.floor(Math.random() * 20 + 1); 
let guessN = 0; 

document.getElementById('userGuess').onclick = function(){ 
 
    let guess = parseInt(document.getElementById('yourGuess').value); 

    const funVariable = guessResult (guess, correctNumber); 

    if (funVariable === 0) {
        alert('Nice work! You guessed my number in '
        + guessN + ' tries '); 
        location.reload();
    }


    else if (funVariable === +1)
    {	 
        guessN++; 
        alert('Your number was too high!'); 
    } 


    else
    { 
        guessN++; 
        alert('Your number was too low!'); 
    } 


    if (guessN === 1)
    {
        alert('you have 3 guesses remaining');
    }


    if (guessN === 2)
    {
        alert('you have 2 guesses remaining');
    }


    if (guessN === 3)
    {
        alert('you have 1 guesses remaining');
    }


    if (guessN === 4)
    {
        alert('Sorry! You have lost the guessing game. My number was ' + correctNumber + ' Please try again!');
        location.reload();
    }

    
}; 
