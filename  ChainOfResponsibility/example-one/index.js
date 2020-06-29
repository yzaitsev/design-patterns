
const inventory = require('./inventory');

const Store = require('./Store');
const store = new Store('Steep and Deep', inventory);

const itemName = 'powder skis';
const result = store.find(itemName);

console.log(`--- result: `, result)
