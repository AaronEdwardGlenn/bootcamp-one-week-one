// import functions
import './checkResult.js';
import './getRandomThrow.js';
import getRandomThrow from './getRandomThrow.js';
import checkResult from './checkResult.js';


//get DOM elements
//const rockThrow = document.getElementById('rock');
//const paperThrow = document.getElementById('paper');
//const scissorsThrow = document.getElementById('scissors');
const oppSpan = document.getElementById('opp-throw');
const gameResultSpan = document.getElementById('game-result');
//const gamesPlayedSpan = document.getElementById('games-played');
const wldSpan = document.getElementById('games-wld');
const shootButton = document.getElementById('shoot-button');
//const playAgainButton = document.getElementById();

//initial state
let wld = [0, 0, 0];
let oppLastThrow;






let randomNum = () => Math.floor(Math.random() * 3);

const playGame = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedThrow = selectedRadioButton.value;  
    
    //need to generate new random number each time playGame called
    let compCurrentThrow = getRandomThrow(randomNum());
    
    let gameResult = checkResult(userSelectedThrow, compCurrentThrow);
    gameResultSpan.textContent = gameResult;
    oppSpan.textContent = compCurrentThrow;
    
      
};


//const updateSpans = () => {
//  gameResultSpan.textContent = gameResult;
   
//}



shootButton.addEventListener('click', playGame);
