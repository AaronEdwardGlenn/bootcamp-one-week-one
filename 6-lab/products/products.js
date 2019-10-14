import birds from '../data/birds.js';
import renderBird from './render-bird.js';

const list = document.getElementById('birds');

for (let i = 0; i < birds.length; i++) {
    const bird = birds[i];
    const dom = renderBird(bird);

    list.appendChild(dom);
}


