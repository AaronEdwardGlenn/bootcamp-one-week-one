import { findById } from '../common/utils.js';
import { toUSD } from '../common/utils.js';

function renderBird(bird) {
    const li = document.createElement('li');
    li.className = bird.category;
    li.title = bird.description;

    const h3 = document.createElement('h3');
    h3.textContent = bird.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + bird.image;
    img.alt = bird.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(bird.price);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = bird.id;
    button.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findById(cart, bird.id);

        if (!lineItem) {
            lineItem = {
                id: bird.id,
                quantity: 1
            };

            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1 ' + bird.name + ' added to cart');

    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderBird;