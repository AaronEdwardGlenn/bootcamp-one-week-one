function renderBirds(birds) {
    const li = document.createElement('li');
    li.className = birds.category;
    li.title = birds.description;

    const h3 = document.createElement('h3');
    h3.textContent = birds.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + birds.image;
    img.alt = birds.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + birds.price.toFixed(2);
    // const usd = birds.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = birds.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderBirds;