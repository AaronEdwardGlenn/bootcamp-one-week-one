import { makePrettyCurrency } from '../common/makePretty.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default (birds, order) => {
    const tableRow = document.createElement('tr');

    const totalPrice = order.quantity * birds.price;
    const prettyPrice = makePrettyCurrency(birds.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(birds.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};