import birds from '../data/birds.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    // arrange
    const id = 'scrub-jay';
    const expected = 'Scrub Jay';

    // act
    const foundBird = findById(birds, id);

    // assert
    assert.ok(foundBird);
    assert.equal(foundBird.name, expected);
});

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundBird = findById(birds, id);

    // assert
    assert.equal(foundBird, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 5;
    const price = 5;
    const expected = 25;

    // act 
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate order total', (assert) => {
    // arrange
    const expected = 159.64;

    // act
    const orderTotal = calcOrderTotal(cart, birds);

    // assert
    assert.equal(orderTotal, expected);
});