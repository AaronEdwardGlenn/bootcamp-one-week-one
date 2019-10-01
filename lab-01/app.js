
const myButton = document.getElementById('action-button'); 
export const isCorrect = (userInput) => {
    if (userInput === 'yes') return true; 

    return false; 
}; 
if (myButton){
myButton.onclick = () => {
    
    const showStory = document.getElementById('thanks');
    showStory.classList.remove('hidden');

    alert ('Welcome to my quiz'); 
        const myConfirmation = confirm('Ready for Question 1?'); 
        const userAnswer = prompt('My Favorite Color is Green (yes/no)'); 
        const lowerCaseUserAnswer = userAnswer.toLowerCase(); 
        const trimmedLowerCaseUserAnswer = lowerCaseUserAnswer.trim(); 
    
        if (trimmedLowerCaseUserAnswer === 'yes') {
            alert ('right on'); 
        } 

        else {
            alert ('Nayyy'); 
        }


    alert ('Question 2'); 

        const userAnswer2 = prompt('My Favorite Tree is a Cedar (yes/no)');
        const lowerCaseUserAnswer2 = userAnswer2.toLowerCase(); 
        const trimmedLowerCaseUserAnswer2 = lowerCaseUserAnswer2.trim();  
        
        if (trimmedLowerCaseUserAnswer2 === 'yes') {
            alert ('right on'); 
        } 

        else {
            alert ('Nayyy'); 
        }


    alert ('Question 3'); 
        const userAnswer3 = prompt('My Favorite Place is Mt Hood (yes/no)'); 
        const lowerCaseUserAnswer3 = userAnswer3.toLowerCase(); 
        const trimmedLowerCaseUserAnswer3 = lowerCaseUserAnswer3.trim();  
        
        if (trimmedLowerCaseUserAnswer3 === 'no') {
            alert ('right on'); 
        } 

        else {
            alert ('Nayyy'); 
        }


    }
}
  
    
