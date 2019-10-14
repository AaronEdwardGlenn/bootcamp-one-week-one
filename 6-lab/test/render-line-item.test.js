import birds from '../data/birds.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    // arrange
    const lineItem = {
        id: 'scrub-jay',
        quantity: 1
    };
    const scrubJay = findById(birds, lineItem.id);
    const expected = '<tr><td class="align-left">Scrub Jay</td><td>1</td><td>$21.00</td><td class="line-item-total">$21.00</td></tr>';

    // act
    const dom = renderLineItem(lineItem, scrubJay);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});