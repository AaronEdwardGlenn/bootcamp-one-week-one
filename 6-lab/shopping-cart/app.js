import renderTableRow from './render-table-row.js';
import birds, { cart } from '../data/birds.js';
import { makePrettyCurrency } from '../common/makePretty.js';

const tableElement = document.querySelector('tbody');


let cartTotal = 0;
cart.forEach(birdsOrder => {
    birds.forEach(birds => {
        let birdsTotal;

        if (birds.id === birdsOrder.id) {
            const row = renderTableRow(birds, birdsOrder);

            tableElement.appendChild(row);

            birdsTotal = birds.price * birdsOrder.quantity;

            cartTotal = cartTotal + birdsTotal;
        }
    });

    const totalCell = document.getElementById('order-total-cell');

    totalCell.textContent = makePrettyCurrency(cartTotal);

    // // loop through the birdss array to find the birds that matches the birds of this order
    // for (let i = 0; i < birdss.length; i++) {
    //     // if the id of the birds matches the id of the order . . . 
    //     if (birdss[i].id === birdsOrder.id) {
    //         // go ahead and render the table row
    //         const row = renderTableRow(birdss[i], birdsOrder);

    //         tableElement.appendChild(row);
    //     }
    // }



});