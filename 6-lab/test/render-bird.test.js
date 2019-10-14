import renderBird from '../products/render-bird.js';

const test = QUnit.test;

QUnit.module('Render Bird');

test('renders a bird', assert => {
    // arrange
    const scrubJay = {
        id: 'scrub-jay',
        name: 'Scrub Jay',
        image: '../assets/scrub_jay.jpg',
        family: 'Crow',
        Wingspan: '15 inches',
        Habitat: 'Oak woods, parks, and backyards.',
        price: 21.00,
        cost: 10.25
    };
    const expected = '<li class="undefined" title="undefined"><h3>Scrub Jay</h3><img src="../assets/../assets/scrub_jay.jpg" alt="Scrub Jay image"><p class="price">$21.00<button value="scrub-jay">Add</button></p></li>';
    
    // act
    const dom = renderBird(scrubJay);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});