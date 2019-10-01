import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button'); 

myButton.onclick = () => {

    const showStory = document.getElementById('thanks');
    showStory.classList.remove('hidden');

    alert ('Welcome to my quiz'); 
    confirm('Ready for Question 1?'); 
    const userAnswer = prompt('My Favorite Color is Green (yes/no)'); 
    const lowerCaseUserAnswer = userAnswer.toLowerCase(); 
    const trimmedLowerCaseUserAnswer = lowerCaseUserAnswer.trim(); 

    const userIsCorrect1 = isCorrect(trimmedLowerCaseUserAnswer); 
    if(userIsCorrect1) {
        alert ('right on'); 
    } 

    else {
        alert ('Nayyy'); 
    }


    alert ('Question 2'); 

    const userAnswer2 = prompt('At the top of my plant list is a Cedar Tree (yes/no)');
    const lowerCaseUserAnswer2 = userAnswer2.toLowerCase(); 
    const trimmedLowerCaseUserAnswer2 = lowerCaseUserAnswer2.trim();  

    const userIsCorrect2 = isCorrect(trimmedLowerCaseUserAnswer2); 
    if(userIsCorrect2) {
        alert ('right on'); 
    } 

    else {
        alert ('Nayyy'); 
    }


    alert ('Question 3'); 

    const userAnswer3 = prompt('My Favorite Place is Mt Hood (yes/no)'); 
    const lowerCaseUserAnswer3 = userAnswer3.toLowerCase(); 
    const trimmedLowerCaseUserAnswer3 = lowerCaseUserAnswer3.trim(); 
    const userIsCorrect3 = isCorrect(trimmedLowerCaseUserAnswer3); 

    if(userIsCorrect3) {
        alert ('right on'); 
    } 

    else {
        alert ('Nayyy'); 
    }
};