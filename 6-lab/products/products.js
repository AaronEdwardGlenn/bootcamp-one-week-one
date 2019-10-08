import birds from '../data/birds.js';
import renderBirds from './render-birds.js';

const list = document.getElementById('birds');

for (let i = 0; i < birds.length; i++) {
    const bird = birds[i];
    const dom = renderBirds(bird);
    list.appendChild(dom);
}