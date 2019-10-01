// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isCorrect } from '../app.js';
const test = QUnit.test;

test('isCorrect should return true if the user says yes', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const usernswer = 'yes';

    //Act 
    // Call the function you're testing and set the result to a const

    const userAnswerIsCorrect = isCorrect(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});

