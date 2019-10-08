import renderBirds from '../products/render-birds.js';

const test = QUnit.test;

QUnit.module('Render Bird');

test('renders a bird', assert => {
    // arrange
    const woodThrush = {
        id: 'wood-thrush',
        name: 'Wood Thrush',
        image: 'wood_thrush.jpg',
        family: 'Thrush',
        Wingspan: '13 inches',
        Habitat: 'Parks and backyards.',
        price: 21.04,
        cost: 10.54
    };
    const expected = '<li class="undefined" title="undefined"><h3>Wood Thrush</h3><img src="../assets/wood_thrush.jpg" alt="Wood Thrush image"><p class="price">$21.04<button value="undefined">Add</button></p></li>';
     
    
    
    // act
    const dom = renderBirds(woodThrush);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});