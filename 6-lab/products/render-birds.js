const emptyCart = [{ id: '', quantity: 0 }];
export const CART_KEY = 'cart';

export const getById = (id, birds) => {
    let matchingBird = { id, quantity: 1 };


    birds.forEach(bird => {
        if (bird.id === id) {
            matchingBird = bird;
        }
    });

    return matchingBird;
};


export function findById(items, id) {
    // loop the array
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }

    // loop done, nothing found
    return null;
}

export const incrementInCartById = (id, cart) => {
    let thereIsAMatch = false;
    cart.forEach(order => {
        if (order.id === id) {
            order.quantity++;
            thereIsAMatch = true;
        }
    });

    if (thereIsAMatch) {
        return;
    } else {
        const newItem = {
            id: id,
            quantity: 1,
        };

        cart.push(newItem);

    }
};

const initializeEmptyCart = () => {
    const serializedCart = JSON.stringify(emptyCart);

    localStorage.setItem('cart', serializedCart);
};

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY));

const setCart = (currentCartInLocalStorage) => {
    const serializedNewCart = JSON.stringify(currentCartInLocalStorage);
    localStorage.setItem(CART_KEY, serializedNewCart);
};

export default (bird) => {

    const birdElement = document.createElement('li');
    birdElement.className = `${bird.category} bird-box`;
    birdElement.title = bird.description;

    const someHeader = document.createElement('h3');
    someHeader.textContent = bird.name;
    birdElement.appendChild(someHeader);

    const someImage = document.createElement('img');
    someImage.src = bird.image;
    someImage.alt = bird.name + ' image';

    birdElement.appendChild(someImage);

    const pTag = document
        .createElement('p');

    pTag.className = 'price';
    pTag.textContent = '$' + bird.price.toFixed(2);
    birdElement.appendChild(pTag);

    const myButton = document.createElement('button');

    myButton.textContent = 'Add';
    myButton.value = bird.id;
    myButton.addEventListener('click', () => {
       
        let currentCartInLocalStorage = getCart();
        if (!currentCartInLocalStorage) {
            initializeEmptyCart();
            currentCartInLocalStorage = getCart();
        }

        let birdToIncrement = findById(bird.id, currentCartInLocalStorage);

        birdToIncrement && birdToIncrement.quantity + 1;
     
        incrementInCartById(bird.id, currentCartInLocalStorage);
        setCart(currentCartInLocalStorage);
    });


    pTag.appendChild(myButton);

    return birdElement;
};