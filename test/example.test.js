import { isCorrect } from ../functions.js; 
const test = QUnit.test;
const userAnswerIsCorect = isCorrect(userAnswer); 

test('isCorrect should return true if the user says yes', function (assert) {

    


    const userAnswer=no; 

    const userAnswerIsCorrect = isCorrect(userAnswer);
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
assert.equal(userAnswerIsCorect, true); 

});
