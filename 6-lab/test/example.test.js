import renderBirds from '../products/render-birds.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
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


test('renders a table row', assert => {
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

    const woodThrushOrder = {
        id: 'wood-thrush',
        quantity: 2
    }; 

    const expected = '<tr><td>wood-thrush</td><td>2</td><td>21.00</td><td>10.25</td></tr>'
    ;
     
    
    
    // act
    const birdElementTr = renderTableRow(woodThrush, woodThrushOrder);
    const html = birdElementTr.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

