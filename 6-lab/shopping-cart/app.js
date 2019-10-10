import renderTableRow from './render-table-row.js';
import dataBirds from '../data/birds.js';
import { makePrettyCurrency } from '../common/makePretty.js';

import { CART_KEY } from '../products/render-birds.js';

const tableElement = document.querySelector('tbody');

export const getById = (id, birds) => {
    let matchingBird;

    birds.forEach(bird => {
        if (bird.id === id) {
            matchingBird = bird;
        }
    });

    return matchingBird;
};

const getLineTotal = (order, item) => item.price * order.quantity;

const getCartTotal = (cart, birds) => {
    let cartTotal = 0;
    cart.forEach(order => {
        const orderBird = getById(order.id, birds);
        const lineTotal = getLineTotal(order, orderBird);

        cartTotal = cartTotal + lineTotal;
    });

    return cartTotal;
};

const addRow = (birdOrder, birds) => {
    const orderBird = getById(birdOrder.id, birds);
    const row = renderTableRow(orderBird, birdOrder);

    tableElement.appendChild(row);
};

const addRows = (cart, birds) => {
    cart.forEach(birdOrder => {
        addRow(birdOrder, birds);
    });
};

const buildTotalCell = (cart, birds) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = getCartTotal(cart, birds);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, birds) => {
    buildTotalCell(cart, birds);
    addRows(cart, birds);
};

const javascriptReadableCart = JSON.parse(localStorage.getItem(CART_KEY));

buildTable(javascriptReadableCart, dataBirds);