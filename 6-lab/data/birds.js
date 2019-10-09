const scrubJay = {
    id: 'scrub-jay',
    name: 'Scrub Jay',
    image: 'scrub_jay.jpg',
    family: 'Crow',
    Wingspan: '15 inches',
    Habitat: 'Oak woods, parks, and backyards.',
    price: 21.00,
    cost: 10.25
};

const woodThrush = {
    id: 'wood-thrush',
    name: 'Wood Thrush',
    image: 'wood_thrush.jpg',
    family: 'Thrush',
    Wingspan: '13 inches',
    Habitat: 'Parks and backyards.',
    price: 21.04,
    cost: 10.54
};

const whiteBreastedNuthatch = {
    id: 'white-breasted-nuthatch',
    name: 'White-Breated Nuthatch',
    image: 'nuthatch.jpg',
    family: 'Nuthatch',
    Wingspan: '11 inches',
    Habitat: 'Areas with plentiful trees',
    price: 24.00,
    cost: 12.00
};

const northernMockingbird = {
    id: 'northern-mockingbird',
    name: 'Northern Mockingbird',
    image: 'mockingbird.jpg',
    family: 'Mimic thrush',
    Wingspan: '14 inches',
    Habitat: 'Backyards, pastures, orchards, and woodland edges',
    price: 24.00,
    cost: 11.75
};

const mountianBluebird = {
    id: 'mountian-bluebird',
    name: 'Mountian Bluebird',
    image: 'bluebird.jpg',
    family: 'Thrush',
    Wingspan: '14 inches',
    Habitat: 'Meadows and prairies.',
    price: 21.34,
    cost: 10.34
};

const cedarWaxwing = {
    id: 'cedar-waxwing',
    name: 'Cedar Waxwing',
    image: 'waxwing.jpg',
    family: 'Waxwing',
    Wingspan: '7 inches',
    Habitat: 'Open woodlands, parks, and backyards.',
    price: 27.50,
    cost: 10.12
};

const blackCappedChickadee = {
    id: 'black-capped-chickadee',
    name: 'Black-Capped Chickadee',
    image: 'chickadee.jpg',
    family: 'Chickadee',
    Wingspan: '6 inches',
    Habitat: 'Wooded residential areas and open woodlands.',
    price: 20.76,
    cost: 10.75
};

const birds = [
    scrubJay,
    woodThrush,
    whiteBreastedNuthatch,
    northernMockingbird,
    mountianBluebird,
    cedarWaxwing,
    blackCappedChickadee
];

export default birds;

export const cart = [{
    id: 'scrub-jay',
    quantity: 5
}, {
    id: 'wood-thrush',
    quantity: 2
}, {
    id: 'white-breasted-nuthatch',
    quantity: 1
}, {
    id: 'northern-mockingbird',
    quantity: 5
}, {
    id: 'mountian-bluebird',
    quantity: 6
}, {
    id: 'cedar-waxwing',
    quantity: 4
}, {
    id: 'black-capped-chickadee',
    quantity: 10
}];
